import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-ventana-crear-editar-tipo-telefono',
  templateUrl: './ventana-crear-editar-tipo-telefono.component.html',
  styleUrls: ['./ventana-crear-editar-tipo-telefono.component.scss']
})
export class VentanaCrearEditarTipoTelefonoComponent implements OnInit {

  tipoTelefonoForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<VentanaCrearEditarTipoTelefonoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public fb: FormBuilder
  ) { }

  private _cerrarVentana(edicion: boolean | any){
    this.dialogRef.close(edicion);
  }

  ngOnInit(): void {
    this.tipoTelefonoForm = this.fb.group({
      codigoTipoTelefono: ['', Validators.required],
      descripcionTipoTelefono: ['', Validators.required]
    });

    if (this.data.accion === 'editar') {
      this.tipoTelefonoForm.removeControl('codigoTipoTelefono');
      this.tipoTelefonoForm.get('descripcionTipoTelefono').setValue(this.data.tipoTelefono.descripcionTipoTelefono);
      this.tipoTelefonoForm.updateValueAndValidity();
    }
  }

  aceptar(){
    this._cerrarVentana(this.tipoTelefonoForm.getRawValue());
  }

  cancelar(){
    this._cerrarVentana(false);
  }
  public checkError = (controlName: string, errorName: string) => {
    return this.tipoTelefonoForm.controls[controlName].hasError(errorName);
  }

}
