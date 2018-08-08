import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {JwtHelperService} from '@auth0/angular-jwt';


@Injectable()
export class AuthService {

  private host:string="http://localhost:8080";
  private jwtToken=null;
  private roles=[];
  private Auth=true;
  constructor(private http:HttpClient) {}

  initService(){
    this.loadToken();
    if(this.jwtToken==null)
      this.Auth=false;
    else
      this.http.get(this.host+"/auth",{headers:new HttpHeaders({'Authorization':this.jwtToken})}).subscribe(resp=>{},err=>this.Auth=false);
  }
  getToken(){
    if(this.jwtToken==null) this.loadToken();
    return this.jwtToken;
  }
  login(user) {
    return this.http.post(this.host+"/login",user,{observe:'response'});
  }
  saveToken(jwtToken){
    localStorage.setItem('token',jwtToken);
    this.decodeToken(jwtToken);
    this.Auth=true;
  }
  decodeToken(jwtToken){
    let jwtHelper=new JwtHelperService();
    this.roles=jwtHelper.decodeToken(jwtToken).roles;
  }

  getUserName(){
    let jwtHelper=new JwtHelperService();
    return jwtHelper.decodeToken(this.jwtToken).sub;
  }

  loadToken(){
    this.jwtToken=localStorage.getItem('token');

  }

  logout(){
    this.jwtToken=null;
    this.roles=[];
    this.Auth=false;
    localStorage.removeItem('token');
  }

  hasRole(msg){
    if(this.jwtToken)
      this.decodeToken(this.jwtToken);
    for (let role of this.roles){
      if(role.authority===msg) return true;
    }
    return false;
  }

  isAuthenticated():boolean{
    return this.Auth;
  }
}
