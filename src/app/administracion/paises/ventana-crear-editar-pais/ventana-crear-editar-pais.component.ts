import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-ventana-crear-editar-pais',
  templateUrl: './ventana-crear-editar-pais.component.html',
  styleUrls: ['./ventana-crear-editar-pais.component.scss']
})
export class VentanaCrearEditarPaisComponent implements OnInit {

  paisForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<VentanaCrearEditarPaisComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public fb: FormBuilder
  ) { }

  private _cerrarVentana(edicion: boolean | any){
    this.dialogRef.close(edicion);
  }

  ngOnInit(): void {
    this.paisForm = this.fb.group({
      codigoPais: ['', Validators.required],
      descripcionPais: ['', Validators.required]
    });

    if (this.data.accion === 'editar') {
      this.paisForm.removeControl('codigoPais');
      this.paisForm.get('descripcionPais').setValue(this.data.pais.descripcionPais);
      this.paisForm.updateValueAndValidity();
    }
  }

  aceptar(){
    this._cerrarVentana(this.paisForm.getRawValue());
  }

  cancelar(){
    this._cerrarVentana(false);
  }
  public checkError = (controlName: string, errorName: string) => {
    return this.paisForm.controls[controlName].hasError(errorName);
  }

}
