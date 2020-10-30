import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-ventana-crear-editar-frecuencia',
  templateUrl: './ventana-crear-editar-frecuencia.component.html',
  styleUrls: ['./ventana-crear-editar-frecuencia.component.scss']
})
export class VentanaCrearEditarFrecuenciaComponent implements OnInit {
  frecuenciaForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<VentanaCrearEditarFrecuenciaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public fb: FormBuilder
  ) { }

  private _cerrarVentana(edicion: boolean | any){
    this.dialogRef.close(edicion);
  }

  ngOnInit(): void {
    this.frecuenciaForm = this.fb.group({
      codigoFrecuencia: ['', Validators.required],
      descripcionFrecuencia: ['', Validators.required]
    });

    if (this.data.accion === 'editar') {
      this.frecuenciaForm.removeControl('codigoFrecuencia');
      this.frecuenciaForm.get('descripcionFrecuencia').setValue(this.data.frecuencia.descripcionFreuencia);
      this.frecuenciaForm.updateValueAndValidity();
    }
  }

  aceptar(){
    this._cerrarVentana(this.frecuenciaForm.getRawValue());
  }

  cancelar(){
    this._cerrarVentana(false);
  }
  public checkError = (controlName: string, errorName: string) => {
    return this.frecuenciaForm.controls[controlName].hasError(errorName);
  }

}
