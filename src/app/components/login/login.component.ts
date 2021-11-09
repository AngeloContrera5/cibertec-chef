import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginUsuario } from 'src/app/models/login-usuario';
import { Usuario } from 'src/app/models/usuario.model';
import { AuthService } from 'src/app/services/auth.service';
import { TokenService } from 'src/app/services/token.service';
import { UsuarioService } from 'src/app/services/usuario.service';
declare var Swal: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  isLogged = false;
  isLoginFail = false;
  loginUsuario?: LoginUsuario;
  username?: string;
  password?: string;
  roles: String[] = [];
  errMsj?: string;
  usuarioObj?: Usuario;

  constructor(
    private tokenService: TokenService,
    private authService: AuthService,
    private router: Router,
    private usuarioService: UsuarioService
  ) {}

  ngOnInit() {
    if (this.tokenService.getToken()) {
      this.isLogged = true;
      this.isLoginFail = false;
      this.roles = this.tokenService.getAuthorities();
      this.router.navigate(['/home']);
      //window.location.href = 'http://localhost:4200/home';
    }
  }

  onLogin(): void {
    this.loginUsuario = new LoginUsuario(this.username!, this.password!);
    this.authService.login(this.loginUsuario).subscribe(
      (data) => {
        this.isLogged = true;
        this.isLoginFail = false;
        this.tokenService.setToken(data.token!);
        this.tokenService.setUserName(data.username!);
        this.tokenService.setAuthorities(data.authorities!);
        this.tokenService.setNombresCompletos(data.nombresCompletos!);
        this.tokenService.setId(data.id!);
        this.roles = data.authorities!;
        this.router.navigate(['']).then(function () {
          window.location.href = 'http://localhost:4200/home';
        });
      },
      (err) => {
        this.isLogged = false;
        this.isLoginFail = true;
        this.errMsj = err.error.mensaje;
        //console.log(this.errMsj);
        //console.log(err);
        if (this.errMsj == 'Usuario inactivo') {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Error en el login: Usuario inactivo',
          });
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Error en el login: Datos incorrectos',
          });
        }
      }
    );
  }
} 