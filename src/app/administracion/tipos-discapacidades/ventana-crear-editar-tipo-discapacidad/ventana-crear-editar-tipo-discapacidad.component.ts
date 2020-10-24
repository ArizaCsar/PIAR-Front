import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-ventana-crear-editar-tipo-discapacidad',
  templateUrl: './ventana-crear-editar-tipo-discapacidad.component.html',
  styleUrls: ['./ventana-crear-editar-tipo-discapacidad.component.scss']
})
export class VentanaCrearEditarTipoDiscapacidadComponent implements OnInit {

  tipoDiscapacidadForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<VentanaCrearEditarTipoDiscapacidadComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public fb: FormBuilder
  ) { }

  private _cerrarVentana(edicion: boolean | any){
    this.dialogRef.close(edicion);
  }

  

  ngOnInit(): void {
    this.tipoDiscapacidadForm = this.fb.group({
      codigoTipoDiscapacidad: ['', Validators.required],
      descripcionTipoDiscapacidad: ['', Validators.required]
    });

    if (this.data.accion === 'editar') {
      this.tipoDiscapacidadForm.removeControl('codigoTipoDiscapacidad');
      this.tipoDiscapacidadForm.get('descripcionTipoDiscapacidad').setValue(this.data.pais.descripcionTipoDiscapacidad);
      this.tipoDiscapacidadForm.updateValueAndValidity();
    }
  }

  aceptar(){
    this._cerrarVentana(this.tipoDiscapacidadForm.getRawValue());
  }

  cancelar(){
    this._cerrarVentana(false);
  }
  public checkError = (controlName: string, errorName: string) => {
    return this.tipoDiscapacidadForm.controls[controlName].hasError(errorName);
  }

}
