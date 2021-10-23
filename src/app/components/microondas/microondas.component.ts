import { Component, OnInit } from '@angular/core';

import * as $ from "jquery";
declare var Swal: any;

@Component({
  selector: 'app-microondas',
  templateUrl: './microondas.component.html',
  styleUrls: ['./microondas.component.css']
})
export class MicroondasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $.getScript('assets/dist/js/file.js');
    $.getScript('assets/dist/js/datatable.js');
  }

}
