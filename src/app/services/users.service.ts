import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './../models/user.interface';
import { Pais } from '../models/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  API = 'https://api.github.com';
  API2 = 'https://restcountries.eu/rest/v2/name';

  constructor(private http: HttpClient) { }

  getAll():Observable<User[]>{
    return this.http.get<User[]>(`${this.API}/users`)
  }

  getAllwithParams(name?):Observable<Pais[]>{
    return ( name  === 'España' )
      ? this.http.get<Pais[]>(`${this.API2}/spain`)
      : this.http.get<Pais[]>(`${this.API2}/united`)
  }

}
