import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { VentanaConfirmacionComponent } from 'src/app/core/ventana-confirmacion/ventana-confirmacion.component';
import { TipoDiscapacidad } from 'src/app/models/tipo_discapacidad';
import { AdministracionService } from '../administracion.service';
import { VentanaCrearEditarTiposIdentificacionComponent } from '../tipos-identificacion/ventana-crear-editar-tipos-identificacion/ventana-crear-editar-tipos-identificacion.component';
import { VentanaCrearEditarTipoDiscapacidadComponent } from './ventana-crear-editar-tipo-discapacidad/ventana-crear-editar-tipo-discapacidad.component';

@Component({
  selector: 'app-tipos-discapacidades',
  templateUrl: './tipos-discapacidades.component.html',
  styleUrls: ['./tipos-discapacidades.component.scss']
})
export class TiposDiscapacidadesComponent implements OnInit {
  obtenerTiposDiscapacidades$: Observable<TipoDiscapacidad[]>;

  constructor(
    private adminService: AdministracionService,
    public dialog: MatDialog,
    public snackBar: MatSnackBar
  ) { }

  private _cargarTisposDiscapacidades() {
    this.obtenerTiposDiscapacidades$ = this.adminService.obtenerTiposDiscapacidades();
  }

  ngOnInit(): void {
    this._cargarTisposDiscapacidades();
  }

  agregar() {
    const nuevoRef = this.dialog.open(VentanaCrearEditarTipoDiscapacidadComponent, {
      width: '450px',
      data: { accion: 'nuevo' }
    });

    nuevoRef.afterClosed().subscribe(creacion => {
      if (creacion) {
        this.adminService.agregarTipoDiscapacidad(creacion).subscribe(
          (editar: any) => {
            this.snackBar.open('Registro creado correctamente', null, {
              duration: 3000,
              horizontalPosition: 'right',
              panelClass: 'successMessage'
            });
            this._cargarTisposDiscapacidades();
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

  editar(codigoTipoDiscapacidad: number) {
    this.adminService.obtenerTipoDiscapacidad(codigoTipoDiscapacidad).subscribe(
      (tipoDiscapacidad: TipoDiscapacidad) => {
        const editarRef = this.dialog.open(VentanaCrearEditarTipoDiscapacidadComponent, {
          width: '450px',
          data: { tipoDiscapacidad: tipoDiscapacidad, accion: 'editar' }
        });

        editarRef.afterClosed().subscribe(edicion => {
          if (edicion) {
            this.adminService.editarTipoDiscapacidad(codigoTipoDiscapacidad, edicion.descripcionTipoDiscapacidad).subscribe(
              (editar: any) => {
                this.snackBar.open('Registro actualizado correctamente', null, {
                  duration: 3000,
                  horizontalPosition: 'right',
                  panelClass: 'successMessage'
                });
                this._cargarTisposDiscapacidades();
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

  eliminar(codigoTipoDiscapacidad: number) {
    const dialogRef = this.dialog.open(VentanaConfirmacionComponent, {
      width: '350px',
      data: { tipoDato: 'tipoDiscapacidad' }
    });

    dialogRef.afterClosed().subscribe(confirmacion => {
      if (confirmacion) {
        this.adminService.eliminarTipoDiscapacidad(codigoTipoDiscapacidad)
          .pipe(
            switchMap((respuestaBorrado: any) => {
              if (respuestaBorrado) {
                this._cargarTisposDiscapacidades();
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
