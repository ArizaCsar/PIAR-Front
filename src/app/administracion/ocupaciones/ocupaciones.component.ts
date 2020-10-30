import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
/* import { VentanaConfirmacionOcupacionComponent } from 'src/app/core/ventana-confirmacion-ocupacion/ventana-confirmacion-ocupacion.component'; */
import { VentanaConfirmacionComponent } from 'src/app/core/ventana-confirmacion/ventana-confirmacion.component';
import { Ocupacion } from 'src/app/models/ocupacion';
import { AdministracionService } from '../administracion.service';
import { VentanaCrearEditarOcupacionComponent } from './ventana-crear-editar-ocupacion/ventana-crear-editar-ocupacion.component';

@Component({
  selector: 'app-ocupaciones',
  templateUrl: './ocupaciones.component.html',
  styleUrls: ['./ocupaciones.component.scss']
})
export class OcupacionesComponent implements OnInit {

  obtenerOcupaciones$: Observable<Ocupacion[]>;

  constructor(
    private adminService: AdministracionService,
    public dialog: MatDialog,
    public snackBar: MatSnackBar
  ) { }

  private _cargarOcupaciones() {
    this.obtenerOcupaciones$ = this.adminService.obtenerOcupaciones();
  }


  ngOnInit(): void {
    this._cargarOcupaciones();
  }

  agregar() {
    const nuevoRef = this.dialog.open(VentanaCrearEditarOcupacionComponent, {
      width: '450px',
      data: { accion: 'nuevo' }
    });

    nuevoRef.afterClosed().subscribe(creacion => {
      if (creacion) {
        this.adminService.agregarOcupacion(creacion).subscribe(
          (editar: any) => {
            this.snackBar.open('Registro creado correctamente', null, {
              duration: 3000,
              horizontalPosition: 'right',
              panelClass: 'successMessage'
            });
            this._cargarOcupaciones();
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

  editar(codigoOcupacion: number) {
    this.adminService.obtenerOcupacion(codigoOcupacion).subscribe(
      (ocupacion: Ocupacion) => {
        const editarRef = this.dialog.open(VentanaCrearEditarOcupacionComponent, {
          width: '450px',
          data: { ocupacion: ocupacion, accion: 'editar' }
        });

        editarRef.afterClosed().subscribe(edicion => {
          if (edicion) {
            this.adminService.editarOcupacion(codigoOcupacion, edicion.descripcionOcupacion).subscribe(
              (editar: any) => {
                this.snackBar.open('Registro actualizado correctamente', null, {
                  duration: 3000,
                  horizontalPosition: 'right',
                  panelClass: 'successMessage'
                });
                this._cargarOcupaciones();
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

  eliminar(codigoOcupacion: number) {
    const dialogRef = this.dialog.open(VentanaConfirmacionComponent, {
      width: '350px',
      data: { tipoDato: 'ocupacion' }
    });

    dialogRef.afterClosed().subscribe(confirmacion => {
      if (confirmacion) {
        this.adminService.eliminarOcupacion(codigoOcupacion)
          .pipe(
            switchMap((respuestaBorrado: any) => {
              if (respuestaBorrado) {
                this._cargarOcupaciones();
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
