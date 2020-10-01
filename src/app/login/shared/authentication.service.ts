import { Injectable } from "@angular/core";
/* import {Http, Response} from "@angular/common/http"; */
import { Observable } from "rxjs";
import { LoginObject } from "./login-object.model";
import { Session } from "../../models/session.model";
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable()
export class AuthenticationService {

  constructor(private http: HttpClient) { }

  private basePath = 'http://127.0.0.1:8000/api/';

  public login(loginObj: LoginObject): Observable<Session> {
    return this.http.post<Session>(this.basePath + 'login', loginObj);
  }

  logout(): Observable<boolean> {
    return this.http.post<boolean>(this.basePath + 'logout', {});
  }
}
