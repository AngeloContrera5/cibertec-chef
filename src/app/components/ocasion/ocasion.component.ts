import { Component, OnInit } from '@angular/core';
import { Ocasion } from 'src/app/models/ocasion.model';
import { OcasionService } from 'src/app/services/ocasion.service';

import * as $ from "jquery";
declare var Swal: any;

@Component({
  selector: 'app-ocasion',
  templateUrl: './ocasion.component.html',
  styleUrls: ['./ocasion.component.css']
})
export class OcasionComponent implements OnInit {


  ocasiones: Ocasion[] = [];
  ocasion: Ocasion = {
    id_ocasion: 0,
  };
  ocasionEditar: Ocasion = {
    id_ocasion: 0,
  };
  ocasionEliminar: Ocasion = {
    id_ocasion: 0,
  };
  allDataFetched: boolean = false;
  nombre: String = "";

  constructor(private ocasionService: OcasionService,) {
    this.ocasionService.listarOcasiones().subscribe(
      (ocasiones) => {
        this.ocasiones = ocasiones,
          this.allDataFetched = true;

      }

    );

  }

  ngOnInit(): void {

    $.getScript('assets/dist/js/datatable.js');
    $.getScript('assets/build/js/ocasion.js');
  }

  registra() {
    if ($("#idCodOcasion").val() == "") {
      this.ocasionService.registrarOcasion(this.ocasion).subscribe(
        response => {
          console.log(response.mensaje);

          Swal.fire({
            title: 'Se registró ocasión exitosamente.',
            text: '',
            icon: 'success',
            buttons: false,
            closeOnClickOutside: false,
            timer: 2500,
            showCancelButton: false,
            showConfirmButton: false,

          })
            .then(function () {
              window.location.href = "http://localhost:4200/ocasion";
            });


        },
        error => {
          console.log(error);
          Swal.fire({
            title: 'Error al registrar ocasión.',
            text: '',
            icon: 'error',
            showCloseButton: true,
          })
        },
      );
    }
    else if ($("#idCodOcasion").val() != "") {
      this.ocasionService.getOcasionxId(Number($("#idCodOcasion").val())).subscribe(
        (ocasionEditar) => {
          this.ocasionEditar = ocasionEditar;
        });


      Swal.fire({
        title: '¿Seguro que deseas modificar ocasión?',
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
          this.ocasionEditar.nombre = String($("#idnombre").val());
          this.ocasionService.actualizarOcasion(this.ocasionEditar).subscribe(
            response => {
              console.log(response.mensaje);

              Swal.fire({
                title: 'Se modificó ocasión exitosamente.',
                text: '',
                icon: 'success',
                buttons: false,
                closeOnClickOutside: false,
                timer: 2500,
                showCancelButton: false,
                showConfirmButton: false,

              })
                .then(function () {
                  window.location.href = "http://localhost:4200/ocasion";
                });


            },
            error => {
              console.log(error);
              Swal.fire({
                title: 'Error al modificar ocasión.',
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
    this.ocasionService.getOcasionxId(idProduc).subscribe(
      (ocasionEliminar) => {
        this.ocasionEliminar = ocasionEliminar;
      });

    if (estado == 2) {
      Swal.fire({
        title: 'La ocasión ya está en estado inactivo.',
        text: '',
        icon: 'warning',
        confirmButtonColor: '#780116',
        showCloseButton: true,
      })
    }
    else {

      Swal.fire({
        title: '¿Seguro que deseas modificar ocasión a estado inactivo?',
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
          this.ocasionEliminar.estado = 2;
          this.ocasionService.actualizarOcasion(this.ocasionEliminar).subscribe(
            response => {
              console.log(response.mensaje);

              Swal.fire({
                title: 'Se modificó ocasión a estado inactivo exitosamente.',
                text: '',
                icon: 'success',
                buttons: false,
                closeOnClickOutside: false,
                timer: 2500,
                showCancelButton: false,
                showConfirmButton: false,

              })
                .then(function () {
                  window.location.href = "http://localhost:4200/ocasion";
                });


            },
            error => {
              console.log(error);
              Swal.fire({
                title: 'Error al modificar ocasión.',
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


    }}


  }
