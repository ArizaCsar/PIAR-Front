import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-ventana-crear-editar-tipos-identificacion',
  templateUrl: './ventana-crear-editar-tipos-identificacion.component.html',
  styleUrls: ['./ventana-crear-editar-tipos-identificacion.component.scss']
})
export class VentanaCrearEditarTiposIdentificacionComponent implements OnInit {
  tipoIdForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<VentanaCrearEditarTiposIdentificacionComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public fb: FormBuilder
  ) { }

  private _cerrarVentana(edicion: boolean | any){
    this.dialogRef.close(edicion);
  }

  ngOnInit(): void {
    this.tipoIdForm = this.fb.group({
      codigoTipoId: ['', Validators.required],
      descripcionTipoId: ['', Validators.required]
    });

    if (this.data.accion === 'editar') {
      this.tipoIdForm.removeControl('codigoTipoId');
      this.tipoIdForm.get('descripcionTipoId').setValue(this.data.pais.descripcionTipoId);
      this.tipoIdForm.updateValueAndValidity();
    }
  }

  aceptar(){
    this._cerrarVentana(this.tipoIdForm.getRawValue());
  }

  cancelar(){
    this._cerrarVentana(false);
  }
  public checkError = (controlName: string, errorName: string) => {
    return this.tipoIdForm.controls[controlName].hasError(errorName);
  }

}
