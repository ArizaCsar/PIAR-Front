import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-ventana-crear-editar-discapacidad',
  templateUrl: './ventana-crear-editar-discapacidad.component.html',
  styleUrls: ['./ventana-crear-editar-discapacidad.component.scss']
})
export class VentanaCrearEditarDiscapacidadComponent implements OnInit {

  discapacidadForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<VentanaCrearEditarDiscapacidadComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public fb: FormBuilder
  ) { }

  private _cerrarVentana(edicion: boolean | any){
    this.dialogRef.close(edicion);
  }

  ngOnInit(): void {
    this.discapacidadForm = this.fb.group({
      codigoDiscapacidad: ['', Validators.required],
      descripcionDiscapacidad: ['', Validators.required]
    });

    if (this.data.accion === 'editar') {
      this.discapacidadForm.removeControl('codigoDiscapacidad');
      this.discapacidadForm.get('descripcionDiscapacidad').setValue(this.data.discapacidad.descripcionDiscapacidad);
      this.discapacidadForm.updateValueAndValidity();
    }
  }

  aceptar(){
    this._cerrarVentana(this.discapacidadForm.getRawValue());
  }

  cancelar(){
    this._cerrarVentana(false);
  }
  public checkError = (controlName: string, errorName: string) => {
    return this.discapacidadForm.controls[controlName].hasError(errorName);
  }

}
