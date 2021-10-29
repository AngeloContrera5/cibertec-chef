import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';
import { EncuestaItem } from 'src/app/models/encuesta-item.model';
import { Encuesta } from 'src/app/models/encuesta.model';
import { Usuario } from 'src/app/models/usuario.model';
import { EncuestaItemService } from 'src/app/services/encuesta-item.service';
import { EncuestaService } from 'src/app/services/encuesta.service';

@Component({
  selector: 'app-encuesta',
  templateUrl: './encuesta.component.html',
  styleUrls: ['./encuesta.component.css']
})
export class EncuestaComponent implements OnInit {
  //setear usuario -- cuando se loguee
  usuarioRegAct:Usuario = {
    id_usuario:1
  }

  //variables item
  tituloEncuesta:String = "";

  itemActualiza:number = 0;
  
  nombreRecetaAct:string =""; 
  puntuacionRecetaAct:number = 0; 
  
  nombreRecetaReg:string =""; 
  puntuacionRecetaReg:number = 0;

  //obtener luego el ultimo codigo de la tabla encuesta y sumarle 1
  idEncuesta:Encuesta ={
    id_encuesta: 0
  }

  //array
  itemLista: EncuestaItem [] = [];
  itemListaRegistrar: EncuestaItem [] = [];
  itemListaActualizar: EncuestaItem [] = [];
  itemListaEliminar: EncuestaItem [] = [];

  //variables encuesta 
  encuesta:Encuesta [] = []
  encuestaItem:EncuestaItem [] = []
  encuesta_by_id: Encuesta = {
    id_encuesta:0
  }

  constructor(
    public modal: NgbModal, 
    private encuestaService: EncuestaService,
    private encuestaItemService: EncuestaItemService
    ) { 
    this.listarEncuestas();
    this.retornaCodigo();
  }
  //listado de las encuestas
  listarEncuestas(){
    this.encuestaService.listarEncuestas().subscribe(
      (encuesta) => this.encuesta = encuesta
    )
  }
  retornaCodigo (){
    this.encuestaService.retornarCodigo().subscribe(
      response => this.idEncuesta ={
        id_encuesta: response
      }
    )
  }
  
  agregarItemReg (){
    if (this.nombreRecetaReg != "") {
      this.itemLista.push({
        id_encuesta_item:this.itemLista.length+1, 
        nombre_receta:this.nombreRecetaReg, 
        puntuacion:this.puntuacionRecetaReg,
        encuesta:this.idEncuesta 
      });
      this.modal.dismissAll();
      this.nombreRecetaReg = "";
      this.puntuacionRecetaReg = 0;
    }else alert("Ingresa el nombre de una receta")
    
  }

  mostrarModalActualizarItem(contenido:any,item:any){
    //mostrar modal
    this.modal.open(contenido);//
    //cambiar las variables para mostrar en el modal
    this.itemActualiza = item.id_encuesta_item;
    this.nombreRecetaAct = item.nombre_receta;
    this.puntuacionRecetaAct = item.puntuacion;
  }

  mostrarModalNuevoItem(contenido:any){
    //mostrar modal
    this.modal.open(contenido);
  }

  mostrarModalVerEncuesta(contenido:any,encuestaObj:any){
    this.itemListaActualizar=[]
    //mostrar modal
    this.modal.open(contenido);
    this.encuestaService.getEncuestaxId(encuestaObj.id_encuesta).subscribe(
      response => {
        this.encuesta_by_id = {
          id_encuesta: response.id_encuesta,
          usuario: response.usuario,
          titulo_encuesta: response.titulo_encuesta,
          fecha_registra: response.fecha_registra
        }
      }
    );
    //agregar los items by codigo
    this.encuestaItemService.getItemEncuestaxId(encuestaObj.id_encuesta).subscribe(
      response => {
        this.encuestaItem = response
        //guardamos en el array
        response.forEach(objItem => {
          this.itemListaActualizar.push(objItem)
        });
        console.log(this.itemListaActualizar)
      }
    )
  }

  limpiarItem(){
    this.itemLista=[];
  }

  actualizarItemRegistro(){
    let itemId = this.itemActualiza;
    let index = this.itemLista.findIndex(function(objItem){
      return objItem.id_encuesta_item == itemId;
    });
    this.itemLista.splice(index, 1,{id_encuesta_item:itemId, 
                                            nombre_receta:this.nombreRecetaAct, 
                                            puntuacion:this.puntuacionRecetaAct,
                                            encuesta:this.idEncuesta});
    this.modal.dismissAll();
  }

  eliminarItemRegistro(item:any){
    let index = this.itemLista.findIndex(function(objItem){
      return objItem.id_encuesta_item == item.id_encuesta_item;
    });
    this.itemLista.splice(index, 1);
  }

  registrarEncuesta(){
    ///let arrayRegistraItem = new EncuestaItem();
    let array = this.itemLista;
    array.forEach(item => {
      this.itemListaRegistrar.push({
       nombre_receta : item.nombre_receta,
       puntuacion : item.puntuacion,
       encuesta : item.encuesta
      })
    });
    console.log(JSON.stringify(this.itemListaRegistrar)) 
    //objeto de encuesta para registrar
    let arrayEncuestaRegistra = new Encuesta()
    arrayEncuestaRegistra = {
      usuario: this.usuarioRegAct,
      titulo_encuesta: this.tituloEncuesta+""
    }
    console.log(JSON.stringify(arrayEncuestaRegistra))
    //registro de la tabla encuesta
    this.encuestaService.registrarEncuesta(arrayEncuestaRegistra).subscribe(
      response => {
        alert(response.mensaje+"----Encuesta")
        this.encuestaItemService.registrarEncuestaItems(this.itemListaRegistrar).subscribe(
          responseItem => alert(responseItem.mensaje+"----Item")
        )
      } 
    )
    //registro de la tabla encuesta_item
    
    //window.location.reload();
  }

  ngOnInit(): void {
    $.getScript('assets/dist/js/file.js');
    $.getScript('assets/dist/js/datatable.js');
  }

}
