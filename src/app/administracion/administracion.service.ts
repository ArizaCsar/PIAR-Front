import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ciudad } from '../models/ciudad';
import { Departamento } from '../models/departamento.model';
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

  /* Departamento */

  obtenerDepartamentos() : Observable<Departamento[]> {
    return this.http.get<Departamento[]>(this.basePath + 'departamentos');
  }

  obtenerDepartamento(codigoDepartamento: string): Observable<Departamento> {
    return this.http.get<Departamento>(this.basePath + 'departamento/' + codigoDepartamento);
  }

  agregarDepartamento(nuevoDepartamento: Departamento) {
    return this.http.post<Departamento>(this.basePath + 'departamento', nuevoDepartamento);
  }

  editarDepartamento(codigoDepartamento: string, descripcionDepartamento: string) {
    return this.http.put(this.basePath + 'departamento/' + codigoDepartamento, { descripcionDepartamento: descripcionDepartamento});
  }

  eliminarDepartamento(codigoDepartamento: string) {
    return this.http.delete(this.basePath + 'departamento/' + codigoDepartamento);
  }

  /* Ciudades */

  obtenerCiudades() : Observable<Ciudad[]> {
    return this.http.get<Ciudad[]>(this.basePath + 'ciudades');
  }

  obtenerCiudad(codigoCiudad: string): Observable<Ciudad> {
    return this.http.get<Ciudad>(this.basePath + 'ciudad/' + codigoCiudad);
  }

  agregarCiudad(nuevoCiudad: Ciudad) {
    return this.http.post<Ciudad>(this.basePath + 'ciudad', nuevoCiudad);
  }

  editarCiudad(codigoCiudad: string, descripcionCiudad: string) {
    return this.http.put(this.basePath + 'ciudad/' + codigoCiudad, { descripcionCiudad: descripcionCiudad});
  }

  eliminarCiudad(codigoCiudad: string) {
    return this.http.delete(this.basePath + 'ciudad/' + codigoCiudad);
  }


}
