import { Host, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { AppComponent } from "./app.component";
import { HomeComponent } from './home/home.component';
import { LoginComponent } from "./login/login.component";


const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

const appRoutes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: "login", component: LoginComponent, pathMatch: "full" },
  { path: "home", component: HomeComponent, pathMatch: "full" }
];
export const routing = RouterModule.forRoot(appRoutes);
