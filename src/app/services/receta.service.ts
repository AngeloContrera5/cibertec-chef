import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Receta } from '../models/receta.model';
const baseUrl = 'http://localhost:8080/rest/receta';

@Injectable({
  providedIn: 'root'
})
export class RecetaService {

  constructor(private http:HttpClient) { }

  registrarReceta(data:Receta): Observable<any>{
    return this.http.post(baseUrl,data);
  }

  actualizarReceta(data:Receta): Observable<any>{
    return this.http.put(baseUrl,data);
  }

  listarRecetas():Observable<Receta[]>{
    return this.http.get<Receta[]>(baseUrl);
  }
  
  getRecetaxId(idProd:any):Observable<Receta>{
    return this.http.get<Receta>(baseUrl+"/id/"+idProd);
  }

}
