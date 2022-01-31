
import { Separador } from "./separador";

//esqueleto de como recibo mi información
export interface UserInterface {
    code: number,
    nombre: string,
    apellido: string,
    telefono: string,
    direccion: string,
    campana: string
    separador: Separador
}