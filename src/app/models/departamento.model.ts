import { Pais } from './pais.model';

export interface Departamento {
    codigoDepartamento: string;
    descripcionDepartamento: string;
    codigoPais:string;
    pais: Pais | any;
  }
