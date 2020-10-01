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


import { AuthenticationService } from './login/shared/authentication.service';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { StorageService } from './services/storage.service';
import { PlantillaComponent } from './plantilla/plantilla.component';
import { AuthorizatedGuard } from './core/guards/authorizated.guard';
import { Plantilla1Component } from './plantillas/plantilla1/plantilla1.component';
import { Plantilla2Component } from './plantillas/plantilla2/plantilla2.component';
import { Plantilla3Component } from './plantillas/plantilla3/plantilla3.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    PlantillaComponent,
    Plantilla1Component,
    Plantilla2Component,
    Plantilla3Component
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
  ],
  providers: [AuthorizatedGuard, AuthenticationService, StorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }



