import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cargo } from '../models/cargo';
import { Ciudad } from '../models/ciudad';
import { Departamento } from '../models/departamento.model';
import { Dependencia } from '../models/dependencia';
import { Discapacidad } from '../models/discapacidad';
import { Distancia } from '../models/distancia';
import { EntidadEducativa } from '../models/entidad_educativa';
import { Eps } from '../models/eps';
import { Frecuencia } from '../models/frecuencia';
import { Grado } from '../models/grado';
import { GrupoEtnico } from '../models/grupo_etnico';
import { Jornada } from '../models/jornada';
import { Materia } from '../models/materia';
import { Ocupacion } from '../models/ocupacion';
import { Pais } from '../models/pais.model';
import { Parentesco } from '../models/parentesco';
import { Sede } from '../models/sede';
import { TipoDiscapacidad } from '../models/tipo_discapacidad';
import { TipoId } from '../models/tipo_identificacion';
import { TipoTelefono } from '../models/tipo_telefono';


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

   /* Materias */

   obtenerMaterias() : Observable<Materia[]> {
    return this.http.get<Materia[]>(this.basePath + 'materias');
  }

  obtenerMateria(codigoMateria: number): Observable<Materia> {
    return this.http.get<Materia>(this.basePath + 'materia/' + codigoMateria);
  }

  agregarMateria(nuevoMateria: Materia) {
    return this.http.post<Materia>(this.basePath + 'materia', nuevoMateria);
  }

  editarMateria(codigoMateria: number, descripcionMateria: string) {
    return this.http.put(this.basePath + 'materia/' + codigoMateria, { descripcionMateria: descripcionMateria});
  }

  eliminarMateria(codigoMateria: number) {
    return this.http.delete(this.basePath + 'materia/' + codigoMateria);
  }

   /* Tipos Telefonos */

   obtenerTiposTelefonos() : Observable<TipoTelefono[]> {
    return this.http.get<TipoTelefono[]>(this.basePath + 'tiposTelefonos');
  }

  obtenerTipoTelefono(codigoTipoTelefono: number): Observable<TipoTelefono> {
    return this.http.get<TipoTelefono>(this.basePath + 'tipoTelefono/' + codigoTipoTelefono);
  }

  agregarTipoTelefono(nuevoTipoTelefono: TipoTelefono) {
    return this.http.post<TipoTelefono>(this.basePath + 'tipoTelefono', nuevoTipoTelefono);
  }

  editarTipoTelefono(codigoTipoTelefono: number, descripcionTipoTelefono: string) {
    return this.http.put(this.basePath + 'tipoTelefono/' + codigoTipoTelefono, { descripcionTipoTelefono: descripcionTipoTelefono});
  }

  eliminarTipoTelefono(codigoTipoTelefono: number) {
    return this.http.delete(this.basePath + 'tipoTelefono/' + codigoTipoTelefono);
  }

  /* EPS */

  obtenerEPS() : Observable<Eps[]> {
    return this.http.get<Eps[]>(this.basePath + 'eps');
  }

  obtenerEps(codigoEps: number): Observable<Eps> {
    return this.http.get<Eps>(this.basePath + 'eps/' + codigoEps);
  }

  agregarEps(nuevoEps: Eps) {
    return this.http.post<Eps>(this.basePath + 'eps', nuevoEps);
  }

  editarEps(codigoEps: number, descripcionEps: string) {
    return this.http.put(this.basePath + 'eps/' + codigoEps, { descripcionEps: descripcionEps});
  }

  eliminarEps(codigoEps: number) {
    return this.http.delete(this.basePath + 'eps/' + codigoEps);
  }

  /* Parentescos */

  obtenerParentescos() : Observable<Parentesco[]> {
    return this.http.get<Parentesco[]>(this.basePath + 'parentescos');
  }

  obtenerParentesco(codigoParentesco: number): Observable<Parentesco> {
    return this.http.get<Parentesco>(this.basePath + 'parentesco/' + codigoParentesco);
  }

  agregarParentesco(nuevoParentesco: Parentesco) {
    return this.http.post<Parentesco>(this.basePath + 'parentesco', nuevoParentesco);
  }

  editarParentesco(codigoParentesco: number, descripcionParentesco: string) {
    return this.http.put(this.basePath + 'parentesco/' + codigoParentesco, { descripcionParentesco: descripcionParentesco});
  }

  eliminarParentesco(codigoParentesco: number) {
    return this.http.delete(this.basePath + 'parentesco/' + codigoParentesco);
  }

   /* Frecuencias */

   obtenerFrecuencias() : Observable<Frecuencia[]> {
    return this.http.get<Frecuencia[]>(this.basePath + 'frecuencias');
  }

  obtenerFrecuencia(codigoFrecuencia: number): Observable<Frecuencia> {
    return this.http.get<Frecuencia>(this.basePath + 'frecuencia/' + codigoFrecuencia);
  }

  agregarFrecuencia(nuevoFrecuencia: Frecuencia) {
    return this.http.post<Frecuencia>(this.basePath + 'frecuencia', nuevoFrecuencia);
  }

  editarFrecuencia(codigoFrecuencia: number, descripcionFrecuencia: string) {
    return this.http.put(this.basePath + 'frecuencia/' + codigoFrecuencia, { descripcionFrecuencia: descripcionFrecuencia});
  }

  eliminarFrecuencia(codigoFrecuencia: number) {
    return this.http.delete(this.basePath + 'frecuencia/' + codigoFrecuencia);
  }

   /* Distancias */

   obtenerDistancias() : Observable<Distancia[]> {
    return this.http.get<Distancia[]>(this.basePath + 'distancias');
  }

  obtenerDistancia(codigoDistancia: number): Observable<Distancia> {
    return this.http.get<Distancia>(this.basePath + 'distancia/' + codigoDistancia);
  }

  agregarDistancia(nuevoDistancia: Distancia) {
    return this.http.post<Distancia>(this.basePath + 'distancia', nuevoDistancia);
  }

  editarDistancia(codigoDistancia: number, descripcionDistancia: string) {
    return this.http.put(this.basePath + 'distancia/' + codigoDistancia, { descripcionDistancia: descripcionDistancia});
  }

  eliminarDistancia(codigoDistancia: number) {
    return this.http.delete(this.basePath + 'distancia/' + codigoDistancia);
  }

  /* Entidades Educativas */

  obtenerEntidadesEducativas() : Observable<EntidadEducativa[]> {
    return this.http.get<EntidadEducativa[]>(this.basePath + 'entidadesEducativas');
  }
  obtenerEntidadEducativa(codigoEntidadEducativa: number): Observable<EntidadEducativa> {
    return this.http.get<EntidadEducativa>(this.basePath + 'entidadEducativa/' + codigoEntidadEducativa);
  }
  agregarEntidadEducativa(nuevoEntidadEducativa: EntidadEducativa) {
    return this.http.post<EntidadEducativa>(this.basePath + 'entidadEducativa', nuevoEntidadEducativa);
  }
  editarEntidadEducativa(codigoEntidadEducativa: number, nombreEntidadEducativa: string) {
    return this.http.put(this.basePath + 'entidadEducativa/' + codigoEntidadEducativa, { nombreEntidadEducativa: nombreEntidadEducativa});
  }
  eliminarEntidadEducativa(codigoEntidadEducativa: number) {
    return this.http.delete(this.basePath + 'entidadEducativa/' + codigoEntidadEducativa);
  }
  
  /* Jornadas */

  obtenerJornadas() : Observable<Jornada[]> {
    return this.http.get<Jornada[]>(this.basePath + 'jornadas');
  }
  obtenerJornada(codigoJornada: number): Observable<Jornada> {
    return this.http.get<Jornada>(this.basePath + 'jornada/' + codigoJornada);
  }
  agregarJornada(nuevoJornada: Jornada) {
    return this.http.post<Jornada>(this.basePath + 'jornada', nuevoJornada);
  }
  editarJornada(codigoJornada: number, descripcionJornada: string) {
    return this.http.put(this.basePath + 'jornada/' + codigoJornada, { descripcionJornada: descripcionJornada});
  }
  eliminarJornada(codigoJornada: number) {
    return this.http.delete(this.basePath + 'jornada/' + codigoJornada);
  }

    /* Cargos */

    obtenerCargos() : Observable<Cargo[]> {
      return this.http.get<Cargo[]>(this.basePath + 'cargos');
    }  
    obtenerCargo(codigoCargo: number): Observable<Cargo> {
      return this.http.get<Cargo>(this.basePath + 'cargo/' + codigoCargo);
    }  
    agregarCargo(nuevoCargo: Cargo) {
      return this.http.post<Cargo>(this.basePath + 'cargo', nuevoCargo);
    }  
    editarCargo(codigoCargo: number, descripcionCargo: string) {
      return this.http.put(this.basePath + 'cargo/' + codigoCargo, { descripcionCargo: descripcionCargo});
    }  
    eliminarCargo(codigoCargo: number) {
      return this.http.delete(this.basePath + 'cargo/' + codigoCargo);
    }

  /* Grados */

  obtenerGrados() : Observable<Grado[]> {
    return this.http.get<Grado[]>(this.basePath + 'grados');
  }

  obtenerGrado(codigoGrado: number): Observable<Grado> {
    return this.http.get<Grado>(this.basePath + 'grado/' + codigoGrado);
  }

  agregarGrado(nuevoGrado: Grado) {
    return this.http.post<Grado>(this.basePath + 'grado', nuevoGrado);
  }

  editarGrado(codigoGrado: number, descripcionGrado: string) {
    return this.http.put(this.basePath + 'grado/' + codigoGrado, { descripcionGrado: descripcionGrado});
  }

  eliminarGrado(codigoGrado: number) {
    return this.http.delete(this.basePath + 'grado/' + codigoGrado);
  }
      

  /* Dependencias */

  obtenerDependencias() : Observable<Dependencia[]> {
    return this.http.get<Dependencia[]>(this.basePath + 'dependencias');
  }

  obtenerDependencia(codigoDependencia: number): Observable<Dependencia> {
    return this.http.get<Dependencia>(this.basePath + 'dependencia/' + codigoDependencia);
  }

  agregarDependencia(nuevoDependencia: Grado) {
    return this.http.post<Grado>(this.basePath + 'dependencia', nuevoDependencia);
  }

  editarDependencia(codigoDependencia: number, descripcionDependencia: string) {
    return this.http.put(this.basePath + 'dependencia/' + codigoDependencia, { descripcionDependencia: descripcionDependencia});
  }

  eliminarDependencia(codigoDependencia: number) {
    return this.http.delete(this.basePath + 'dependencia/' + codigoDependencia);
  }

   /* Sedes */

   obtenerSedes() : Observable<Sede[]> {
    return this.http.get<Sede[]>(this.basePath + 'sedes');
  }

  obtenerSede(codigoSede: number): Observable<Sede> {
    return this.http.get<Sede>(this.basePath + 'sede/' + codigoSede);
  }

  agregarSede(nuevoSede: Sede) {
    return this.http.post<Sede>(this.basePath + 'sede', nuevoSede);
  }

  editarSede(codigoSede: number, descripcionSede: string) {
    return this.http.put(this.basePath + 'sede/' + codigoSede, { descripcionSede: descripcionSede});
  }

  eliminarSede(codigoSede: number) {
    return this.http.delete(this.basePath + 'sede/' + codigoSede);
  }
}