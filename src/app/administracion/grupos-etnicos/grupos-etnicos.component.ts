import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { VentanaConfirmacionGrupoEtnicoComponent } from 'src/app/core/ventana-confirmacion-grupo-etnico/ventana-confirmacion-grupo-etnico.component';
import { GrupoEtnico } from 'src/app/models/grupo_etnico';
import { AdministracionService } from '../administracion.service';
import { VentanaCrearEditarGrupoEtnicoComponent } from './ventana-crear-editar-grupo-etnico/ventana-crear-editar-grupo-etnico.component';

@Component({
  selector: 'app-grupos-etnicos',
  templateUrl: './grupos-etnicos.component.html',
  styleUrls: ['./grupos-etnicos.component.scss']
})
export class GruposEtnicosComponent implements OnInit {

  obtenerGruposEtnicos$: Observable<GrupoEtnico[]>;

  constructor(
    private adminService: AdministracionService,
    public dialog: MatDialog,
    public snackBar: MatSnackBar
  ) { }

  private _cargarGruposEtnicos() {
    this.obtenerGruposEtnicos$ = this.adminService.obtenerGruposEtnicos();
  }

  ngOnInit(): void {
    this._cargarGruposEtnicos();
  }

  agregar() {
    const nuevoRef = this.dialog.open(VentanaCrearEditarGrupoEtnicoComponent, {
      width: '450px',
      data: { accion: 'nuevo' }
    });

    nuevoRef.afterClosed().subscribe(creacion => {
      if (creacion) {
        this.adminService.agregarGrupoEtnico(creacion).subscribe(
          (editar: any) => {
            this.snackBar.open('Registro creado correctamente', null, {
              duration: 3000,
              horizontalPosition: 'right',
              panelClass: 'successMessage'
            });
            this._cargarGruposEtnicos();
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

  editar(codigoGrupoEtnico: number) {
    this.adminService.obtenerGrupoEtnico(codigoGrupoEtnico).subscribe(
      (grupoEtnico: GrupoEtnico) => {
        const editarRef = this.dialog.open(VentanaCrearEditarGrupoEtnicoComponent, {
          width: '450px',
          data: { grupoEtnico: grupoEtnico, accion: 'editar' }
        });

        editarRef.afterClosed().subscribe(edicion => {
          if (edicion) {
            this.adminService.editarGrupoEtnico(codigoGrupoEtnico, edicion.descripcionGrupoEtnico).subscribe(
              (editar: any) => {
                this.snackBar.open('Registro actualizado correctamente', null, {
                  duration: 3000,
                  horizontalPosition: 'right',
                  panelClass: 'successMessage'
                });
                this._cargarGruposEtnicos();
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

  eliminar(codigoGrupoEtnico: number) {
    const dialogRef = this.dialog.open(VentanaConfirmacionGrupoEtnicoComponent, {
      width: '350px',
      data: { tipoDato: 'grupoEtnico' }
    });

    dialogRef.afterClosed().subscribe(confirmacion => {
      if (confirmacion) {
        this.adminService.eliminarGrupoEtnico(codigoGrupoEtnico)
          .pipe(
            switchMap((respuestaBorrado: any) => {
              if (respuestaBorrado) {
                this._cargarGruposEtnicos();
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
