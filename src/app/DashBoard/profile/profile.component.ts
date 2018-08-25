import { Component, OnInit } from '@angular/core';
import {UserServicesService} from '../../services/user-services.service';
import {User} from '../../Models/User';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  passNotmatch:boolean=false;
  ErrorPaswordLength:boolean=false;
  succUpdate:boolean=false;
  constructor(private userservice:UserServicesService,private auth:AuthService,private route:Router) { }

  user:User=new User();
  ngOnInit() {
    this.userservice.GetUserInfo(this.auth.getUserName()).subscribe(data=>{if(data != null)this.user=data; else this.route.navigateByUrl("/login")});
  }

  UpdateInfo(info){
    if(info.password != info.repassword) this.passNotmatch=true;
    else this.passNotmatch=false;
    if(!(info.password.length>7) &&(info.password.length!=0) )this.ErrorPaswordLength=true;
    else this.ErrorPaswordLength=false;
    if(((info.password.length>7) && (info.password==info.repassword))||((info.password.length==0)&&(info.repassword.length==0))){
      this.userservice.updateUserInfo(info).subscribe(data => {this.passNotmatch=false;this.ErrorPaswordLength=false;this.succUpdate=true});
    }
  }
}
