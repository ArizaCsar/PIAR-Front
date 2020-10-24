import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-ventana-confirmacion-ocupacion',
  templateUrl: './ventana-confirmacion-ocupacion.component.html',
  styleUrls: ['./ventana-confirmacion-ocupacion.component.scss']
})

export class VentanaConfirmacionOcupacionComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<VentanaConfirmacionOcupacionComponent>,
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

