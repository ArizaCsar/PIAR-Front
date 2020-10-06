import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-ventana-confirmacion',
  templateUrl: './ventana-confirmacion.component.html',
  styleUrls: ['./ventana-confirmacion.component.scss']
})
export class VentanaConfirmacionComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<VentanaConfirmacionComponent>,
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
