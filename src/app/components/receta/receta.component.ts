import { Component, OnInit } from '@angular/core';
import * as $ from "jquery";
import { Dificultad } from 'src/app/models/dificultad.model';
import { Ocasion } from 'src/app/models/ocasion.model';
import { Receta } from 'src/app/models/receta.model';
import { DietaService } from 'src/app/services/dieta.service';
import { DificultadService } from 'src/app/services/dificultad.service';
import { EstiloPlatoService } from 'src/app/services/estilo-plato.service';
import { OcasionService } from 'src/app/services/ocasion.service';
import { RecetaService } from 'src/app/services/receta.service';
import { TipoComidaService } from 'src/app/services/tipo-comida.service';

@Component({
  selector: 'app-receta',
  templateUrl: './receta.component.html',
  styleUrls: ['./receta.component.css']
})
export class RecetaComponent implements OnInit {

  receta: Receta[] = [];
  dificultad: Dificultad[] = [];
  ocasion: Ocasion[] = [];

  constructor(private recetaService: RecetaService, private dificultadService: DificultadService, 
    private ocasionService: OcasionService,private dietaService: DietaService,private tipoComidaService: TipoComidaService,
    private estiloPlatoService: EstiloPlatoService) { 
      this.recetaService.listarRecetas().subscribe(
        (receta) => this.receta = receta
      );
  
     this.dificultadService.listarDificultad().subscribe(
        (dificultad) => this.dificultad = dificultad
      );
  }

  ngOnInit(): void {
    $.getScript('assets/dist/js/file.js');
    $.getScript('assets/dist/js/datatable.js');
  }

}
