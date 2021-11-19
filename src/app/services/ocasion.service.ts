import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ocasion } from '../models/ocasion.model';

const baseUrl = 'https://cibertec-chef.herokuapp.com/rest/ocasion';

@Injectable({
  providedIn: 'root'
})
export class OcasionService {

  constructor(private http:HttpClient) { }

  registrarOcasion(data:Ocasion): Observable<any>{
    return this.http.post(baseUrl,data);
  }

  actualizarOcasion(data:Ocasion): Observable<any>{
    return this.http.put(baseUrl,data);
  }

  listarOcasiones():Observable<Ocasion[]>{
    return this.http.get<Ocasion[]>(baseUrl);
  }

  listarOcasionesActivas():Observable<Ocasion[]>{
    return this.http.get<Ocasion[]>(baseUrl+"/activos");
  }
  
  getOcasionxId(idProd:any):Observable<Ocasion>{
    return this.http.get<Ocasion>(baseUrl+"/id/"+idProd);
  }

}
