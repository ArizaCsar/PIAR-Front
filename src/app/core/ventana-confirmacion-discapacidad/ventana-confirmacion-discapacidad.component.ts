import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-ventana-confirmacion-discapacidad',
  templateUrl: './ventana-confirmacion-discapacidad.component.html',
  styleUrls: ['./ventana-confirmacion-discapacidad.component.scss']
})
export class VentanaConfirmacionDiscapacidadComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<VentanaConfirmacionDiscapacidadComponent>,
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
