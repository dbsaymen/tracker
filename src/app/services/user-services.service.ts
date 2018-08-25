import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthService} from './auth.service';
import {Observable} from 'rxjs';
import {truck} from '../Models/truck.model';
import {User} from '../Models/User';
import {and} from '@angular/router/src/utils/collection';

@Injectable({
  providedIn: 'root'
})
export class UserServicesService {
  constructor(private http: HttpClient,private auth:AuthService) { }

  url="https://arcane-mountain-40535.herokuapp.com";

  GetUserInfo(username): Observable<User>{
    return this.http.get<User>(this.url+"/user/info",{headers:new HttpHeaders({'Authorization':this.auth.getToken()})});
  }

  updateUserInfo(info){
      return this.http.post<User>(this.url+"/user/update",info,{headers:new HttpHeaders({'Authorization':this.auth.getToken()})});
  }
}
