export class LoginObject {

    public nombreTercero: string;
    public contrasena: string;

    constructor( object: any){
      this.nombreTercero = (object.nombreTercero) ? object.nombreTercero : null;
      this.contrasena = (object.contrasena) ? object.contrasena : null;
    }
  }
