import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-ventana-crear-editar-entidad-educativa',
  templateUrl: './ventana-crear-editar-entidad-educativa.component.html',
  styleUrls: ['./ventana-crear-editar-entidad-educativa.component.scss']
})
export class VentanaCrearEditarEntidadEducativaComponent implements OnInit {

  entidadEducativaForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<VentanaCrearEditarEntidadEducativaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public fb: FormBuilder
  ) { }

  private _cerrarVentana(edicion: boolean | any){
    this.dialogRef.close(edicion);
  }

  ngOnInit(): void {
    this.entidadEducativaForm = this.fb.group({
      codigoEntidadEducativa: ['', Validators.required],
      nombreEntidadEducativa: ['', Validators.required]
    });

    if (this.data.accion === 'editar') {
      this.entidadEducativaForm.removeControl('codigoEntidadEducativa');
      this.entidadEducativaForm.get('nombreEntidadEducativa').setValue(this.data.entidadEducativa.nombreEntidadEducativa);
      this.entidadEducativaForm.updateValueAndValidity();
    }
  }

  aceptar(){
    this._cerrarVentana(this.entidadEducativaForm.getRawValue());
  }

  cancelar(){
    this._cerrarVentana(false);
  }
  public checkError = (controlName: string, errorName: string) => {
    return this.entidadEducativaForm.controls[controlName].hasError(errorName);
  }

}
