import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EncuestaItem } from '../models/encuesta-item.model';
const baseUrl = 'http://localhost:8080/rest/encuesta_item';
@Injectable({
  providedIn: 'root'
})
export class EncuestaItemService {

  constructor(private http:HttpClient) { }

  getItemEncuestaxId(idEnc:any):Observable<EncuestaItem[]>{
    return this.http.get<EncuestaItem[]>(baseUrl+"/item_id_enc/"+idEnc);
  }

  registrarEncuestaItems(data:any): Observable<any>{
    return this.http.post(baseUrl,data);
  }

  ActualizarEncuestaItems(data:any): Observable<any>{
    return this.http.post(baseUrl,data);
  }
}
