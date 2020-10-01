import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Session } from '../models/session.model';
import { Tercero } from '../models/tercero.model';
import { StorageService } from '../services/storage.service';
import { AuthenticationService } from './shared/authentication.service';
import { LoginObject } from './shared/login-object.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  title = 'MyShopApp';
  public addShopFormGroup: FormGroup;
  public loginFormGroup: FormGroup;

  constructor(private _authService: AuthenticationService,
    private storageService: StorageService,
    public _snackBar: MatSnackBar,
    private router: Router
    ) { }

  ngOnInit() {
    this.loginFormGroup = new FormGroup({
      nombreTercero : new FormControl('', [Validators.required]),
      contrasena : new FormControl('', [Validators.required])
    });

  }

  public checkError = (controlName: string, errorName: string) => {
    return this.loginFormGroup.controls[controlName].hasError(errorName);
  }

  login() {
    if (this.loginFormGroup.invalid) return false;

    this._authService.login(new LoginObject(this.loginFormGroup.getRawValue())).subscribe(
      (data: Session) => {
        this.correctLogin(data);

      },
      (response: any) => {
        this._snackBar.open(response.error.message, null, {
          duration: 3000,
          horizontalPosition: 'right',
          panelClass: 'errorMessage'
        })
      }
    );
  }

  private correctLogin(data: Session){
    this.storageService.setCurrentSession(data);
    this.router.navigate(['/home']);
  }

  cancelar() {
    this.loginFormGroup.reset();
  }
}
