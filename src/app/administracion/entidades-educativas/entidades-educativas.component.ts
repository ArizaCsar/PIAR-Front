import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { VentanaConfirmacionComponent } from 'src/app/core/ventana-confirmacion/ventana-confirmacion.component';
import { EntidadEducativa } from 'src/app/models/entidad_educativa';
import { Pais } from 'src/app/models/pais.model';
import { AdministracionService } from '../administracion.service';
import { VentanaCrearEditarEntidadEducativaComponent } from './ventana-crear-editar-entidad-educativa/ventana-crear-editar-entidad-educativa.component';

@Component({
  selector: 'app-entidades-educativas',
  templateUrl: './entidades-educativas.component.html',
  styleUrls: ['./entidades-educativas.component.scss']
})
export class EntidadesEducativasComponent implements OnInit {

  obtenerEntidadesEducativas$: Observable<EntidadEducativa[]>;

  constructor(
    private adminService: AdministracionService,
    public dialog: MatDialog,
    public snackBar: MatSnackBar
  ) { }

  private _cargarEntidadesEducativas() {
    this.obtenerEntidadesEducativas$ = this.adminService.obtenerEntidadesEducativas();
  }

  ngOnInit(): void {
    this._cargarEntidadesEducativas();
  }

  agregar() {
    const nuevoRef = this.dialog.open(VentanaCrearEditarEntidadEducativaComponent, {
      width: '450px',
      data: { accion: 'nuevo' }
    });

    nuevoRef.afterClosed().subscribe(creacion => {
      if (creacion) {
        this.adminService.agregarEntidadEducativa(creacion).subscribe(
          (editar: any) => {
            this.snackBar.open('Registro creado correctamente', null, {
              duration: 3000,
              horizontalPosition: 'right',
              panelClass: 'successMessage'
            });
            this._cargarEntidadesEducativas();
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

  editar(codigoEntidadEducativa: number) {
    this.adminService.obtenerEntidadEducativa(codigoEntidadEducativa).subscribe(
      (entidadEducativa: EntidadEducativa) => {
        const editarRef = this.dialog.open(VentanaCrearEditarEntidadEducativaComponent, {
          width: '450px',
          data: { entidadEducativa: entidadEducativa, accion: 'editar' }
        });

        editarRef.afterClosed().subscribe(edicion => {
          if (edicion) {
            this.adminService.editarEntidadEducativa(codigoEntidadEducativa, edicion.nombreEntidadEducativa).subscribe(
              (editar: any) => {
                this.snackBar.open('Registro actualizado correctamente', null, {
                  duration: 3000,
                  horizontalPosition: 'right',
                  panelClass: 'successMessage'
                });
                this._cargarEntidadesEducativas();
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

  eliminar(codigoEntidadEducativa: number) {
    const dialogRef = this.dialog.open(VentanaConfirmacionComponent, {
      width: '350px',
      data: { tipoDato: 'entidadEducativa' }
    });

    dialogRef.afterClosed().subscribe(confirmacion => {
      if (confirmacion) {
        this.adminService.eliminarEntidadEducativa(codigoEntidadEducativa)
          .pipe(
            switchMap((respuestaBorrado: any) => {
              if (respuestaBorrado) {
                this._cargarEntidadesEducativas();
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

