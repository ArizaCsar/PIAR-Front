import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pais } from '../models/pais.model';

@Injectable({
  providedIn: 'root'
})
export class AdministracionService {

  private basePath = 'http://127.0.0.1:8000/api/';

  constructor(private http: HttpClient) { }

  obtenerPaises() : Observable<Pais[]> {
    return this.http.get<Pais[]>(this.basePath + 'paises');
  }

  obtenerPais(codigoPais: string): Observable<Pais> {
    return this.http.get<Pais>(this.basePath + 'pais/' + codigoPais);
  }

  agregarPais(nuevoPais: Pais) {
    return this.http.post<Pais>(this.basePath + 'pais', nuevoPais);
  }

  editarPais(codigoPais: string, descripcionPais: string) {
    return this.http.put(this.basePath + 'pais/' + codigoPais, { descripcionPais: descripcionPais});
  }

  eliminarPais(codigoPais: string) {
    return this.http.delete(this.basePath + 'pais/' + codigoPais);
  }

}
