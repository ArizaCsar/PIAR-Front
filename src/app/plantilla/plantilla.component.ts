import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../login/shared/authentication.service';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-plantilla',
  templateUrl: './plantilla.component.html',
  styleUrls: ['./plantilla.component.scss']
})
export class PlantillaComponent implements OnInit {

  constructor(
    private storageService: StorageService) { }

  ngOnInit(): void {
  }

  public logout(): void{
      this.storageService.logout();
  }

}
