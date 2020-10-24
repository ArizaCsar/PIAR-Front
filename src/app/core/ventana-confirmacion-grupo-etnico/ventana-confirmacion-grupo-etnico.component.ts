import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-ventana-confirmacion-grupo-etnico',
  templateUrl: './ventana-confirmacion-grupo-etnico.component.html',
  styleUrls: ['./ventana-confirmacion-grupo-etnico.component.scss']
})
export class VentanaConfirmacionGrupoEtnicoComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<VentanaConfirmacionGrupoEtnicoComponent>,
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
