import { Usuario } from "./usuario.model";

export class Dieta {
    id_dieta?:number;
    nombre?:String;
    usuario?:Usuario;
    fecha_registra?:Date;
    fecha_actualiza?:Date;
	estado?:number;
	
}
