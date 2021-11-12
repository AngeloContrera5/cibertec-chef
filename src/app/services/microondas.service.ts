import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Microondas } from '../models/microondas.model';
const baseUrl = 'https://cibertec-chef.herokuapp.com/rest/horno_microondas';


@Injectable({
  providedIn: 'root'
})
export class MicroondasService {

  constructor(private http:HttpClient) { }

  registrarMicroondas(data:Microondas): Observable<any>{
    return this.http.post(baseUrl,data);
  }

  actualizarMicroondas(data:Microondas): Observable<any>{
    return this.http.put(baseUrl,data);
  }

  listarMicroondas():Observable<Microondas[]>{
    return this.http.get<Microondas[]>(baseUrl);
  }
  
  listarMicroondasActivas():Observable<Microondas[]>{
    return this.http.get<Microondas[]>(baseUrl+"/activos");
  }
  getMicroondasxId(idMicroo:any):Observable<Microondas>{
    return this.http.get<Microondas>(baseUrl+"/id/"+idMicroo);
  }

  listarMicroondasxReceta(idReceta:any):Observable<Microondas[]>{
    return this.http.get<Microondas[]>(baseUrl+"/idReceta/"+idReceta);
  }
}
