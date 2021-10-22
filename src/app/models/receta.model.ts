import { Dieta } from "./dieta.model";
import { Dificultad } from "./dificultad.model";
import { EstiloPlato } from "./estilo-plato.model";
import { Ocasion } from "./ocasion.model";
import { TipoComida } from "./tipo-comida.model";
import { Usuario } from "./usuario.model";

export class Receta {
    id_receta?:number;
    nombre_platillo?:string;
    tiempo_preparacion?:number;
    porcion?:number;
    dificultad?:Dificultad;
    precio?:number;
    ingrediente?:string;
    utensilio?:string;
    instruccion?:string;
    tip?:string;
    usuario?:Usuario;
    tipoComida?:TipoComida;
    ocasion?:Ocasion;
    estiloPlato?:EstiloPlato;
    dieta?:Dieta;
    estado?:number;
    fecha_registro?:Date;
    fecha_actualiza?:Date;

	
}
