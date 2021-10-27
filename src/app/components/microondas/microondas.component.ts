import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';

import * as $ from "jquery";
import { Microondas } from 'src/app/models/microondas.model';
import { Receta } from 'src/app/models/receta.model';
import { MicroondasService } from 'src/app/services/microondas.service';
import { RecetaService } from 'src/app/services/receta.service';
declare var Swal: any;

@Component({
  selector: 'app-microondas',
  templateUrl: './microondas.component.html',
  styleUrls: ['./microondas.component.css']
})
export class MicroondasComponent implements OnInit {

  recetas: Receta []=[]
  microondas: Microondas[]=[]
  microondasxReceta: Microondas[]=[]
  microonda: Microondas = {
    receta:{
    }
  }
  microondaEditar: Microondas = {
    receta:{
    }
  }
  microondaVer: Microondas = {}
  microondaEliminar: Microondas = {}
  receta: Receta = {tiempo_preparacion: 1,
    porcion: 1,
    dificultad: {
      id_dificultad: -1
    },
    dieta: {
      id_dieta: -1
    },
    estiloPlato: {
      id_estilo_plato: -1
    },
    tipoComida: {
      id_tipo_comida: -1
    },
    ocasion: {
      id_ocasion: -1
    },}
  allDataFetched: boolean = false;
  allDataFetched1: boolean = false;

  constructor(private recetaService: RecetaService, private microondasService: MicroondasService) { 
    this.recetaService.listarRecetasActivas().subscribe(
      (recetas) => {
        this.recetas = recetas ,
        this.allDataFetched1 = true;}
    );
    this.microondasService.listarMicroondas().subscribe(
      (microondas) => {
        this.microondas = microondas,
          this.allDataFetched = true;
      }
    );

  }

  ngOnInit(): void {
    $.getScript('assets/dist/js/file.js');
    $.getScript('assets/dist/js/datatable.js');
    $.getScript('assets/build/js/microonda.js');
  }



  obtenerReceta(val:any){

    this.recetaService.getRecetaxId(Number(val)).subscribe(
      (receta) => {
        this.receta = receta;
      });

     /* this.microondasService.listarMicroondasxReceta(this.receta.id_receta).subscribe(
        (microondasxReceta) => {
          this.microondasxReceta = microondasxReceta;
        });*/
   
  }
  cambioNombre(){
    this.microondasService.listarMicroondasxReceta(Number($("#idcodigoReceta").val())).subscribe(
      (microondasxReceta) => {
        this.microondasxReceta = microondasxReceta;
      });
  }
  registra() {
    if ($("#idCodMicroondas").val() == "") {
      this.microonda.fotoBase64 = $('.preview img').attr('src');
    
        this.microonda.receta=this.receta;
        var i=0;
        
        this.microondasxReceta.forEach(obj => {
          if(obj.descripcion==$("#idnombre").val()){
            i=1;
            
          }
        });
      if(i==0){
        this.microondasService.registrarMicroondas(this.microonda).subscribe(


          Swal.fire({
            title: 'Se está registrando horno microondas',
            text: 'Procesando datos...',
            width: '500px',
            imageUrl: 'https://www.boasnotas.com/img/loading2.gif',
            imageHeight: 150,
            imageWidth: 150,
            buttons: false,
            timerProgressBar: true,
            closeOnClickOutside: false,
            timer: 10000,
            showCancelButton: false,
            showConfirmButton: false,
          })
            .then(function () {
              Swal.fire({
                title: 'Se registró horno microondas exitosamente.',
                text: '',
                icon: 'success',
                buttons: false,
                closeOnClickOutside: false,
                timer: 3500,
                showCancelButton: false,
                showConfirmButton: false,
  
              })
                .then(function () {
                  window.location.href = "http://localhost:4200/microondas";
                });
            })
  
          ,
          error => {
            console.log(error);
            Swal.fire({
              title: 'Error al registrar horno microondas.',
              text: '',
              icon: 'error',
              confirmButtonColor: '#780116',
              showCloseButton: true,
            })
          },
        );
      }
      else{
        Swal.fire({
          title: 'La receta ya tiene este horno microondas.',
          text: '',
          icon: 'warning',
          confirmButtonColor: '#780116',
          showCloseButton: true,
        })
      }
     
    }
    else if ($("#idCodMicroondas").val() != "") {
        this.microondasService.getMicroondasxId(Number($("#idCodMicroondas").val())).subscribe(
          (microondaEditar) => {
            this.microondaEditar = microondaEditar;
          });

      Swal.fire({
        title: '¿Seguro que deseas modificar horno microondas?',
        text: '',
        icon: "warning",
        closeOnClickOutside: false,
        confirmButtonText: 'Sí',
        confirmButtonColor: '#780116',
        showCancelButton: true,
        cancelButtonText: "No",
        dangerMode: true,

      }).then((result: { [x: string]: any; }) => {
        if (result['isConfirmed']) {
          this.microondaEditar.descripcion = String($("#idnombre").val());
          this.microondaEditar.receta = this.receta;
      

          if (this.microondaEditar.fotoBase64 != $('.preview img').attr('src')) {
            this.microondaEditar.fotoBase64 = $('.preview img').attr('src')
          }



          this.microondasService.actualizarMicroondas(this.microondaEditar).subscribe(

            Swal.fire({
              title: 'Se está modificando horno microondas',
              text: 'Procesando datos...',
              width: '500px',
              imageUrl: 'https://www.boasnotas.com/img/loading2.gif',
              imageHeight: 150,
              imageWidth: 150,
              buttons: false,
              timerProgressBar: true,
              closeOnClickOutside: false,
              timer: 10000,
              showCancelButton: false,
              showConfirmButton: false,
            })
              .then(function () {
                Swal.fire({
                  title: 'Se modificó horno microondas exitosamente.',
                  text: '',
                  icon: 'success',
                  buttons: false,
                  closeOnClickOutside: false,
                  timer: 3500,
                  showCancelButton: false,
                  showConfirmButton: false,

                })
                  .then(function () {
                    window.location.href = "http://localhost:4200/microondas";
                  })


              }),
            error => {
              console.log(error);
              Swal.fire({
                title: 'Error al modificar horno microondas.',
                text: '',
                icon: 'error',
                confirmButtonColor: '#780116',
                showCloseButton: true,
              })
            },
          );


        } else {
          Swal.fire({
            title: 'Se canceló modificación.',
            text: '',
            icon: 'error',
            confirmButtonColor: '#780116',
            showCloseButton: true,
          })
        }
      })
    }
  }



  elimina(val: any, val2: any) {
    const idMicroondas = val;
    const estado = val2;
    this.microondasService.getMicroondasxId(idMicroondas).subscribe(
      (microondaEliminar) => {
        this.microondaEliminar = microondaEliminar;
      });

    if (estado == 2) {
      Swal.fire({
        title: 'El horno microondas ya está en estado inactivo.',
        text: '',
        icon: 'warning',
        confirmButtonColor: '#780116',
        showCloseButton: true,
      })
    }
    else {

      Swal.fire({
        title: '¿Seguro que deseas modificar horno microondas a estado inactivo?',
        text: '',
        icon: "warning",
        closeOnClickOutside: false,
        confirmButtonText: 'Sí',
        showCancelButton: true,
        cancelButtonText: "No",
        dangerMode: true,
        confirmButtonColor: '#780116',
      }).then((result: { [x: string]: any; }) => {
        if (result['isConfirmed']) {
          this.microondaEliminar.estado = 2;
          this.microondasService.actualizarMicroondas(this.microondaEliminar).subscribe(
            response => {
              console.log(response.mensaje);

              Swal.fire({
                title: 'Se modificó horno microondas a estado inactivo exitosamente.',
                text: '',
                icon: 'success',
                buttons: false,
                closeOnClickOutside: false,
                timer: 2500,
                showCancelButton: false,
                showConfirmButton: false,

              })
                .then(function () {
                  window.location.href = "http://localhost:4200/microondas";
                });


            },
            error => {
              console.log(error);
              Swal.fire({
                title: 'Error al modificar horno microondas.',
                text: '',
                icon: 'error',
                confirmButtonColor: '#780116',
                showCloseButton: true,
              })
            },
          );

        } else {
          Swal.fire({
            title: 'Se canceló modificación.',
            text: '',
            icon: 'error',
            confirmButtonColor: '#780116',
            showCloseButton: true,
          })
        }
      })
    }

  }

  ver(val: any) {
    const idMicroondas = val;
    this.microondasService.getMicroondasxId(idMicroondas).subscribe(
      (microondaVer) => {
        this.microondaVer = microondaVer;
        $("#detalle1").text(idMicroondas);
        $("#detalle2").attr("src", this.microondaVer.fotoBase64);
        $("#detalle3").text(String(this.microondaVer.descripcion));
        $("#detalle4").text(String(this.microondaVer.usuario?.nombres + " " + this.microondaVer.usuario?.apellidos));
        $("#detalle5").text(String(formatDate(this.microondaVer.fecha_registro!, 'dd/MM/yyyy', "en-US")));
        if (microondaVer.fecha_actualiza == null) {
          $("#detalle6").text("No existe");
        }
        else {
          $("#detalle6").text(String(formatDate(this.microondaVer.fecha_actualiza!, 'dd/MM/yyyy', "en-US")));
        }

        $("#detalle15").text(String(this.microondaVer.receta!.id_receta));
        $("#detalle7").text(String(this.microondaVer.receta!.nombre_platillo));
        $("#detalle8").text(String(this.microondaVer.receta!.tiempo_preparacion) + " minuto(s)");
        $("#detalle9").text(String(this.microondaVer.receta!.porcion));
        $("#detalle10").text(String(this.microondaVer.receta!.dificultad?.descripcion));
        $("#detalle11").text(String(this.microondaVer.receta!.ocasion?.nombre));
        $("#detalle12").text(String(this.microondaVer.receta!.dieta?.nombre));
        $("#detalle13").text(String(this.microondaVer.receta!.estiloPlato?.nombre));
        $("#detalle14").text(String(this.microondaVer.receta!.tipoComida?.nombre));
        $("#detalle16").attr("src", this.microondaVer.receta!.fotoBase64);
       

      });

  }

  editar(val: any,val2: any) {
    const idMicroondas = val;
    const estado=val2;
    if(estado!=2){
    this.microondasService.getMicroondasxId(idMicroondas).subscribe(
      (microondaEditar) => {
        this.microondaEditar = microondaEditar;
        $("#idRegistrar").trigger('reset');
        $("#idCodMicroondas").val(idMicroondas);
        $('#idnombre').removeClass('error').next('label.error').remove();
        $('#elimFoto').click();
        $("#errorimagen").text();

        $('#btnRegistrar').prop('disabled', false);
        $('#btnLimpiar').prop('disabled', false);
     
        $("#idcodigoReceta").val(String(this.microondaEditar.receta!.id_receta));
        $("#idnombreReceta").val(String(this.microondaEditar.receta!.nombre_platillo));
        $("#idtiempoReceta").val(String(this.microondaEditar.receta!.tiempo_preparacion));
        $("#idporcionReceta").val(String(this.microondaEditar.receta!.porcion));        
        $("#idimgMicroonda").attr("src", this.microondaEditar.receta!.fotoBase64);        

        $("#idnombre").val(String(this.microondaEditar.descripcion));

       
        $('#previews').empty();
        $("#previews").append("<div class='row mt-2 dz-image-preview'><div class='col-auto'><span class='preview'><img" +
          " src='" + this.microondaEditar.fotoBase64 + "' alt='Foto-de-receta-guardada' style='width:350px; height:200px'></span></div>" +
          "<div class='col d-flex align-items-center'><p clas='mb-0'><span class='lead'>Foto-de-microondas-" + idMicroondas + ".jpg</span></p>" +
          "</div></div></div>");



      });
    }
    else{
      Swal.fire({
        title: 'El horno microondas está en estado inactivo.',
        text: '',
        icon: 'warning',
        confirmButtonColor: '#780116',
        showCloseButton: true,
      })
    }
  }

}
