import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-ventana-confirmacion-ciudad',
  templateUrl: './ventana-confirmacion-ciudad.component.html',
  styleUrls: ['./ventana-confirmacion-ciudad.component.scss']
})
export class VentanaConfirmacionCiudadComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<VentanaConfirmacionCiudadComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
  }

  aceptar(){
    this._cerrarVentana(true);

  }

  cancelar(){
    this._cerrarVentana(false);
  }

  private _cerrarVentana(confirmacion: boolean){
    this.dialogRef.close(confirmacion);

  }
}
