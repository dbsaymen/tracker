import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-main-dashboard-navbar',
  templateUrl: './main-dashboard-navbar.component.html',
  styleUrls: ['./main-dashboard-navbar.component.css']
})
export class MainDashboardNavbarComponent implements OnInit {

  constructor(private _router: Router,public auth:AuthService) { }

  ngOnInit() {
    this._router.navigate(['./dashboard/map'])
  }

}
