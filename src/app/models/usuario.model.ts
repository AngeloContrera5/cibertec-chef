import { Rol } from './rol.model';

export class Usuario {
  id_usuario?: number;
  nombres?: string;
  apellidos?: string;
  correo?: string;
  usuario?: string;
  telefono?: string;
  clave?: string;
  fecha_nacimiento?: Date;
  estado?: number;
  fecha_registro?: Date;
  fecha_actualiza?: Date;
  fotoBase64?: any;
  //agregar roles o rol?

  constructor(
    nombres: string,
    apellidos: string,
    fecha_nacimiento: Date,
    telefono: string,
    correo: string,
    usuario: string,
    clave: string,
    fotoBase64: any
  ) {
    this.nombres = nombres;
    this.apellidos = apellidos;
    this.fecha_nacimiento = fecha_nacimiento;
    this.telefono = telefono;
    this.correo = correo;
    this.usuario = usuario;
    this.clave = clave;
    this.fotoBase64 = fotoBase64;
  }
}
