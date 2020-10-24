import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-ventana-crear-editar-ocupacion',
  templateUrl: './ventana-crear-editar-ocupacion.component.html',
  styleUrls: ['./ventana-crear-editar-ocupacion.component.scss']
})
export class VentanaCrearEditarOcupacionComponent implements OnInit {

  ocupacionForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<VentanaCrearEditarOcupacionComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public fb: FormBuilder
  ) { }

  private _cerrarVentana(edicion: boolean | any){
    this.dialogRef.close(edicion);
  }

  ngOnInit(): void {
    this.ocupacionForm = this.fb.group({
      codigoOcupacion: ['', Validators.required],
      descripcionOcupacion: ['', Validators.required]
    });

    if (this.data.accion === 'editar') {
      this.ocupacionForm.removeControl('codigoOcupacion');
      this.ocupacionForm.get('descripcionOcupacion').setValue(this.data.ocupacion.descripcionOcupacion);
      this.ocupacionForm.updateValueAndValidity();
    }
  }

  aceptar(){
    this._cerrarVentana(this.ocupacionForm.getRawValue());
  }

  cancelar(){
    this._cerrarVentana(false);
  }
  public checkError = (controlName: string, errorName: string) => {
    return this.ocupacionForm.controls[controlName].hasError(errorName);
  }

}