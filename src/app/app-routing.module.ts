import { Host, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { AuthorizatedGuard } from './core/guards/authorizated.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from "./login/login.component";
import { Plantilla1Component } from './plantillas/plantilla1/plantilla1.component';
import { Plantilla2Component } from './plantillas/plantilla2/plantilla2.component';
import { Plantilla3Component } from './plantillas/plantilla3/plantilla3.component';


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
  { path: "plantilla3", component: Plantilla3Component, pathMatch: "full", canActivate: [ AuthorizatedGuard ] }
];
export const routing = RouterModule.forRoot(appRoutes);
