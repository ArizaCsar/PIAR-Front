import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-ventana-crear-editar-cargo',
  templateUrl: './ventana-crear-editar-cargo.component.html',
  styleUrls: ['./ventana-crear-editar-cargo.component.scss']
})
export class VentanaCrearEditarCargoComponent implements OnInit {

  cargoForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<VentanaCrearEditarCargoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public fb: FormBuilder
  ) { }

  private _cerrarVentana(edicion: boolean | any){
    this.dialogRef.close(edicion);
  }

  ngOnInit(): void {
    this.cargoForm = this.fb.group({
      codigoCargo: ['', Validators.required],
      descripcionCargo: ['', Validators.required]
    });

    if (this.data.accion === 'editar') {
      this.cargoForm.removeControl('codigoCargo');
      this.cargoForm.get('descripcionCargo').setValue(this.data.cargo.descripcionCargo);
      this.cargoForm.updateValueAndValidity();
    }
  }

  aceptar(){
    this._cerrarVentana(this.cargoForm.getRawValue());
  }

  cancelar(){
    this._cerrarVentana(false);
  }
  public checkError = (controlName: string, errorName: string) => {
    return this.cargoForm.controls[controlName].hasError(errorName);
  }

}

