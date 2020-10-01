import {Injectable} from "@angular/core";
import { Router } from '@angular/router';
import {Session} from "../models/session.model";
import { Tercero } from '../models/tercero.model';

@Injectable()
export class StorageService {

  private sessionStorageService;
  private currentSession : Session = null;

  constructor(private router: Router) {
    this.sessionStorageService = sessionStorage;
    this.currentSession = this.loadSessionData();
  }

  setCurrentSession(session: Session): void {
    this.currentSession = session;
    this.sessionStorageService.setItem('currentUser', JSON.stringify(session));
  }

  loadSessionData(): Session{
    var sessionStr = this.sessionStorageService.getItem('currentUser');
    return (sessionStr) ? <Session> JSON.parse(sessionStr) : null;
  }

  getCurrentSession(): Session {
    return this.currentSession;
  }

  removeCurrentSession(): void {
    this.sessionStorageService.removeItem('currentUser');
    this.currentSession = null;
  }

  getCurrentUser(): Tercero {
    var session: Session = this.getCurrentSession();
    return (session && session.user) ? session.user : null;
  };

  isAuthenticated(): boolean {
    return (this.getCurrentToken() != null) ? true : false;
  };

  getCurrentToken(): string {
    var session = this.getCurrentSession();
    return (session && session.token) ? session.token : null;
  };

  logout(): void{
    this.removeCurrentSession();
    this.router.navigate(['/login']);
  }

}
