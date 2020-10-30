import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { VentanaConfirmacionComponent } from 'src/app/core/ventana-confirmacion/ventana-confirmacion.component';
import { Eps } from 'src/app/models/eps';
import { AdministracionService } from '../administracion.service';
import { VentanaCrearEditarEpsComponent } from './ventana-crear-editar-eps/ventana-crear-editar-eps.component';

@Component({
  selector: 'app-eps',
  templateUrl: './eps.component.html',
  styleUrls: ['./eps.component.scss']
})
export class EpsComponent implements OnInit {
  obtenerEPS$: Observable<Eps[]>;

  constructor(
    private adminService: AdministracionService,
    public dialog: MatDialog,
    public snackBar: MatSnackBar
  ) { }

  private _cargarEPS() {
    this.obtenerEPS$ = this.adminService.obtenerEPS();
  }

  ngOnInit(): void {
    this._cargarEPS();
  }

  agregar() {
    const nuevoRef = this.dialog.open(VentanaCrearEditarEpsComponent, {
      width: '450px',
      data: { accion: 'nuevo' }
    });

    nuevoRef.afterClosed().subscribe(creacion => {
      if (creacion) {
        this.adminService.agregarEps(creacion).subscribe(
          (editar: any) => {
            this.snackBar.open('Registro creado correctamente', null, {
              duration: 3000,
              horizontalPosition: 'right',
              panelClass: 'successMessage'
            });
            this._cargarEPS();
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

  editar(codigoEps: number) {
    this.adminService.obtenerEps(codigoEps).subscribe(
      (eps: Eps) => {
        const editarRef = this.dialog.open(VentanaCrearEditarEpsComponent, {
          width: '450px',
          data: { eps: eps, accion: 'editar' }
        });

        editarRef.afterClosed().subscribe(edicion => {
          if (edicion) {
            this.adminService.editarEps(codigoEps, edicion.descripcionEps).subscribe(
              (editar: any) => {
                this.snackBar.open('Registro actualizado correctamente', null, {
                  duration: 3000,
                  horizontalPosition: 'right',
                  panelClass: 'successMessage'
                });
                this._cargarEPS();
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

  eliminar(codigoEps: number) {
    const dialogRef = this.dialog.open(VentanaConfirmacionComponent, {
      width: '350px',
      data: { tipoDato: 'eps' }
    });

    dialogRef.afterClosed().subscribe(confirmacion => {
      if (confirmacion) {
        this.adminService.eliminarEps(codigoEps)
          .pipe(
            switchMap((respuestaBorrado: any) => {
              if (respuestaBorrado) {
                this._cargarEPS();
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
