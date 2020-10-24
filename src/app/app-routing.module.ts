import { Host, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CiudadesComponent } from './administracion/ciudades/ciudades.component';
import { DepartamentosComponent } from './administracion/departamentos/departamentos.component';
import { PaisesComponent } from './administracion/paises/paises.component';
import { TiposIdentificacionComponent } from './administracion/tipos-identificacion/tipos-identificacion.component';




import { AuthorizatedGuard } from './core/guards/authorizated.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from "./login/login.component";
import { Plantilla1Component } from './plantillas/plantilla1/plantilla1.component';
import { Plantilla2Component } from './plantillas/plantilla2/plantilla2.component';
import { Plantilla3Component } from './plantillas/plantilla3/plantilla3.component';
import { from } from 'rxjs';
import { GruposEtnicosComponent } from './administracion/grupos-etnicos/grupos-etnicos.component';
import { TiposDiscapacidadesComponent } from './administracion/tipos-discapacidades/tipos-discapacidades.component';
import { DiscapacidadesComponent } from './administracion/discapacidades/discapacidades.component';
import { OcupacionesComponent } from './administracion/ocupaciones/ocupaciones.component';


const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

const appRoutes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: "login", component: LoginComponent, pathMatch: "full" },
  { path: "home", component: HomeComponent, pathMatch: "full", canActivate: [ AuthorizatedGuard ] },
  { path: "plantilla1", component: Plantilla1Component, pathMatch: "full", canActivate: [ AuthorizatedGuard ] },
  { path: "plantilla2", component: Plantilla2Component, pathMatch: "full", canActivate: [ AuthorizatedGuard ] },
  { path: "plantilla3", component: Plantilla3Component, pathMatch: "full", canActivate: [ AuthorizatedGuard ] },
  // Administracion
  { path: "administrar/paises", component: PaisesComponent, pathMatch: "full", canActivate: [ AuthorizatedGuard ] },
  { path: "administrar/departamentos", component: DepartamentosComponent, pathMatch: "full", canActivate: [ AuthorizatedGuard ] },
  { path: "administrar/ciudades", component: CiudadesComponent, pathMatch: "full", canActivate: [ AuthorizatedGuard ] },
  { path: "administrar/tipos-identificacion", component: TiposIdentificacionComponent, pathMatch: "full", canActive:[ AuthorizatedGuard]},
  { path: "administrar/grupos-etnicos", component: GruposEtnicosComponent, pathMatch: "full", canActivate:[AuthorizatedGuard]},
  { path: "administrar/tipos-discapacidades", component: TiposDiscapacidadesComponent, pathMatch: "full", canActivate:[AuthorizatedGuard]},
  { path: "administrar/discapacidades", component: DiscapacidadesComponent, pathMatch: "full", canActivate:[AuthorizatedGuard]},
  { path: "administrar/ocupaciones", component: OcupacionesComponent, pathMatch: "full", canActivate:[AuthorizatedGuard]},
];
export const routing = RouterModule.forRoot(appRoutes);
