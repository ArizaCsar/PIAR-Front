import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Pais } from 'src/app/models/pais.model';
import { AdministracionService } from '../administracion.service';

@Component({
  selector: 'app-paises',
  templateUrl: './paises.component.html',
  styleUrls: ['./paises.component.scss']
})
export class PaisesComponent implements OnInit {

  obtenerPaises$: Observable<Pais[]>;

  constructor(private adminService: AdministracionService) { }

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
    console.log(`Botón eliminar presionado para el elemento con código ${codigoPais}`);
  }

}
