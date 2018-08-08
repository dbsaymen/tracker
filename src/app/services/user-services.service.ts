import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthService} from './auth.service';
import {Observable} from 'rxjs';
import {truck} from '../Models/truck.model';
import {User} from '../Models/User';

@Injectable({
  providedIn: 'root'
})
export class UserServicesService {
  constructor(private http: HttpClient,private auth:AuthService) { }

  url="http://localhost:8080";

  GetUserInfo(username): Observable<User>{
    return this.http.get<User>(this.url+"/user/info",{headers:new HttpHeaders({'Authorization':this.auth.getToken()})});
  }

  updateUserInfo(info){
    return this.http.post<User>(this.url+"/user/update",info,{headers:new HttpHeaders({'Authorization':this.auth.getToken()})});
  }
}
