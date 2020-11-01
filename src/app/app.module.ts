import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule, routing } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';


import { AuthenticationService } from './login/shared/authentication.service';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { StorageService } from './services/storage.service';
import { PlantillaComponent } from './plantilla/plantilla.component';
import { AuthorizatedGuard } from './core/guards/authorizated.guard';
import { Plantilla1Component } from './plantillas/plantilla1/plantilla1.component';
import { Plantilla2Component } from './plantillas/plantilla2/plantilla2.component';
import { Plantilla3Component } from './plantillas/plantilla3/plantilla3.component';
import { PaisesComponent } from './administracion/paises/paises.component';
import { DepartamentosComponent } from './administracion/departamentos/departamentos.component';
import { CiudadesComponent } from './administracion/ciudades/ciudades.component';
import { VentanaConfirmacionComponent } from './core/ventana-confirmacion/ventana-confirmacion.component';
import { VentanaCrearEditarPaisComponent } from './administracion/paises/ventana-crear-editar-pais/ventana-crear-editar-pais.component';
import { VentanaCrearEditarDepartamentoComponent } from './administracion/departamentos/ventana-crear-editar-departamento/ventana-crear-editar-departamento.component';
import { VentanaCrearEditarCiudadComponent } from './administracion/ciudades/ventana-crear-editar-ciudad/ventana-crear-editar-ciudad.component';
import { TiposIdentificacionComponent } from './administracion/tipos-identificacion/tipos-identificacion.component';
import { VentanaCrearEditarTiposIdentificacionComponent } from './administracion/tipos-identificacion/ventana-crear-editar-tipos-identificacion/ventana-crear-editar-tipos-identificacion.component';
import { GruposEtnicosComponent } from './administracion/grupos-etnicos/grupos-etnicos.component';
import { VentanaCrearEditarGrupoEtnicoComponent } from './administracion/grupos-etnicos/ventana-crear-editar-grupo-etnico/ventana-crear-editar-grupo-etnico.component';
import { TiposDiscapacidadesComponent } from './administracion/tipos-discapacidades/tipos-discapacidades.component';
import { VentanaCrearEditarTipoDiscapacidadComponent } from './administracion/tipos-discapacidades/ventana-crear-editar-tipo-discapacidad/ventana-crear-editar-tipo-discapacidad.component';
import { DiscapacidadesComponent } from './administracion/discapacidades/discapacidades.component';
import { VentanaCrearEditarDiscapacidadComponent } from './administracion/discapacidades/ventana-crear-editar-discapacidad/ventana-crear-editar-discapacidad.component';
import { OcupacionesComponent } from './administracion/ocupaciones/ocupaciones.component';
import { VentanaCrearEditarOcupacionComponent } from './administracion/ocupaciones/ventana-crear-editar-ocupacion/ventana-crear-editar-ocupacion.component';
import { MateriasComponent } from './administracion/materias/materias.component';
import { VentanaCrearEditarMateriaComponent } from './administracion/materias/ventana-crear-editar-materia/ventana-crear-editar-materia.component';
import { TiposTelefonosComponent } from './administracion/tipos-telefonos/tipos-telefonos.component';
import { VentanaCrearEditarTipoTelefonoComponent } from './administracion/tipos-telefonos/ventana-crear-editar-tipo-telefono/ventana-crear-editar-tipo-telefono.component';
import { EpsComponent } from './administracion/eps/eps.component';
import { VentanaCrearEditarEpsComponent } from './administracion/eps/ventana-crear-editar-eps/ventana-crear-editar-eps.component';
import { ParentescosComponent } from './administracion/parentescos/parentescos.component';
import { VentanaCrearEditarParentescoComponent } from './administracion/parentescos/ventana-crear-editar-parentesco/ventana-crear-editar-parentesco.component';
import { FrecuenciasComponent } from './administracion/frecuencias/frecuencias.component';
import { VentanaCrearEditarFrecuenciaComponent } from './administracion/frecuencias/ventana-crear-editar-frecuencia/ventana-crear-editar-frecuencia.component';
import { DistanciasComponent } from './administracion/distancias/distancias.component';
import { VentanaCrearEditarDistanciaComponent } from './administracion/distancias/ventana-crear-editar-distancia/ventana-crear-editar-distancia.component';
import { EntidadesEducativasComponent } from './administracion/entidades-educativas/entidades-educativas.component';
import { VentanaCrearEditarEntidadEducativaComponent } from './administracion/entidades-educativas/ventana-crear-editar-entidad-educativa/ventana-crear-editar-entidad-educativa.component';
import { JornadasComponent } from './administracion/jornadas/jornadas.component';
import { VentanaCrearEditarJornadaComponent } from './administracion/jornadas/ventana-crear-editar-jornada/ventana-crear-editar-jornada.component';
import { CargosComponent } from './administracion/cargos/cargos.component';
import { VentanaCrearEditarCargoComponent } from './administracion/cargos/ventana-crear-editar-cargo/ventana-crear-editar-cargo.component';
import { GradosComponent } from './administracion/grados/grados.component';
import { VentanaCrearEditarGradoComponent } from './administracion/grados/ventana-crear-editar-grado/ventana-crear-editar-grado.component';
import { DependenciasComponent } from './administracion/dependencias/dependencias.component';
import { VentanaCrearEditarDependenciaComponent } from './administracion/dependencias/ventana-crear-editar-dependencia/ventana-crear-editar-dependencia.component';
import { SedesComponent } from './administracion/sedes/sedes.component';
import { VentanaCrearEditarSedeComponent } from './administracion/sedes/ventana-crear-editar-sede/ventana-crear-editar-sede.component';

/* >>>>>>> 3298c104b0627e0004a8ac93fb357898e65aba6f */




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    PlantillaComponent,
    Plantilla1Component,
    Plantilla2Component,
    Plantilla3Component,
    PaisesComponent,
    DepartamentosComponent,
    CiudadesComponent,
    VentanaConfirmacionComponent,
    VentanaCrearEditarPaisComponent,
    VentanaCrearEditarDepartamentoComponent,
    VentanaCrearEditarCiudadComponent,
    TiposIdentificacionComponent,
    VentanaCrearEditarTiposIdentificacionComponent,
    GruposEtnicosComponent,
    VentanaCrearEditarGrupoEtnicoComponent,
    TiposDiscapacidadesComponent,
    VentanaCrearEditarTipoDiscapacidadComponent,
    DiscapacidadesComponent,
    VentanaCrearEditarDiscapacidadComponent,
    OcupacionesComponent,
    VentanaCrearEditarOcupacionComponent,
    MateriasComponent,
    VentanaCrearEditarMateriaComponent,
    TiposTelefonosComponent,
    VentanaCrearEditarTipoTelefonoComponent,
    EpsComponent,
    VentanaCrearEditarEpsComponent,
    ParentescosComponent,
    VentanaCrearEditarParentescoComponent,
    FrecuenciasComponent,
    VentanaCrearEditarFrecuenciaComponent,
    DistanciasComponent,
    VentanaCrearEditarDistanciaComponent,
    EntidadesEducativasComponent,
    VentanaCrearEditarEntidadEducativaComponent,
    JornadasComponent,
    VentanaCrearEditarJornadaComponent,
    CargosComponent,
    VentanaCrearEditarCargoComponent,
    GradosComponent,
    VentanaCrearEditarGradoComponent,
    DependenciasComponent,
    VentanaCrearEditarDependenciaComponent,
    SedesComponent,
    VentanaCrearEditarSedeComponent
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    routing,
    BrowserAnimationsModule,

    MatToolbarModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSnackBarModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSidenavModule,
    MatListModule,
    MatTableModule,
    MatDialogModule,
    MatSelectModule,
    MatRadioModule,
  ],
  providers: [AuthorizatedGuard, AuthenticationService, StorageService],
  entryComponents: [VentanaConfirmacionComponent, VentanaCrearEditarPaisComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }



