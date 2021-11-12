import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Rol } from '../models/rol.model';

const baseUrl = 'https://cibertec-chef.herokuapp.com/rest/rol';

@Injectable({
  providedIn: 'root',
})
export class RolService {
  constructor(private http: HttpClient) {}

  listarRol(): Observable<Rol[]> {
    return this.http.get<Rol[]>(baseUrl);
  }
}
