import { Usuario } from "./usuario.model"

export class Encuesta {
    id_encuesta?:number 
    titulo_encuesta?:string 
    estado?:number
    usuario?:Usuario 
    fecha_registra?:string 
    fecha_actualiza?:string 
}
