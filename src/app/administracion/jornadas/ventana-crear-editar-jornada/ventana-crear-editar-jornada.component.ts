import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-ventana-crear-editar-jornada',
  templateUrl: './ventana-crear-editar-jornada.component.html',
  styleUrls: ['./ventana-crear-editar-jornada.component.scss']
})
export class VentanaCrearEditarJornadaComponent implements OnInit {

  jornadaForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<VentanaCrearEditarJornadaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public fb: FormBuilder
  ) { }

  private _cerrarVentana(edicion: boolean | any){
    this.dialogRef.close(edicion);
  }

  ngOnInit(): void {
    this.jornadaForm = this.fb.group({
      codigoJornada: ['', Validators.required],
      descripcionJornada: ['', Validators.required]
    });

    if (this.data.accion === 'editar') {
      this.jornadaForm.removeControl('codigoJornada');
      this.jornadaForm.get('descripcionJornada').setValue(this.data.jornada.descripcionJornada);
      this.jornadaForm.updateValueAndValidity();
    }
  }

  aceptar(){
    this._cerrarVentana(this.jornadaForm.getRawValue());
  }

  cancelar(){
    this._cerrarVentana(false);
  }
  public checkError = (controlName: string, errorName: string) => {
    return this.jornadaForm.controls[controlName].hasError(errorName);
  }

}

