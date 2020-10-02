import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../login/shared/authentication.service';
import { Session } from '../models/session.model';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-plantilla',
  templateUrl: './plantilla.component.html',
  styleUrls: ['./plantilla.component.scss']
})
export class PlantillaComponent implements OnInit {

  sessionData: Session;

  constructor(
    private storageService: StorageService) {}

  ngOnInit(): void {
    this.sessionData = this.storageService.getCurrentSession();
  }

  public logout(): void{
      this.storageService.logout();
  }

}
