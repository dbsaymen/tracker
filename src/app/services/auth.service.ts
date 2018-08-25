import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {JwtHelperService} from '@auth0/angular-jwt';



@Injectable()
export class AuthService {

  private host:string="https://arcane-mountain-40535.herokuapp.com";
  private jwtToken=null;
  private roles=[];
  private Auth=true;
  constructor(private http:HttpClient) {}

  initService(){
    this.loadToken();
    if(this.jwtToken==null){
      this.Auth=false;
      localStorage.removeItem('token');
    }
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

  getTokenExpirationDate(token: string): Date {
    let jwtHelper=new JwtHelperService();
    const decoded=jwtHelper.decodeToken(token).exp;

    if (decoded === undefined) return null;

    const date = new Date(0);
    date.setUTCSeconds(decoded);
    return date;
  }

  isTokenExpired(token?: string): boolean {
    if(!token) token = this.getToken();
    if(!token) return true;

    const date = this.getTokenExpirationDate(token);
    if(date === undefined){  return false;  }
    return !(date.valueOf() > new Date().valueOf());
  }
}
