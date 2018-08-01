import { Component, OnInit } from '@angular/core';
import {RoadCreatorService} from '../services/road-creator.service';
import * as Stomp from 'stompjs';
import $ from 'jquery';


@Component({
  selector: 'app-map-page',
  templateUrl: './map-page.component.html',
  styleUrls: ['./map-page.component.css']
})
export class MapPageComponent implements OnInit {

  latD: number = 36.45102486;
  lngD: number = 10.73452199;
  points=[];



  iconUrl="assets/icones/circle.png";


  constructor(private roadCreator: RoadCreatorService) {
    //this.points=this.roadCreator.points;
  }

  ngOnInit() {
    this.connect();
  }

  name: string;
  ws: any;

  connect() {
    let socket = new WebSocket("ws://localhost:8080/vehicle");
    this.ws = Stomp.over(socket);
    let that = this;
    this.ws.connect({}, function(frame) {
      that.ws.subscribe("/topic/reply", function(message) {
        var splitted = message.body.split(":");
        var coords = [+splitted[0],+splitted[1]]
        that.points.push(coords);
      });
    }, function(error) {
      console.log("STOMP error " + error);
    });
  }

  disconnect() {
    if (this.ws != null) {
      this.ws.ws.close();
    }
    console.log("Disconnected");
  }
  sendMsg() {
    this.ws.send("/app/message", {}, "GetCars");
  }
  clear(){
    this.points=[];
  }

}
