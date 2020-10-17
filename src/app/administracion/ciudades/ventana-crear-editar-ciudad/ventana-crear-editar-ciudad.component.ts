import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-ventana-crear-editar-ciudad',
  templateUrl: './ventana-crear-editar-ciudad.component.html',
  styleUrls: ['./ventana-crear-editar-ciudad.component.scss']
})
export class VentanaCrearEditarCiudadComponent implements OnInit {
  ciudadForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<VentanaCrearEditarCiudadComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public fb: FormBuilder
  ) { }

  private _cerrarVentana(edicion: boolean | any){
    this.dialogRef.close(edicion);
  }

  ngOnInit(): void {
    this.ciudadForm = this.fb.group({
      codigoPais: ['', Validators.required],
      descripcionPais: ['', Validators.required]
    });

    if (this.data.accion === 'editar') {
      this.ciudadForm.removeControl('codigoCiudad');
      this.ciudadForm.get('descripcionCiudad').setValue(this.data.pais.descripcionCiudad);
      this.ciudadForm.updateValueAndValidity();
    }
  }

  aceptar(){
    this._cerrarVentana(this.ciudadForm.getRawValue());
  }

  cancelar(){
    this._cerrarVentana(false);
  }
  public checkError = (controlName: string, errorName: string) => {
    return this.ciudadForm.controls[controlName].hasError(errorName);
  }

}
