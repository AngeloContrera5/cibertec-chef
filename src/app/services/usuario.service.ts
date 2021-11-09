import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../models/usuario.model';

const baseURL = 'http://localhost:8080/rest/usuario/';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  constructor(private http: HttpClient) {}

  listaUsuario(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(baseURL);
  }

  //EL REGISTRAR USUARIO ESTÁ EN EL AUTH SERVICE ;)

  getUsuarioxId(idUsuario: any): Observable<Usuario> {
    return this.http.get<Usuario>(baseURL + 'id/' + idUsuario);
  }

  getUsuarioxUsername(username: any): Observable<Usuario> {
    return this.http.get<Usuario>(baseURL + 'username/' + username);
  }

  actualizarUsuario(data: Usuario): Observable<any> {
    return this.http.put(baseURL, data);
  }
}