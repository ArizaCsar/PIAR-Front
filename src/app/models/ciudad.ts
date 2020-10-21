import { Departamento } from './departamento.model';

export interface Ciudad {
    codigoCiudad: string;
    descripcionCiudad: string;
    codigoDepartamento:string;
    departamento: Departamento | any;
  }
