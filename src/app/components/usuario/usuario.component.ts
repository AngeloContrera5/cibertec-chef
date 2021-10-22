import { Component, OnInit } from '@angular/core';
import * as $ from "jquery";
import { Rol } from 'src/app/models/rol.model';
import { RolService } from 'src/app/services/rol.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
  rol: Rol[] = [];

  constructor(private rolService: RolService,) {  
    this.rolService.listarRol().subscribe(
      (rol) => this.rol = rol
    );

  }



  ngOnInit(): void {
    $.getScript('assets/dist/js/file1.js');
    $.getScript('assets/dist/js/datatable.js');
  }

}
