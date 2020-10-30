import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-ventana-crear-editar-dependencia',
  templateUrl: './ventana-crear-editar-dependencia.component.html',
  styleUrls: ['./ventana-crear-editar-dependencia.component.scss']
})
export class VentanaCrearEditarDependenciaComponent implements OnInit {

  dependenciaForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<VentanaCrearEditarDependenciaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public fb: FormBuilder
  ) { }

  private _cerrarVentana(edicion: boolean | any){
    this.dialogRef.close(edicion);
  }

  ngOnInit(): void {
    this.dependenciaForm = this.fb.group({
      codigoDependencia: ['', Validators.required],
      descripcionDependencia: ['', Validators.required]
    });

    if (this.data.accion === 'editar') {
      this.dependenciaForm.removeControl('codigoDependencia');
      this.dependenciaForm.get('descripcionDependencia').setValue(this.data.dependencia.descripcionDependencia);
      this.dependenciaForm.updateValueAndValidity();
    }
  }

  aceptar(){
    this._cerrarVentana(this.dependenciaForm.getRawValue());
  }

  cancelar(){
    this._cerrarVentana(false);
  }
  public checkError = (controlName: string, errorName: string) => {
    return this.dependenciaForm.controls[controlName].hasError(errorName);
  }

}
