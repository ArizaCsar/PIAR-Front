import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-ventana-crear-editar-sede',
  templateUrl: './ventana-crear-editar-sede.component.html',
  styleUrls: ['./ventana-crear-editar-sede.component.scss']
})
export class VentanaCrearEditarSedeComponent implements OnInit {

  sedeForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<VentanaCrearEditarSedeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public fb: FormBuilder
  ) { }

  private _cerrarVentana(edicion: boolean | any){
    this.dialogRef.close(edicion);
  }

  ngOnInit(): void {
    this.sedeForm = this.fb.group({
      codigoSede: ['', Validators.required],
      descripcionSede: ['', Validators.required]
    });

    if (this.data.accion === 'editar') {
      this.sedeForm.removeControl('codigoSede');
      this.sedeForm.get('descripcionSede').setValue(this.data.sede.descripcionSede);
      this.sedeForm.updateValueAndValidity();
    }
  }

  aceptar(){
    this._cerrarVentana(this.sedeForm.getRawValue());
  }

  cancelar(){
    this._cerrarVentana(false);
  }
  public checkError = (controlName: string, errorName: string) => {
    return this.sedeForm.controls[controlName].hasError(errorName);
  }

}
