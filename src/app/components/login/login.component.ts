import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginUsuario } from 'src/app/models/login-usuario';
import { AuthService } from 'src/app/services/auth.service';
import { TokenService } from 'src/app/services/token.service';
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

  constructor(
    private tokenService: TokenService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    if (this.tokenService.getToken()) {
      this.isLogged = true;
      this.isLoginFail = false;
      this.roles = this.tokenService.getAuthorities();
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
        this.roles = data.authorities!;
        this.router.navigate(['/home']);
      },
      (err) => {
        this.isLogged = false;
        this.isLoginFail = true;
        //this.errMsj = err.error.mensaje;
        //console.log(this.errMsj);
        //console.log(err);
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Error en el login: Datos incorrectos',
        });
      }
    );
  }
} //FINNNNNNNNNNNNNNNN
