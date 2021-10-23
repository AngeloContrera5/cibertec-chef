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

  dieta: Dieta[] = [];

  constructor(private dietaService: DietaService,) { 
    this.dietaService.listarDietas().subscribe(
      (dieta) => this.dieta = dieta
    );

  }

  ngOnInit(): void {
    
    $.getScript('assets/dist/js/datatable.js');
    $.getScript('assets/build/js/dieta.js');
  }

  registra(){

  }
}
