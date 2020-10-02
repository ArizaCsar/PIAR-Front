import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pais } from '../models/pais.model';

@Injectable({
  providedIn: 'root'
})
export class AdministracionService {

  private basePath = 'http://127.0.0.1:8000/api/';

  constructor(private http: HttpClient) { }

  obtenerPaises() : Observable<Pais[]> {
    return this.http.get<Pais[]>(this.basePath + 'paises');
  }
}
