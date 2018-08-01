import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-main-dashboard-navbar',
  templateUrl: './main-dashboard-navbar.component.html',
  styleUrls: ['./main-dashboard-navbar.component.css']
})
export class MainDashboardNavbarComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit() {
    this._router.navigate(['./dashboard/map'])
  }

}
