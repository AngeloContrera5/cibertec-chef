import { Component, OnInit } from '@angular/core';
import * as $ from "jquery";

@Component({
  selector: 'app-receta',
  templateUrl: './receta.component.html',
  styleUrls: ['./receta.component.css']
})
export class RecetaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $.getScript('assets/dist/js/file.js');
    $.getScript('assets/dist/js/datatable.js');
  }

}
