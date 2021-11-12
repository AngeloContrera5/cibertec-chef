import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Dificultad } from '../models/dificultad.model';

const baseUrl = 'https://cibertec-chef.herokuapp.com/rest/dificultad';

@Injectable({
  providedIn: 'root'
})

export class DificultadService {
  constructor(private http:HttpClient) { }

  listarDificultad():Observable<Dificultad[]>{
    return this.http.get<Dificultad[]>(baseUrl);
  }
  
}
