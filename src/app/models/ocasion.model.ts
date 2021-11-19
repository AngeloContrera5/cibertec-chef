import { Usuario } from "./usuario.model";

export class Ocasion {
    id_ocasion?:number;
    nombre?:string;
    usuario?:Usuario;
    fecha_registra?:Date;
    fecha_actualiza?:Date;
	estado?:number;
}
