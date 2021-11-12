import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Dieta } from 'src/app/models/dieta.model';

const baseUrl = 'https://cibertec-chef.herokuapp.com/rest/dieta';

@Injectable({
  providedIn: 'root'
})
export class DietaService {

  constructor(private http:HttpClient) { }

  registrarDieta(data:Dieta): Observable<any>{
    return this.http.post(baseUrl,data);
  }

  actualizarDieta(data:Dieta): Observable<any>{
    return this.http.put(baseUrl,data);
  }

  listarDietas():Observable<Dieta[]>{
    return this.http.get<Dieta[]>(baseUrl);
  }

  listarDietasActivas():Observable<Dieta[]>{
    return this.http.get<Dieta[]>(baseUrl+"/activos");
  }
  getDietaxId(idProd:any):Observable<Dieta>{
    return this.http.get<Dieta>(baseUrl+"/id/"+idProd);
  }
}
