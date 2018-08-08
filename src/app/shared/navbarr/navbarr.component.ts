import { Component, OnInit,HostListener } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbarr',
  templateUrl: './navbarr.component.html',
  styleUrls: ['./navbarr.component.css']
})
export class NavbarrComponent implements OnInit {


  constructor(public router: Router,public auth: AuthService) {
  }

  ngOnInit() {

  }


  onLogout(){
    this.router.navigateByUrl("/");
    this.auth.logout()
  }


}
