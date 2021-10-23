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
  dieta: Dieta ={
    id_dieta:0,
  } ;

  constructor(private dietaService: DietaService,) {
    this.dietaService.listarDietas().subscribe(
      (dietas) => this.dietas = dietas
    );

  }

  ngOnInit(): void {

    $.getScript('assets/dist/js/datatable.js');
    $.getScript('assets/build/js/dieta.js');
  }

  registra() {
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
          showCloseButton: true,
        })
      },
    );




  }
}

