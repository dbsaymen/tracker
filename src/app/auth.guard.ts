import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private auth: AuthService,private route:Router) {
    this.auth.initService();
  }

  canActivate(): boolean {
    if(this.auth.isAuthenticated() && !this.auth.isTokenExpired())
      return true;
    else{
      this.auth.logout();
      this.route.navigateByUrl('/login');
      return false;
    }
  }

}
