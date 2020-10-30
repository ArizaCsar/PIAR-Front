import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { TipoId } from 'src/app/models/tipo_identificacion';
import { AdministracionService } from '../administracion.service';
import { VentanaCrearEditarTiposIdentificacionComponent } from './ventana-crear-editar-tipos-identificacion/ventana-crear-editar-tipos-identificacion.component';

@Component({
  selector: 'app-tipos-identificacion',
  templateUrl: './tipos-identificacion.component.html',
  styleUrls: ['./tipos-identificacion.component.scss']
})
export class TiposIdentificacionComponent implements OnInit {
  obtenerTiposId$: Observable<TipoId[]>;

  constructor(
    private adminService: AdministracionService,
    public dialog: MatDialog,
    public snackBar: MatSnackBar
  ) { }

  private _cargarTiposId() {
    this.obtenerTiposId$ = this.adminService.obtenerTiposId();
  }

  ngOnInit(): void {
    this._cargarTiposId();
  }

  agregar() {
    const nuevoRef = this.dialog.open(VentanaCrearEditarTiposIdentificacionComponent, {
      width: '450px',
      data: { accion: 'nuevo' }
    });

    nuevoRef.afterClosed().subscribe(creacion => {
      if (creacion) {
        this.adminService.agregarTipoId(creacion).subscribe(
          (editar: any) => {
            this.snackBar.open('Registro creado correctamente', null, {
              duration: 3000,
              horizontalPosition: 'right',
              panelClass: 'successMessage'
            });
            this._cargarTiposId();
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

  editar(codigoTipoId: number) {
    this.adminService.obtenerTipoId(codigoTipoId).subscribe(
      (tipoId: TipoId) => {
        const editarRef = this.dialog.open(VentanaCrearEditarTiposIdentificacionComponent, {
          width: '450px',
          data: { tipoId: tipoId, accion: 'editar' }
        });

        editarRef.afterClosed().subscribe(edicion => {
          if (edicion) {
            this.adminService.editarTipoId(codigoTipoId, edicion.descripcionTipoId).subscribe(
              (editar: any) => {
                this.snackBar.open('Registro actualizado correctamente', null, {
                  duration: 3000,
                  horizontalPosition: 'right',
                  panelClass: 'successMessage'
                });
                this._cargarTiposId();
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

  eliminar(codigoTipoId: number) {
    const dialogRef = this.dialog.open(VentanaCrearEditarTiposIdentificacionComponent, {
      width: '350px',
      data: { tipoDato: 'tipoId' }
    });

    dialogRef.afterClosed().subscribe(confirmacion => {
      if (confirmacion) {
        this.adminService.eliminarTipoId(codigoTipoId)
          .pipe(
            switchMap((respuestaBorrado: any) => {
              if (respuestaBorrado) {
                this._cargarTiposId();
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
