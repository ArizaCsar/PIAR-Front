import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { VentanaConfirmacionCiudadComponent } from 'src/app/core/ventana-confirmacion-ciudad/ventana-confirmacion-ciudad.component';
import { Ciudad } from 'src/app/models/ciudad';
import { AdministracionService } from '../administracion.service';
import { VentanaCrearEditarCiudadComponent } from './ventana-crear-editar-ciudad/ventana-crear-editar-ciudad.component';


@Component({
  selector: 'app-ciudades',
  templateUrl: './ciudades.component.html',
  styleUrls: ['./ciudades.component.scss']
})
export class CiudadesComponent implements OnInit {
  obtenerCiudades$: Observable<Ciudad[]>;

  constructor(
    private adminService: AdministracionService,
    public dialog: MatDialog,
    public snackBar: MatSnackBar
  ) { }

  private _cargarCiudades() {
    this.obtenerCiudades$ = this.adminService.obtenerCiudades();
  }

  ngOnInit(): void {
    this._cargarCiudades();
  }

  agregar() {
    const nuevoRef = this.dialog.open(VentanaCrearEditarCiudadComponent, {
      width: '450px',
      data: { accion: 'nuevo' }
    });

    nuevoRef.afterClosed().subscribe(creacion => {
      if (creacion) {
        this.adminService.agregarCiudad(creacion).subscribe(
          (editar: any) => {
            this.snackBar.open('Registro creado correctamente', null, {
              duration: 3000,
              horizontalPosition: 'right',
              panelClass: 'successMessage'
            });
            this._cargarCiudades();
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

  editar(codigoCiudad: string) {
    this.adminService.obtenerCiudad(codigoCiudad).subscribe(
      (ciudad: Ciudad) => {
        const editarRef = this.dialog.open(VentanaCrearEditarCiudadComponent, {
          width: '450px',
          data: { ciudad: ciudad, accion: 'editar' }
        });

        editarRef.afterClosed().subscribe(edicion => {
          if (edicion) {
            this.adminService.editarPais(codigoCiudad, edicion.descripcionCiudad).subscribe(
              (editar: any) => {
                this.snackBar.open('Registro actualizado correctamente', null, {
                  duration: 3000,
                  horizontalPosition: 'right',
                  panelClass: 'successMessage'
                });
                this._cargarCiudades();
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

  eliminar(codigoCiudad: string) {
    const dialogRef = this.dialog.open(VentanaConfirmacionCiudadComponent, {
      width: '350px',
      data: { tipoDato: 'ciudad' }
    });

    dialogRef.afterClosed().subscribe(confirmacion => {
      if (confirmacion) {
        this.adminService.eliminarCiudad(codigoCiudad)
          .pipe(
            switchMap((respuestaBorrado: any) => {
              if (respuestaBorrado) {
                this._cargarCiudades();
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
