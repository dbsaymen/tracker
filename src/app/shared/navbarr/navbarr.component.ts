import { Component, OnInit,HostListener } from '@angular/core';

@Component({
  selector: 'app-navbarr',
  templateUrl: './navbarr.component.html',
  styleUrls: ['./navbarr.component.css']
})
export class NavbarrComponent implements OnInit {
  innerWidth=window.innerWidth;
  sideMenuActive=false;
  topMenuActive=false;
  constructor() { }

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
    if(this.innerWidth<4000){
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
