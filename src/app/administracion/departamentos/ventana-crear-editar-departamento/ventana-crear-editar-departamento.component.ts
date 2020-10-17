import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-ventana-crear-editar-departamento',
  templateUrl: './ventana-crear-editar-departamento.component.html',
  styleUrls: ['./ventana-crear-editar-departamento.component.scss']
})
export class VentanaCrearEditarDepartamentoComponent implements OnInit {

  departamentoForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<VentanaCrearEditarDepartamentoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public fb: FormBuilder
  ) { }

  private _cerrarVentana(edicion: boolean | any){
    this.dialogRef.close(edicion);
  }

  ngOnInit(): void {
    this.departamentoForm = this.fb.group({
      codigoDepartamento: ['', Validators.required],
      descripcionDepartamento: ['', Validators.required]
    });

    if (this.data.accion === 'editar') {
      this.departamentoForm.removeControl('codigoDepartamento');
      this.departamentoForm.get('descripcionDepartamento').setValue(this.data.departamento.descripcionDepartamento);
      this.departamentoForm.updateValueAndValidity();
    }
  
  }

  aceptar(){
    this._cerrarVentana(this.departamentoForm.getRawValue());

  }

  cancelar(){
    this._cerrarVentana(false); 
  }

  public checkError = (controlName: string, errorName: string) => {
    return this.departamentoForm.controls[controlName].hasError(errorName);
  }

}
