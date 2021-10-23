import { Usuario } from "./usuario.model";
export class TipoComida {
    id_tipo_comida?:number;
    nombre?:string;
    usuario?:Usuario;
    fecha_registra?:Date;
    fecha_actualiza?:Date;
	estado?:number;
}
