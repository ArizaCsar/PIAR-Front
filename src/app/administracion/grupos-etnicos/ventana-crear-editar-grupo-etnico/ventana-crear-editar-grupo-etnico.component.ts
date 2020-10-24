import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-ventana-crear-editar-grupo-etnico',
  templateUrl: './ventana-crear-editar-grupo-etnico.component.html',
  styleUrls: ['./ventana-crear-editar-grupo-etnico.component.scss']
})
export class VentanaCrearEditarGrupoEtnicoComponent implements OnInit {

  grupoEtnicoForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<VentanaCrearEditarGrupoEtnicoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public fb: FormBuilder
  ) { }

  private _cerrarVentana(edicion: boolean | any){
    this.dialogRef.close(edicion);
  }

  ngOnInit(): void {
    this.grupoEtnicoForm = this.fb.group({
      codigoGrupoEtnico: ['', Validators.required],
      descripcionGrupoEtnico: ['', Validators.required]
    });

    if (this.data.accion === 'editar') {
      this.grupoEtnicoForm.removeControl('codigoGrupoEtnico');
      this.grupoEtnicoForm.get('descripcionGrupoEtnico').setValue(this.data.grupoEtnico.descripcionGrupoEtnico);
      this.grupoEtnicoForm.updateValueAndValidity();
    }
  }

  aceptar(){
    this._cerrarVentana(this.grupoEtnicoForm.getRawValue());
  }

  cancelar(){
    this._cerrarVentana(false);
  }
  public checkError = (controlName: string, errorName: string) => {
    return this.grupoEtnicoForm.controls[controlName].hasError(errorName);
  }

}
