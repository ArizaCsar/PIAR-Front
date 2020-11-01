import { Sede } from './sede';

export interface EntidadEducativa {
    codigoEntidadEducativa: number;
    nombreEntidadEducativa: string;
    codigoSede: number;
    sede: Sede | any;
  }