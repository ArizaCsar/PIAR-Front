import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ciudad } from '../models/ciudad';
import { Departamento } from '../models/departamento.model';
import { Discapacidad } from '../models/discapacidad';
import { GrupoEtnico } from '../models/grupo_etnico';
import { Ocupacion } from '../models/ocupacion';
import { Pais } from '../models/pais.model';
import { TipoDiscapacidad } from '../models/tipo_discapacidad';
import { TipoId } from '../models/tipo_identificacion';


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

  /* Tipos Identificacion */

  obtenerTiposId() : Observable<TipoId[]> {
    return this.http.get<TipoId[]>(this.basePath + 'tiposId');
  }

  obtenerTipoId(codigoTipoId: number): Observable<TipoId> {
    return this.http.get<TipoId>(this.basePath + 'tipoId/' + codigoTipoId);
  }

  agregarTipoId(nuevoTipoId: TipoId) {
    return this.http.post<TipoId>(this.basePath + 'tipoId', nuevoTipoId);
  }

  editarTipoId(codigoTipoId: number, descripcionTipoId: number) {
    return this.http.put(this.basePath + 'tipoId/' + codigoTipoId, { descripcionTipoId: descripcionTipoId});
  }

  eliminarTipoId(codigoTipoId: number) {
    return this.http.delete(this.basePath + 'tipoId/' + codigoTipoId);
  }

  /* Grupos Etnicos */
  obtenerGruposEtnicos() : Observable<GrupoEtnico[]> {
    return this.http.get<GrupoEtnico[]>(this.basePath + 'gruposEtnicos');
  }

  obtenerGrupoEtnico(codigoGrupoEtnico: number): Observable<GrupoEtnico> {
    return this.http.get<GrupoEtnico>(this.basePath + 'grupoEtnico/' + codigoGrupoEtnico);
  }

  agregarGrupoEtnico(nuevoGrupoEtnico: GrupoEtnico) {
    return this.http.post<GrupoEtnico>(this.basePath + 'grupoEtnico', nuevoGrupoEtnico);
  }

  editarGrupoEtnico(codigoGrupoEtnico: number, descripcionGrupoEtnico: number) {
    return this.http.put(this.basePath + 'grupoEtnico/' + codigoGrupoEtnico, { descripcionGrupoEtnico: descripcionGrupoEtnico});
  }

  eliminarGrupoEtnico(codigoGrupoEtnico: number) {
    return this.http.delete(this.basePath + 'grupoEtnico/' + codigoGrupoEtnico);
  }

  /* Tipos Discapacidades */

  obtenerTiposDiscapacidades() : Observable<TipoDiscapacidad[]> {
    return this.http.get<TipoDiscapacidad[]>(this.basePath + 'tiposDiscapacidades');
  }

  obtenerTipoDiscapacidad(codigoTipoDiscapacidad: number): Observable<TipoDiscapacidad> {
    return this.http.get<TipoDiscapacidad>(this.basePath + 'tipoDiscapacidad/' + codigoTipoDiscapacidad);
  }

  agregarTipoDiscapacidad(nuevoTipoDiscapacidad: TipoDiscapacidad) {
    return this.http.post<TipoDiscapacidad>(this.basePath + 'tipoDiscapacidad', nuevoTipoDiscapacidad);
  }

  editarTipoDiscapacidad(codigoTipoDiscapacidad: number, descripcionTipoDiscapacidad: number) {
    return this.http.put(this.basePath + 'tipoDiscapacidad/' + codigoTipoDiscapacidad, { descripcionTipoDiscapacidad: descripcionTipoDiscapacidad});
  }

  eliminarTipoDiscapacidad(codigoTipoDiscapacidad: number) {
    return this.http.delete(this.basePath + 'tipoDiscapacidad/' + codigoTipoDiscapacidad);
  } 

   /* Discapacidades */

   obtenerDiscapacidades() : Observable<Discapacidad[]> {
    return this.http.get<Discapacidad[]>(this.basePath + 'discapacidades');
  }

  obtenerDiscapacidad(codigoDiscapacidad: number): Observable<Discapacidad> {
    return this.http.get<Discapacidad>(this.basePath + 'discapacidad/' + codigoDiscapacidad);
  }

  agregarDiscapacidad(nuevoDiscapacidad: Discapacidad) {
    return this.http.post<Discapacidad>(this.basePath + 'discapacidad', nuevoDiscapacidad);
  }

  editarDiscapacidad(codigoDiscapacidad: number, descripcionDiscapacidad: number) {
    return this.http.put(this.basePath + 'discapacidad/' + codigoDiscapacidad, { descripcionDiscapacidad: descripcionDiscapacidad});
  }

  eliminarDiscapacidad(codigoDiscapacidad: number) {
    return this.http.delete(this.basePath + 'discapacidad/' + codigoDiscapacidad);
  }

   /* ocupaciones */

   obtenerOcupaciones() : Observable<Ocupacion[]> {
    return this.http.get<Ocupacion[]>(this.basePath + 'ocupaciones');
  }

  obtenerOcupacion(codigoOcupacion: number): Observable<Ocupacion> {
    return this.http.get<Ocupacion>(this.basePath + 'ocupacion/' + codigoOcupacion);
  }

  agregarOcupacion(nuevoOcupacion: Ocupacion) {
    return this.http.post<Ocupacion>(this.basePath + 'ocupacion', nuevoOcupacion);
  }

  editarOcupacion(codigoOcupacion: number, descripcionOcupacion: number) {
    return this.http.put(this.basePath + 'ocupacion/' + codigoOcupacion, { descripcionOcupacion: descripcionOcupacion});
  }

  eliminarOcupacion(codigoOcupacion: number) {
    return this.http.delete(this.basePath + 'ocupacion/' + codigoOcupacion);
  }

}
