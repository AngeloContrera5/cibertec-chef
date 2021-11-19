import { Component, OnInit } from '@angular/core';
import { TipoComidaService } from 'src/app/services/tipo-comida.service';
import { TipoComida } from 'src/app/models/tipo-comida.model';
import * as $ from "jquery";
import { TokenService } from 'src/app/services/token.service';
declare var Swal: any;

@Component({
  selector: 'app-tipo-comida',
  templateUrl: './tipo-comida.component.html',
  styleUrls: ['./tipo-comida.component.css']
})
export class TipoComidaComponent implements OnInit {


  tipos: TipoComida[] = [];
  tipo: TipoComida = {
    id_tipo_comida: 0,
    usuario:{
      id_usuario: parseInt(this.tokenService.getId())
    }
  };
  tipoEditar: TipoComida = {
    id_tipo_comida: 0,
  };
  tipoEliminar: TipoComida = {
    id_tipo_comida: 0,
  };
  allDataFetched: boolean = false;
  nombre: String = "";

  constructor(private tipoService: TipoComidaService,private tokenService: TokenService) {
    $("#example1 > tbody").empty(),
    this.tipoService.listarTipoComidasActivas().subscribe(
      (tipos) => {
        this.tipos = tipos,
          this.allDataFetched = true;

      }

    );

  }

  ngOnInit(): void {

    $.getScript('assets/dist/js/datatable.js');
    $.getScript('assets/build/js/tipo-comida.js');
  }

  registra() {
    if ($("#idCodTipoComida").val() == "") {
      this.tipoService.registrarTipoComida(this.tipo).subscribe(
        response => {
          console.log(response.mensaje);

          Swal.fire({
            title: 'Se registró tipo de comida exitosamente.',
            text: '',
            icon: 'success',
            buttons: false,
            closeOnClickOutside: false,
            timer: 2500,
            showCancelButton: false,
            showConfirmButton: false,

          })
            .then(function () {
              window.location.href = "http://localhost:4200/tipo-comida";
            });


        },
        error => {
          console.log(error);
          Swal.fire({
            title: 'Error al registrar tipo de comida.',
            text: '',
            icon: 'error',
            showCloseButton: true,
          })
        },
      );
    }
    else if ($("#idCodTipoComida").val() != "") {
      this.tipoService.getTipoComidaxId(Number($("#idCodTipoComida").val())).subscribe(
        (tipoEditar) => {
          this.tipoEditar = tipoEditar;
        });


      Swal.fire({
        title: '¿Seguro que deseas modificar tipo de comida?',
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
          this.tipoEditar.nombre = String($("#idnombre").val());
          this.tipoEditar.usuario!.id_usuario= parseInt(this.tokenService.getId());
          this.tipoService.actualizarTipoComida(this.tipoEditar).subscribe(
            response => {
              console.log(response.mensaje);

              Swal.fire({
                title: 'Se modificó tipo de comida exitosamente.',
                text: '',
                icon: 'success',
                buttons: false,
                closeOnClickOutside: false,
                timer: 2500,
                showCancelButton: false,
                showConfirmButton: false,

              })
                .then(function () {
                  window.location.href = "http://localhost:4200/tipo-comida";
                });


            },
            error => {
              console.log(error);
              Swal.fire({
                title: 'Error al modificar tipo de comida.',
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
    this.tipoService.getTipoComidaxId(idProduc).subscribe(
      (tipoEliminar) => {
        this.tipoEliminar = tipoEliminar;
      });

  /*  if (estado == 2) {
      Swal.fire({
        title: 'El tipo de comida ya está en estado inactivo.',
        text: '',
        icon: 'warning',
        confirmButtonColor: '#780116',
        showCloseButton: true,
      })
    }
    else {*/

      Swal.fire({
        title: '¿Seguro que deseas modificar tipo de comida a estado inactivo?',
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
          this.tipoEliminar.estado = 2;
          this.tipoEliminar.usuario!.id_usuario= parseInt(this.tokenService.getId());
          this.tipoService.actualizarTipoComida(this.tipoEliminar).subscribe(
            response => {
              console.log(response.mensaje);

              Swal.fire({
                title: 'Se modificó tipo de comida a estado inactivo exitosamente.',
                text: '',
                icon: 'success',
                buttons: false,
                closeOnClickOutside: false,
                timer: 2500,
                showCancelButton: false,
                showConfirmButton: false,

              })
                .then(function () {
                  window.location.href = "http://localhost:4200/tipo-comida";
                });


            },
            error => {
              console.log(error);
              Swal.fire({
                title: 'Error al modificar tipo de comida.',
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


    /*}*/
  }

  }
