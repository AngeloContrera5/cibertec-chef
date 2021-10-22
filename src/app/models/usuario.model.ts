import { Rol } from "./rol.model";

export class Usuario {

    id_usuario?:number;
    nombres?:string;
    apellidos?:string;
    correo?:string;
    usuario_alias?:string;
    clave?:string;
    fecha_nacimiento?:Date;
    estado?:number;
    fecha_registro?:Date;
    fecha_actualiza?:Date;
    rol?:Rol;
    
}
