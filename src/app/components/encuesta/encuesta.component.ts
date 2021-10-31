import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { EncuestaItem } from 'src/app/models/encuesta-item.model';
import { Encuesta } from 'src/app/models/encuesta.model';
import { Usuario } from 'src/app/models/usuario.model';
import { EncuestaItemService } from 'src/app/services/encuesta-item.service';
import { EncuestaService } from 'src/app/services/encuesta.service';

declare var Swal: any;

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

  allDataFetched: boolean = false;

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
  tituloEncuestaActualiza:String = "";

  tituloRecetaActualiza:String [] = [];

  encuesta:Encuesta [] = []

  encuestaActualiza:Encuesta [] = []
  encuestaItem:EncuestaItem [] = []
  encuesta_by_id: Encuesta = {
    id_encuesta:0
  }

  idEncuestaFinalizar:number = 0

  constructor(
    public modal: NgbModal,
    private encuestaService: EncuestaService,
    private encuestaItemService:EncuestaItemService,
    ) { 
    this.listarEncuestas();
    this.retornaCodigo();
  }

  showModalReg(msg:string, detalle:string){
    if (msg == 'errBd') {
      Swal.fire('',detalle,'error');
    }else if (msg == 'errReg') {
      Swal.fire('',detalle,'error');
    }else {
      Swal.fire('',detalle,'success');
    }
  }

  //listado de las encuestas
  listarEncuestas(){
    this.encuestaService.listarEncuestas().subscribe(
      (encuesta) => {
        this.encuesta = encuesta,
        this.allDataFetched = true
      } 
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
    this.encuestaActualiza=[]
    //mostrar modal
    this.modal.open(contenido);
    this.encuestaService.getEncuestaxId(encuestaObj.id_encuesta).subscribe(
      response => {
        this.encuesta_by_id = {
          id_encuesta: response.id_encuesta,
          usuario: response.usuario,
          titulo_encuesta: response.titulo_encuesta,
          fecha_registra: response.fecha_registra,
          fecha_actualiza: response.fecha_actualiza
        }
        if(this.encuesta_by_id.fecha_actualiza == null) this.encuesta_by_id.fecha_actualiza ="-";
        this.encuestaActualiza.push(response),
        this.tituloEncuestaActualiza = response.titulo_encuesta+"",
        console.log(this.encuestaActualiza)
      }
    );
    //agregar los items by codigo
    this.encuestaItemService.getItemEncuestaxId(encuestaObj.id_encuesta).subscribe(
      response => {
        this.itemListaActualizar = response
        
        //guardamos en el array
        this.itemListaActualizar.forEach( item => {
          this.tituloRecetaActualiza.push(item.nombre_receta+"")
        })
        console.log("hola")
        console.log(this.itemListaActualizar)
      }
    )
  }

  limpiarItem(){
    this.tituloEncuesta =""
    this.itemLista=[];
  }

  actualizarItemArray(){
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
    if(this.tituloEncuesta != ''){
      if(this.itemLista.length > 2){
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
            //AGREGAR SWEET ALERT
            //alert(response.mensaje+"----Encuesta")
            if (response.mensaje == "regOk"){
              this.showModalReg(response.mensaje, 'La encuesta fue registrada exitosamente.')
            } else if (response.mensaje == "errReg") {
              this.showModalReg(response.mensaje, 'La encuesta no fue registrada exitosamente.')
            } else {
              this.showModalReg(response.mensaje, 'Ocurrió un error en el sistema')
            }
            this.encuestaItemService.registrarEncuestaItems(this.itemListaRegistrar).subscribe(
              //responseItem => alert(responseItem.mensaje+"----Item")
            )
            this.tituloEncuesta =""
            this.itemLista=[];
            this.listarEncuestas()
          } 
        )
      } else alert("La cantidad de items debe ser mayor a 3")
    } else alert("Debe ingresar el Título de la encuesta")
    
  }

  ActualizarEncuesta(){

    let arrayEncuestaActualiza = new Encuesta()
    arrayEncuestaActualiza = {
      id_encuesta: Number(this.encuestaActualiza[0].id_encuesta),
      usuario: this.usuarioRegAct,
      titulo_encuesta: this.tituloEncuestaActualiza+""
    }
    console.log(JSON.stringify(arrayEncuestaActualiza))
    //registro de la tabla encuesta
    this.encuestaService.actualizarEncuesta(arrayEncuestaActualiza).subscribe(
      response => {
        //alert(response.mensaje+"----EncuestaActualizada")
        //para actualizar los items --- itemListaActualizar
        let arrayActItem = this.itemListaActualizar
        for (let i = 0; i < arrayActItem.length; i++) {
          const element = arrayActItem[i];
          this.itemListaActualizar.splice(i, 1,{id_encuesta_item : arrayActItem[i].id_encuesta_item, 
            nombre_receta : this.tituloRecetaActualiza[i]+"", 
            puntuacion : arrayActItem[i].puntuacion,
            encuesta: arrayActItem[i].encuesta
          });
        }
        if (response.mensaje == "regOk"){
          this.showModalReg(response.mensaje, 'La encuesta fue registrada exitosamente.')
        } else if (response.mensaje == "errReg") {
          this.showModalReg(response.mensaje, 'La encuesta no fue registrada exitosamente.')
        } else {
          this.showModalReg(response.mensaje, 'Ocurrió un error en el sistema')
        }
        this.tituloRecetaActualiza = []
        console.log(arrayActItem);
        let objItemActualizar = arrayActItem
        this.encuestaItemService.registrarEncuestaItems(objItemActualizar).subscribe(
          //responseItem => alert(responseItem.mensaje+"----ItemActualizado")
        )
        this.listarEncuestas()
      } 
    )
    this.modal.dismissAll()
  }

  enviarIdEncuestaFinalizar(idEncuesta:any){
    //alert(idEncuesta)
    this.idEncuestaFinalizar = idEncuesta
  }

  finalizarEncuesta(){
    //alert(this.idEncuestaFinalizar)
    this.encuestaService.finalizarEncuesta(this.idEncuestaFinalizar).subscribe(
      response => {
        //let mensaje = response
        //alert(mensaje)
        this.showModalReg('todoOK', 'La encuesta N° '+this.idEncuestaFinalizar+' fue finalizada exitosamente.')
        this.listarEncuestas()
      }
    )
  }

  //contenidoModalActualizarItemActutaliza
  ngOnInit(): void {
    $.getScript('assets/dist/js/file.js');
    $.getScript('assets/dist/js/datatable.js');
  }

}
