import { Component, OnInit } from '@angular/core';
import * as $ from "jquery";

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $.getScript('assets/dist/js/file.js');
    $.getScript('assets/dist/js/datatable.js');
  }

}
