import { Component, OnInit } from '@angular/core';
import {RoadCreatorService} from '../services/road-creator.service';

@Component({
  selector: 'app-map-page',
  templateUrl: './map-page.component.html',
  styleUrls: ['./map-page.component.css']
})
export class MapPageComponent implements OnInit {

  latD: number = 51.678418;
  lngD: number = 7.809007;
  points=[];

  iconUrl="assets/icones/circle.png";


  constructor(private roadCreator: RoadCreatorService) {
    this.points=this.roadCreator.points;
  }

  ngOnInit() {
      console.log(this.points);
      for(let point of this.points){
        console.log(point.lat);
    }
  }




  onChoseLocation(event){
    this.latD=event.coords.lat;
    this.lngD=event.coords.lng;
  }



}
