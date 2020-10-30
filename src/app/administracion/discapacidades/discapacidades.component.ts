import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { VentanaConfirmacionComponent } from 'src/app/core/ventana-confirmacion/ventana-confirmacion.component';
import { Discapacidad } from 'src/app/models/discapacidad';
import { AdministracionService } from '../administracion.service';
import { VentanaCrearEditarDiscapacidadComponent } from './ventana-crear-editar-discapacidad/ventana-crear-editar-discapacidad.component';

@Component({
  selector: 'app-discapacidades',
  templateUrl: './discapacidades.component.html',
  styleUrls: ['./discapacidades.component.scss']
})
export class DiscapacidadesComponent implements OnInit {

  obtenerDiscapacidades$: Observable<Discapacidad[]>;

  constructor(
    private adminService: AdministracionService,
    public dialog: MatDialog,
    public snackBar: MatSnackBar
  ) { }

  private _cargarDiscapacidades() {
    this.obtenerDiscapacidades$ = this.adminService.obtenerDiscapacidades();
  }

  ngOnInit(): void {
    this._cargarDiscapacidades();
  }

  agregar() {
    const nuevoRef = this.dialog.open(VentanaCrearEditarDiscapacidadComponent, {
      width: '450px',
      data: { accion: 'nuevo' }
    });

    nuevoRef.afterClosed().subscribe(creacion => {
      if (creacion) {
        this.adminService.agregarDiscapacidad(creacion).subscribe(
          (editar: any) => {
            this.snackBar.open('Registro creado correctamente', null, {
              duration: 3000,
              horizontalPosition: 'right',
              panelClass: 'successMessage'
            });
            this._cargarDiscapacidades();
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

  editar(codigoDiscapacidad: number) {
    this.adminService.obtenerDiscapacidad(codigoDiscapacidad).subscribe(
      (discapacidad: Discapacidad) => {
        const editarRef = this.dialog.open(VentanaCrearEditarDiscapacidadComponent, {
          width: '450px',
          data: { discapacidad: discapacidad, accion: 'editar' }
        });

        editarRef.afterClosed().subscribe(edicion => {
          if (edicion) {
            this.adminService.editarDiscapacidad(codigoDiscapacidad, edicion.descripcionDiscapacidad).subscribe(
              (editar: any) => {
                this.snackBar.open('Registro actualizado correctamente', null, {
                  duration: 3000,
                  horizontalPosition: 'right',
                  panelClass: 'successMessage'
                });
                this._cargarDiscapacidades();
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

  eliminar(codigoDiscapacidad: number) {
    const dialogRef = this.dialog.open(VentanaConfirmacionComponent, {
      width: '350px',
      data: { tipoDato: 'discapacidad' }
    });

    dialogRef.afterClosed().subscribe(confirmacion => {
      if (confirmacion) {
        this.adminService.eliminarDiscapacidad(codigoDiscapacidad)
          .pipe(
            switchMap((respuestaBorrado: any) => {
              if (respuestaBorrado) {
                this._cargarDiscapacidades();
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
