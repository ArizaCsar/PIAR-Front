import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-ventana-crear-editar-materia',
  templateUrl: './ventana-crear-editar-materia.component.html',
  styleUrls: ['./ventana-crear-editar-materia.component.scss']
})
export class VentanaCrearEditarMateriaComponent implements OnInit {

  materiaForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<VentanaCrearEditarMateriaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public fb: FormBuilder
  ) { }

  private _cerrarVentana(edicion: boolean | any){
    this.dialogRef.close(edicion);
  }

  ngOnInit(): void {
    this.materiaForm = this.fb.group({
      codigoMateria: ['', Validators.required],
      descripcionMateria: ['', Validators.required]
    });

    if (this.data.accion === 'editar') {
      this.materiaForm.removeControl('codigoMateria');
      this.materiaForm.get('descripcionMateria').setValue(this.data.materia.descripcionMateria);
      this.materiaForm.updateValueAndValidity();
    }
  }

  aceptar(){
    this._cerrarVentana(this.materiaForm.getRawValue());
  }

  cancelar(){
    this._cerrarVentana(false);
  }
  public checkError = (controlName: string, errorName: string) => {
    return this.materiaForm.controls[controlName].hasError(errorName);
  }

}

