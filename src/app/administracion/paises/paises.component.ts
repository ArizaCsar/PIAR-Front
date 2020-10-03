import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { VentanaConfirmacionComponent } from 'src/app/core/ventana-confirmacion/ventana-confirmacion.component';
import { Pais } from 'src/app/models/pais.model';
import { AdministracionService } from '../administracion.service';

@Component({
  selector: 'app-paises',
  templateUrl: './paises.component.html',
  styleUrls: ['./paises.component.scss']
})
export class PaisesComponent implements OnInit {

  obtenerPaises$: Observable<Pais[]>;

  constructor(private adminService: AdministracionService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.obtenerPaises$ = this.adminService.obtenerPaises();
  }

  agregar() {
    console.log('Boton crear presionado');
  }

  editar(codigoPais: string) {
    console.log(`Botón editar presionado para el elemento con código ${codigoPais}`);
  }

  eliminar(codigoPais: string) {
    const dialogRef = this.dialog.open(VentanaConfirmacionComponent, {
      width: '350px',
      data: {tipoDato: 'pais'}
    });

    dialogRef.afterClosed().subscribe(confirmacion => {
      console.log(confirmacion);      
    });
  }

}
