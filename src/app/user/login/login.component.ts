import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  UserDetails;
  dataSource;
  constructor(public router: Router,public auth: AuthService) {
  }
  mode:number=0;
  ngOnInit() {
  }
  onLogin(user){
    this.auth.login(user).subscribe(
      resp=>{
        let jwtToken=resp.headers.get('Authorization');
        this.auth.saveToken(jwtToken);
        this.router.navigateByUrl('/dashboard');

      },
      err=>{
        this.mode=1;
      }
    )

  }
}
