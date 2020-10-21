import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-ventana-confirmacion-tipo-id',
  templateUrl: './ventana-confirmacion-tipo-id.component.html',
  styleUrls: ['./ventana-confirmacion-tipo-id.component.scss']
})
export class VentanaConfirmacionTipoIdComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<VentanaConfirmacionTipoIdComponent>,
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
