import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { VentanaConfirmacionComponent } from 'src/app/core/ventana-confirmacion/ventana-confirmacion.component';
import { Pais } from 'src/app/models/pais.model';
import { TipoTelefono } from 'src/app/models/tipo_telefono';
import { AdministracionService } from '../administracion.service';
import { VentanaCrearEditarTipoTelefonoComponent } from './ventana-crear-editar-tipo-telefono/ventana-crear-editar-tipo-telefono.component';

@Component({
  selector: 'app-tipos-telefonos',
  templateUrl: './tipos-telefonos.component.html',
  styleUrls: ['./tipos-telefonos.component.scss']
})
export class TiposTelefonosComponent implements OnInit {

  obtenerTiposTelefonos$: Observable<TipoTelefono[]>;

  constructor(
    private adminService: AdministracionService,
    public dialog: MatDialog,
    public snackBar: MatSnackBar
  ) { }

  private _cargarTiposTelefonos() {
    this.obtenerTiposTelefonos$ = this.adminService.obtenerTiposTelefonos();
  }

  ngOnInit(): void {
    this._cargarTiposTelefonos();
  }

  agregar() {
    const nuevoRef = this.dialog.open(VentanaCrearEditarTipoTelefonoComponent, {
      width: '450px',
      data: { accion: 'nuevo' }
    });

    nuevoRef.afterClosed().subscribe(creacion => {
      if (creacion) {
        this.adminService.agregarTipoTelefono(creacion).subscribe(
          (editar: any) => {
            this.snackBar.open('Registro creado correctamente', null, {
              duration: 3000,
              horizontalPosition: 'right',
              panelClass: 'successMessage'
            });
            this._cargarTiposTelefonos();
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

  editar(codigoTipoTelefono: number) {
    this.adminService.obtenerTipoTelefono(codigoTipoTelefono).subscribe(
      (tipoTelefono: TipoTelefono) => {
        const editarRef = this.dialog.open(VentanaCrearEditarTipoTelefonoComponent, {
          width: '450px',
          data: { tipoTelefono: tipoTelefono, accion: 'editar' }
        });

        editarRef.afterClosed().subscribe(edicion => {
          if (edicion) {
            this.adminService.editarTipoTelefono(codigoTipoTelefono, edicion.descripcionTipoTelefono).subscribe(
              (editar: any) => {
                this.snackBar.open('Registro actualizado correctamente', null, {
                  duration: 3000,
                  horizontalPosition: 'right',
                  panelClass: 'successMessage'
                });
                this._cargarTiposTelefonos();
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

  eliminar(codigoTipoTelefono: number) {
    const dialogRef = this.dialog.open(VentanaConfirmacionComponent, {
      width: '350px',
      data: { tipoDato: 'tipoTelefono' }
    });

    dialogRef.afterClosed().subscribe(confirmacion => {
      if (confirmacion) {
        this.adminService.eliminarTipoTelefono(codigoTipoTelefono)
          .pipe(
            switchMap((respuestaBorrado: any) => {
              if (respuestaBorrado) {
                this._cargarTiposTelefonos();
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
