import { Component, OnInit } from '@angular/core';
import * as $ from "jquery";
declare var Swal: any;
import { DietaService } from 'src/app/services/dieta.service';
import { Dieta } from 'src/app/models/dieta.model';

@Component({
  selector: 'app-dieta',
  templateUrl: './dieta.component.html',
  styleUrls: ['./dieta.component.css']
})
export class DietaComponent implements OnInit {

  dietas: Dieta[] = [];
  dieta: Dieta = {
    id_dieta: 0,
  };
  dietaEditar: Dieta = {
    id_dieta: 0,
  };
  dietaEliminar: Dieta = {
    id_dieta: 0,
  };
  allDataFetched: boolean = false;
  nombre : String="";

  constructor(private dietaService: DietaService,) {
    $("#example1 > tbody").empty(),
    this.dietaService.listarDietasActivas().subscribe(
      (dietas) => {
        this.dietas = dietas,
        this.allDataFetched = true;

      }

    );

  }

  ngOnInit(): void {

    $.getScript('assets/dist/js/datatable.js');
    $.getScript('assets/build/js/dieta.js');
  }

  registra() {
    if ($("#idCodDieta").val() == "") {
      this.dietaService.registrarDieta(this.dieta).subscribe(
        response => {
          console.log(response.mensaje);

          Swal.fire({
            title: 'Se registró dieta exitosamente.',
            text: '',
            icon: 'success',
            buttons: false,
            closeOnClickOutside: false,
            timer: 2500,
            showCancelButton: false,
            showConfirmButton: false,

          })
            .then(function () {
              window.location.href = "http://localhost:4200/dieta";
            });


        },
        error => {
          console.log(error);
          Swal.fire({
            title: 'Error al registrar dieta.',
            text: '',
            icon: 'error',
            confirmButtonColor: '#780116',
            showCloseButton: true,
          })
        },
      );
    }
    else if ($("#idCodDieta").val() != "") {
      this.dietaService.getDietaxId(Number($("#idCodDieta").val())).subscribe(
        (dietaEditar) => {this.dietaEditar = dietaEditar;
        });
    
       
      Swal.fire({
        title: '¿Seguro que deseas modificar dieta?',
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
          this.dietaEditar.nombre=String($("#idnombre").val());
          this.dietaService.actualizarDieta(this.dietaEditar).subscribe(
            response => {
              console.log(response.mensaje);

              Swal.fire({
                title: 'Se modificó dieta exitosamente.',
                text: '',
                icon: 'success',
                buttons: false,
                closeOnClickOutside: false,
                timer: 2500,
                showCancelButton: false,
                showConfirmButton: false,

              })
                .then(function () {
                  window.location.href = "http://localhost:4200/dieta";
                });


            },
            error => {
              console.log(error);
              Swal.fire({
                title: 'Error al modificar dieta.',
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

  elimina(val:any, val2:any){
    const idProduc = val;
    const estado = val2;
    this.dietaService.getDietaxId(idProduc).subscribe(
      (dietaEliminar) => {this.dietaEliminar = dietaEliminar;
      });
  
  /*  if(estado==2){
      Swal.fire({
        title: 'La dieta ya está en estado inactivo.',
        text: '',
        icon: 'warning',
        confirmButtonColor: '#780116',
        showCloseButton: true,
      })
    }
    else{*/

    Swal.fire({
      title: '¿Seguro que deseas modificar dieta a estado inactivo?',
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
        this.dietaEliminar.estado=2;
        this.dietaService.actualizarDieta(this.dietaEliminar).subscribe(
          response => {
            console.log(response.mensaje);

            Swal.fire({
              title: 'Se modificó dieta a estado inactivo exitosamente.',
              text: '',
              icon: 'success',
              buttons: false,
              closeOnClickOutside: false,
              timer: 2500,
              showCancelButton: false,
              showConfirmButton: false,

            })
              .then(function () {
                window.location.href = "http://localhost:4200/dieta";
              });


          },
          error => {
            console.log(error);
            Swal.fire({
              title: 'Error al modificar dieta.',
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
  
  /*  }*/
  }


}

