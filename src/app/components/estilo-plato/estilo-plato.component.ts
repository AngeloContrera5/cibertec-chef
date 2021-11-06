import { Component, OnInit } from '@angular/core';
import { EstiloPlato } from 'src/app/models/estilo-plato.model';
import { EstiloPlatoService } from 'src/app/services/estilo-plato.service';
import * as $ from "jquery";
import { TokenService } from 'src/app/services/token.service';
declare var Swal: any;

@Component({
  selector: 'app-estilo-plato',
  templateUrl: './estilo-plato.component.html',
  styleUrls: ['./estilo-plato.component.css']
})
export class EstiloPlatoComponent implements OnInit {

  estilos: EstiloPlato[] = [];
  estilo: EstiloPlato = {
    id_estilo_plato: 0,
    usuario:{
      id_usuario: parseInt(this.tokenService.getId())
    }
  };
  estiloEditar: EstiloPlato = {
    id_estilo_plato: 0,
  };
  estiloEliminar: EstiloPlato = {
    id_estilo_plato: 0,
  };
  allDataFetched: boolean = false;
  nombre: String = "";

  constructor(private estiloService: EstiloPlatoService,private tokenService: TokenService) {
    $("#example1 > tbody").empty(),
    this.estiloService.listarEstiloPlatosActivas().subscribe(
      (estilos) => {
        this.estilos = estilos,
          this.allDataFetched = true;

      }

    );

  }

  ngOnInit(): void {

    $.getScript('assets/dist/js/datatable.js');
    $.getScript('assets/build/js/estilo-plato.js');
  }

  registra() {
    if ($("#idCodEstiloPlato").val() == "") {
      this.estiloService.registrarEstiloPlato(this.estilo).subscribe(
        response => {
          console.log(response.mensaje);

          Swal.fire({
            title: 'Se registró estilo de plato exitosamente.',
            text: '',
            icon: 'success',
            buttons: false,
            closeOnClickOutside: false,
            timer: 2500,
            showCancelButton: false,
            showConfirmButton: false,

          })
            .then(function () {
              window.location.href = "http://localhost:4200/estilo-plato";
            });


        },
        error => {
          console.log(error);
          Swal.fire({
            title: 'Error al registrar estilo de plato.',
            text: '',
            icon: 'error',
            showCloseButton: true,
          })
        },
      );
    }
    else if ($("#idCodEstiloPlato").val() != "") {
      this.estiloService.getEstiloPlatoxId(Number($("#idCodEstiloPlato").val())).subscribe(
        (estiloEditar) => {
          this.estiloEditar = estiloEditar;
        });


      Swal.fire({
        title: '¿Seguro que deseas modificar estilo de plato?',
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
          this.estiloEditar.nombre = String($("#idnombre").val());
          this.estiloEditar.usuario!.id_usuario= parseInt(this.tokenService.getId());
          this.estiloService.actualizarEstiloPlato(this.estiloEditar).subscribe(
            response => {
              console.log(response.mensaje);

              Swal.fire({
                title: 'Se modificó estilo de plato exitosamente.',
                text: '',
                icon: 'success',
                buttons: false,
                closeOnClickOutside: false,
                timer: 2500,
                showCancelButton: false,
                showConfirmButton: false,

              })
                .then(function () {
                  window.location.href = "http://localhost:4200/estilo-plato";
                });


            },
            error => {
              console.log(error);
              Swal.fire({
                title: 'Error al modificar estilo de plato.',
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
    const idProduc = val;
    const estado = val2;
    this.estiloService.getEstiloPlatoxId(idProduc).subscribe(
      (estiloEliminar) => {
        this.estiloEliminar = estiloEliminar;
      });
   /* if (estado == 2) {
      Swal.fire({
        title: 'El estilo de plato ya está en estado inactivo.',
        text: '',
        icon: 'warning',
        confirmButtonColor: '#780116',
        showCloseButton: true,
      })
    }
    else {*/

      Swal.fire({
        title: '¿Seguro que deseas modificar estilo de plato a estado inactivo?',
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
          this.estiloEliminar.estado = 2;
          this.estiloEliminar.usuario!.id_usuario= parseInt(this.tokenService.getId());
          this.estiloService.actualizarEstiloPlato(this.estiloEliminar).subscribe(
            response => {
              console.log(response.mensaje);

              Swal.fire({
                title: 'Se modificó estilo de plato a estado inactivo exitosamente.',
                text: '',
                icon: 'success',
                buttons: false,
                closeOnClickOutside: false,
                timer: 2500,
                showCancelButton: false,
                showConfirmButton: false,

              })
                .then(function () {
                  window.location.href = "http://localhost:4200/estilo-plato";
                });


            },
            error => {
              console.log(error);
              Swal.fire({
                title: 'Error al modificar estilo de plato.',
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
   /* }*/

  }
