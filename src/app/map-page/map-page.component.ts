import { Component, OnInit } from '@angular/core';
var google;
@Component({
  selector: 'app-map-page',
  templateUrl: './map-page.component.html',
  styleUrls: ['./map-page.component.css']
})
export class MapPageComponent implements OnInit {
  title: string = 'My first AGM project';
  lat: number = 51.678418;
  lng: number = 7.809007;
  iconUrl="assets/icones/location.svg";
  constructor() { }

  ngOnInit() {
  }
  onChoseLocation(event){
    this.lat=event.coords.lat;
    this.lng=event.coords.lng;


  }

}
