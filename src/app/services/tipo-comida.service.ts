import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TipoComida } from 'src/app/models/tipo-comida.model';

const baseUrl = 'http://localhost:8080/rest/tipo-comida';


@Injectable({
  providedIn: 'root'
})
export class TipoComidaService {

  constructor(private http:HttpClient) { }

  registrarTipoComida(data:TipoComida): Observable<any>{
    return this.http.post(baseUrl,data);
  }

  actualizarTipoComida(data:TipoComida): Observable<any>{
    return this.http.put(baseUrl,data);
  }

  listarTipoComidas():Observable<TipoComida[]>{
    return this.http.get<TipoComida[]>(baseUrl);
  }

  listarTipoComidasActivas():Observable<TipoComida[]>{
    return this.http.get<TipoComida[]>(baseUrl+"/activas");
  }
  getTipoComidaxId(idProd:any):Observable<TipoComida>{
    return this.http.get<TipoComida>(baseUrl+"/id/"+idProd);
  }
}
