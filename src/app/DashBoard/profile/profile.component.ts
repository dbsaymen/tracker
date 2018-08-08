import { Component, OnInit } from '@angular/core';
import {UserServicesService} from '../../services/user-services.service';
import {User} from '../../Models/User';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private userservice:UserServicesService,private auth:AuthService) { }

  user:User=new User();
  ngOnInit() {
    this.userservice.GetUserInfo(this.auth.getUserName()).subscribe(data=>this.user=data);
  }

  UpdateInfo(info){
    console.log(info);
  }

}
