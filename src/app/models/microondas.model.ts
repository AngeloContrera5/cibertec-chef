import { Receta } from "./receta.model";
import { Usuario } from "./usuario.model";

export class Microondas {
    id_horno_microondas?:number;
    descripcion?:string;
    usuario?:Usuario;
    estado?:number;
    fecha_registro?:Date;
    fecha_actualiza?:Date;
	fotoBase64?:any;
    receta?:Receta;
   
	
	
}
