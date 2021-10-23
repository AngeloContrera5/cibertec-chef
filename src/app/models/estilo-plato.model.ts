import { Usuario } from "./usuario.model";

export class EstiloPlato {
    id_estilo_plato?:number;
    nombre?:string;
    usuario?:Usuario;
    fecha_registra?:Date;
    fecha_actualiza?:Date;
	estado?:number;
}
