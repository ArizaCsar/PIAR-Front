import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { VentanaConfirmacionComponent } from 'src/app/core/ventana-confirmacion/ventana-confirmacion.component';
import { Materia } from 'src/app/models/materia';
import { AdministracionService } from '../administracion.service';
import { VentanaCrearEditarMateriaComponent } from './ventana-crear-editar-materia/ventana-crear-editar-materia.component';

@Component({
  selector: 'app-materias',
  templateUrl: './materias.component.html',
  styleUrls: ['./materias.component.scss']
})
export class MateriasComponent implements OnInit {
  obtenerMaterias$: Observable<Materia[]>;

  constructor(
    private adminService: AdministracionService,
    public dialog: MatDialog,
    public snackBar: MatSnackBar
  ) { }

  private _cargarMaterias() {
    this.obtenerMaterias$ = this.adminService.obtenerMaterias();
  }

  ngOnInit(): void {
    this._cargarMaterias();
  }

  agregar() {
    const nuevoRef = this.dialog.open(VentanaCrearEditarMateriaComponent, {
      width: '450px',
      data: { accion: 'nuevo' }
    });

    nuevoRef.afterClosed().subscribe(creacion => {
      if (creacion) {
        this.adminService.agregarMateria(creacion).subscribe(
          (editar: any) => {
            this.snackBar.open('Registro creado correctamente', null, {
              duration: 3000,
              horizontalPosition: 'right',
              panelClass: 'successMessage'
            });
            this._cargarMaterias();
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

  editar(codigoMateria: number) {
    this.adminService.obtenerMateria(codigoMateria).subscribe(
      (materia: Materia) => {
        const editarRef = this.dialog.open(VentanaCrearEditarMateriaComponent, {
          width: '450px',
          data: { materia: materia, accion: 'editar' }
        });

        editarRef.afterClosed().subscribe(edicion => {
          if (edicion) {
            this.adminService.editarMateria(codigoMateria, edicion.descripcionMateria).subscribe(
              (editar: any) => {
                this.snackBar.open('Registro actualizado correctamente', null, {
                  duration: 3000,
                  horizontalPosition: 'right',
                  panelClass: 'successMessage'
                });
                this._cargarMaterias();
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

  eliminar(codigoMateria: number) {
    const dialogRef = this.dialog.open(VentanaConfirmacionComponent, {
      width: '350px',
      data: { tipoDato: 'materia' }
    });

    dialogRef.afterClosed().subscribe(confirmacion => {
      if (confirmacion) {
        this.adminService.eliminarMateria(codigoMateria)
          .pipe(
            switchMap((respuestaBorrado: any) => {
              if (respuestaBorrado) {
                this._cargarMaterias();
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

