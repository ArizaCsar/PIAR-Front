import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-ventana-crear-editar-distancia',
  templateUrl: './ventana-crear-editar-distancia.component.html',
  styleUrls: ['./ventana-crear-editar-distancia.component.scss']
})
export class VentanaCrearEditarDistanciaComponent implements OnInit {

  distanciaForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<VentanaCrearEditarDistanciaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public fb: FormBuilder
  ) { }

  private _cerrarVentana(edicion: boolean | any){
    this.dialogRef.close(edicion);
  }

  ngOnInit(): void {
    this.distanciaForm = this.fb.group({
      codigoDistancia: ['', Validators.required],
      descripcionDistancia: ['', Validators.required]
    });

    if (this.data.accion === 'editar') {
      this.distanciaForm.removeControl('codigoDistancia');
      this.distanciaForm.get('descripcionDistancia').setValue(this.data.distancia.descripcionDistancia);
      this.distanciaForm.updateValueAndValidity();
    }
  }

  aceptar(){
    this._cerrarVentana(this.distanciaForm.getRawValue());
  }

  cancelar(){
    this._cerrarVentana(false);
  }
  public checkError = (controlName: string, errorName: string) => {
    return this.distanciaForm.controls[controlName].hasError(errorName);
  }

}
