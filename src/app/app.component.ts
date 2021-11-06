import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Usuario } from './models/usuario.model';
import { TokenService } from './services/token.service';
import { UsuarioService } from './services/usuario.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'damii-proyecto';

  nombreCompleto = '';
  id = 0;
  isLogged = false;

  headerFooter: any;

  nombreUsuario?: string;

  usuarioObj: Usuario = {};

  constructor(
    private router: Router,
    private tokenService: TokenService,
    private usuarioService: UsuarioService
  ) {
    this.obtenerDatosUsuario();
  }

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.headerFooter = event.url !== '/login';
      }
    });

    if (this.tokenService.getToken()) {
      this.isLogged = true;
      this.nombreCompleto = this.tokenService.getNombresCompletos();
      this.nombreUsuario = this.tokenService.getUserName();
      this.id = Number(this.tokenService.getId());
    } else {
      this.isLogged = false;
      this.nombreCompleto = '';
    }
  }

  obtenerDatosUsuario() {
    var nomUsu = this.tokenService.getUserName();

    if (nomUsu != null) {
      this.usuarioService.getUsuarioxUsername(nomUsu).subscribe((data) => {
        this.usuarioObj = data;
        this.isLogged = true;
        $('#fotoUsuarioSesion').attr('src', data.fotoBase64);
      });
    }
  }

  onLogOut(): void {
    this.tokenService.logOut();
    //this.router.navigateByUrl('http://localhost:4200/login');
    this.router.navigate(['']).then(function () {
      window.location.href = 'http://localhost:4200/login';
    });
  }
}