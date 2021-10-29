import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Encuesta } from '../models/encuesta.model';
import { tap } from 'rxjs/operators'

const baseUrl = 'http://localhost:8080/rest/encuesta';
@Injectable({
  providedIn: 'root'
})
export class EncuestaService {

  constructor(private http:HttpClient) { }

  registrarEncuesta(data:Encuesta): Observable<any>{
    return this.http.post(baseUrl,data);
  }

  actualizarEncuesta(data:Encuesta): Observable<any>{
    return this.http.put(baseUrl,data);
  }

  listarEncuestas():Observable<Encuesta[]>{
    return this.http.get<Encuesta[]>(baseUrl+"/activas");
  }
  
  getEncuestaxId(idEnc:any):Observable<Encuesta>{
    return this.http.get<Encuesta>(baseUrl+"/id/"+idEnc);
  }

  retornarCodigo(): Observable<any>{
    return this.http.get(baseUrl+"/codigo");
  }
}


