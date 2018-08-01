import { Component, OnInit,HostListener } from '@angular/core';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-navbarr',
  templateUrl: './navbarr.component.html',
  styleUrls: ['./navbarr.component.css']
})
export class NavbarrComponent implements OnInit {
  innerWidth=window.innerWidth;
  sideMenuActive=false;
  topMenuActive=false;
  constructor(public auth: AuthService) {
    auth.handleAuthentication();
  }

  ngOnInit() {
    this.onResize();
  }

  @HostListener('window:resize',['$event'])
  onResize(){
    this.innerWidth=window.innerWidth;
    this.autoToggleNavbar();
  }
  toggleNavbar(){
    this.sideMenuActive=!this.sideMenuActive;
  }
  autoToggleNavbar(){
    if(this.innerWidth<1005){
      this.topMenuActive=false;
    }
    else{
      this.topMenuActive=true;
    }
    this.sideMenuActive=false;
  }
  toggleSideNavbar(){
    this.sideMenuActive=!this.sideMenuActive;
  }



}
