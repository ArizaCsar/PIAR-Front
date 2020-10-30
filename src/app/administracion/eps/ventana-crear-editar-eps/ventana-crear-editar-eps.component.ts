import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-ventana-crear-editar-eps',
  templateUrl: './ventana-crear-editar-eps.component.html',
  styleUrls: ['./ventana-crear-editar-eps.component.scss']
})
export class VentanaCrearEditarEpsComponent implements OnInit {
  epsForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<VentanaCrearEditarEpsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public fb: FormBuilder
  ) { }

  private _cerrarVentana(edicion: boolean | any){
    this.dialogRef.close(edicion);
  }

  ngOnInit(): void {
    this.epsForm = this.fb.group({
      codigoEps: ['', Validators.required],
      descripcionEps: ['', Validators.required]
    });

    if (this.data.accion === 'editar') {
      this.epsForm.removeControl('codigoEps');
      this.epsForm.get('descripcionEps').setValue(this.data.eps.descripcionEps);
      this.epsForm.updateValueAndValidity();
    }
  }

  aceptar(){
    this._cerrarVentana(this.epsForm.getRawValue());
  }

  cancelar(){
    this._cerrarVentana(false);
  }
  public checkError = (controlName: string, errorName: string) => {
    return this.epsForm.controls[controlName].hasError(errorName);
  }

}
