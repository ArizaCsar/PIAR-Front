import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-ventana-confirmacion-departamento',
  templateUrl: './ventana-confirmacion-departamento.component.html',
  styleUrls: ['./ventana-confirmacion-departamento.component.scss']
})
export class VentanaConfirmacionDepartamentoComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<VentanaConfirmacionDepartamentoComponent>,
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
