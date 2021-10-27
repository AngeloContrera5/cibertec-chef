import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EstiloPlato } from 'src/app/models/estilo-plato.model';

const baseUrl = 'http://localhost:8080/rest/estilo-plato';

@Injectable({
  providedIn: 'root'
})
export class EstiloPlatoService {

  constructor(private http:HttpClient) { }

  registrarEstiloPlato(data:EstiloPlato): Observable<any>{
    return this.http.post(baseUrl,data);
  }

  actualizarEstiloPlato(data:EstiloPlato): Observable<any>{
    return this.http.put(baseUrl,data);
  }

  listarEstiloPlatos():Observable<EstiloPlato[]>{
    return this.http.get<EstiloPlato[]>(baseUrl);
  }

  listarEstiloPlatosActivas():Observable<EstiloPlato[]>{
    return this.http.get<EstiloPlato[]>(baseUrl+"/activos");
  }
  getEstiloPlatoxId(idProd:any):Observable<EstiloPlato>{
    return this.http.get<EstiloPlato>(baseUrl+"/id/"+idProd);
  }
}
