import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { VentanaConfirmacionComponent } from 'src/app/core/ventana-confirmacion/ventana-confirmacion.component';
import { Ciudad } from 'src/app/models/ciudad';
import { Frecuencia } from 'src/app/models/frecuencia';
import { AdministracionService } from '../administracion.service';
import { VentanaCrearEditarFrecuenciaComponent } from './ventana-crear-editar-frecuencia/ventana-crear-editar-frecuencia.component';

@Component({
  selector: 'app-frecuencias',
  templateUrl: './frecuencias.component.html',
  styleUrls: ['./frecuencias.component.scss']
})
export class FrecuenciasComponent implements OnInit {
  obtenerFrecuencias$: Observable<Frecuencia[]>;

  constructor(
    private adminService: AdministracionService,
    public dialog: MatDialog,
    public snackBar: MatSnackBar
  ) { }

  private _cargarFrecuencias() {
    this.obtenerFrecuencias$ = this.adminService.obtenerFrecuencias();
  }

  ngOnInit(): void {
    this._cargarFrecuencias();
  }

  agregar() {
    const nuevoRef = this.dialog.open(VentanaCrearEditarFrecuenciaComponent, {
      width: '450px',
      data: { accion: 'nuevo' }
    });

    nuevoRef.afterClosed().subscribe(creacion => {
      if (creacion) {
        this.adminService.agregarFrecuencia(creacion).subscribe(
          (editar: any) => {
            this.snackBar.open('Registro creado correctamente', null, {
              duration: 3000,
              horizontalPosition: 'right',
              panelClass: 'successMessage'
            });
            this._cargarFrecuencias();
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

  editar(codigoFrecuencia: number) {
    this.adminService.obtenerFrecuencia(codigoFrecuencia).subscribe(
      (frecuencia: Frecuencia) => {
        const editarRef = this.dialog.open(VentanaCrearEditarFrecuenciaComponent, {
          width: '450px',
          data: { frecuencia: frecuencia, accion: 'editar' }
        });

        editarRef.afterClosed().subscribe(edicion => {
          if (edicion) {
            this.adminService.editarFrecuencia(codigoFrecuencia, edicion.descripcionFrecuencia).subscribe(
              (editar: any) => {
                this.snackBar.open('Registro actualizado correctamente', null, {
                  duration: 3000,
                  horizontalPosition: 'right',
                  panelClass: 'successMessage'
                });
                this._cargarFrecuencias();
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

  eliminar(codigoFrecuencia: string) {
    const dialogRef = this.dialog.open(VentanaConfirmacionComponent, {
      width: '350px',
      data: { tipoDato: 'frecuencia' }
    });

    dialogRef.afterClosed().subscribe(confirmacion => {
      if (confirmacion) {
        this.adminService.eliminarCiudad(codigoFrecuencia)
          .pipe(
            switchMap((respuestaBorrado: any) => {
              if (respuestaBorrado) {
                this._cargarFrecuencias();
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
