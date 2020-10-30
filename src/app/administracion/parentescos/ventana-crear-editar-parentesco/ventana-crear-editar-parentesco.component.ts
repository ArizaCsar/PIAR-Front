import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-ventana-crear-editar-parentesco',
  templateUrl: './ventana-crear-editar-parentesco.component.html',
  styleUrls: ['./ventana-crear-editar-parentesco.component.scss']
})
export class VentanaCrearEditarParentescoComponent implements OnInit {
  parentecoForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<VentanaCrearEditarParentescoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public fb: FormBuilder
  ) { }

  private _cerrarVentana(edicion: boolean | any){
    this.dialogRef.close(edicion);
  }

  ngOnInit(): void {
    this.parentecoForm = this.fb.group({
      codigoParentesco: ['', Validators.required],
      descripcionParentesco: ['', Validators.required]
    });

    if (this.data.accion === 'editar') {
      this.parentecoForm.removeControl('codigoParentesco');
      this.parentecoForm.get('descripcionParentesco').setValue(this.data.parentesco.descripcionParentesco);
      this.parentecoForm.updateValueAndValidity();
    }
  }

  aceptar(){
    this._cerrarVentana(this.parentecoForm.getRawValue());
  }

  cancelar(){
    this._cerrarVentana(false);
  }
  public checkError = (controlName: string, errorName: string) => {
    return this.parentecoForm.controls[controlName].hasError(errorName);
  }

}
