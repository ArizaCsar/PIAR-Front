import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { VentanaConfirmacionComponent } from 'src/app/core/ventana-confirmacion/ventana-confirmacion.component';
import { Ciudad } from 'src/app/models/ciudad';
import { Parentesco } from 'src/app/models/parentesco';
import { AdministracionService } from '../administracion.service';
import { VentanaCrearEditarParentescoComponent } from './ventana-crear-editar-parentesco/ventana-crear-editar-parentesco.component';

@Component({
  selector: 'app-parentescos',
  templateUrl: './parentescos.component.html',
  styleUrls: ['./parentescos.component.scss']
})
export class ParentescosComponent implements OnInit {
  obtenerParentescos$: Observable<Parentesco[]>;

  constructor(
    private adminService: AdministracionService,
    public dialog: MatDialog,
    public snackBar: MatSnackBar
  ) { }

  private _cargarParentescos() {
    this.obtenerParentescos$ = this.adminService.obtenerParentescos();
  }

  ngOnInit(): void {
    this._cargarParentescos();
  }

  agregar() {
    const nuevoRef = this.dialog.open(VentanaCrearEditarParentescoComponent, {
      width: '450px',
      data: { accion: 'nuevo' }
    });

    nuevoRef.afterClosed().subscribe(creacion => {
      if (creacion) {
        this.adminService.agregarParentesco(creacion).subscribe(
          (editar: any) => {
            this.snackBar.open('Registro creado correctamente', null, {
              duration: 3000,
              horizontalPosition: 'right',
              panelClass: 'successMessage'
            });
            this._cargarParentescos();
          },
          (fail: any) => {
            this.snackBar.open(fail.error.message, null, {
              duration: 3000,
              horizontalPosition: 'right',
              panelClass: 'errorMessage'
            })
          }
        );
      }
    });
  }

  editar(codigoParentesco: number) {
    this.adminService.obtenerParentesco(codigoParentesco).subscribe(
      (parentesco: Parentesco) => {
        const editarRef = this.dialog.open(VentanaCrearEditarParentescoComponent, {
          width: '450px',
          data: { parentesco: parentesco, accion: 'editar' }
        });

        editarRef.afterClosed().subscribe(edicion => {
          if (edicion) {
            this.adminService.editarParentesco(codigoParentesco, edicion.descripcionParentesco).subscribe(
              (editar: any) => {
                this.snackBar.open('Registro actualizado correctamente', null, {
                  duration: 3000,
                  horizontalPosition: 'right',
                  panelClass: 'successMessage'
                });
                this._cargarParentescos();
              },
              (fail: any) => {
                this.snackBar.open(fail.error.message, null, {
                  duration: 3000,
                  horizontalPosition: 'right',
                  panelClass: 'errorMessage'
                })
              }
            );
          }
        });
      },
      (fail: any) => {
        console.error(fail);
      }
    );
  }

  eliminar(codigoParentesco: number) {
    const dialogRef = this.dialog.open(VentanaConfirmacionComponent, {
      width: '350px',
      data: { tipoDato: 'parentesco' }
    });

    dialogRef.afterClosed().subscribe(confirmacion => {
      if (confirmacion) {
        this.adminService.eliminarParentesco(codigoParentesco)
          .pipe(
            switchMap((respuestaBorrado: any) => {
              if (respuestaBorrado) {
                this._cargarParentescos();
              }
              return respuestaBorrado;
            })
          )
          .subscribe(
            success => {},
            fail => {
              this.snackBar.open(fail.error.message, null, {
                duration: 3000,
                horizontalPosition: 'right',
                panelClass: 'errorMessage'
              })
            }
          );
      }
    });
  }

}

