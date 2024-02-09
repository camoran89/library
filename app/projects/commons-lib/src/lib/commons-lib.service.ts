import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { User } from './models/user';

@Injectable({
  providedIn: 'root'
})
export class CommonsLibService {

  private readonly envUrl: string = "http://localhost:5260/"
  private readonly apiUrl: string = "api/user"

  constructor(private readonly http: HttpClient) { }

  upsert(user: User): Observable<User> {
    return this.http.post<User>(`${this.envUrl}${this.apiUrl}`, user);
  }

  findById(idType: string, idNumber: string): Observable<User> {
    return this.http.get<User>(`${this.envUrl}${this.apiUrl}/${idType}/${idNumber}`)
  }

  findByVehicleId(vehicleId: string): Observable<User> {
    return this.http.get<User>(`${this.envUrl}${this.apiUrl}/${vehicleId}`)
  }

  findAllActives(): Observable<Array<User>> {
    return this.http.get<Array<User>>(`${this.envUrl}${this.apiUrl}/active`)
  }

  findAllInactives(): Observable<Array<User>> {
    return this.http.get<Array<User>>(`${this.envUrl}${this.apiUrl}/inactive`)
  }

  findAllDistinct(): Observable<Array<User>> {
    return this.http.get<Array<User>>(`${this.envUrl}${this.apiUrl}`)
  }

  findAllCars(): Observable<Array<User>> {
    return this.http.get<Array<User>>(`${this.envUrl}${this.apiUrl}/car`)
  }

  findAllMotorcycle(): Observable<Array<User>> {
    return this.http.get<Array<User>>(`${this.envUrl}${this.apiUrl}/motorcycle`)
  }

  findAllBicycle(): Observable<Array<User>> {
    return this.http.get<Array<User>>(`${this.envUrl}${this.apiUrl}/bicycle`)
  }
}
