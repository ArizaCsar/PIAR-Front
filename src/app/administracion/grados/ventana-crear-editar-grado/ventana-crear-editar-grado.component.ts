import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-ventana-crear-editar-grado',
  templateUrl: './ventana-crear-editar-grado.component.html',
  styleUrls: ['./ventana-crear-editar-grado.component.scss']
})
export class VentanaCrearEditarGradoComponent implements OnInit {

  gradoForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<VentanaCrearEditarGradoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public fb: FormBuilder
  ) { }

  private _cerrarVentana(edicion: boolean | any){
    this.dialogRef.close(edicion);
  }

  ngOnInit(): void {
    this.gradoForm = this.fb.group({
      codigoGrado: ['', Validators.required],
      descripcionGrado: ['', Validators.required]
    });

    if (this.data.accion === 'editar') {
      this.gradoForm.removeControl('codigoGrado');
      this.gradoForm.get('descripcionGrado').setValue(this.data.grado.descripcionGrado);
      this.gradoForm.updateValueAndValidity();
    }
  }

  aceptar(){
    this._cerrarVentana(this.gradoForm.getRawValue());
  }

  cancelar(){
    this._cerrarVentana(false);
  }
  public checkError = (controlName: string, errorName: string) => {
    return this.gradoForm.controls[controlName].hasError(errorName);
  }

}

