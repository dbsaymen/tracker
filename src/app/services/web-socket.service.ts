import { Injectable } from '@angular/core';
import {TrackingInfo} from '../Models/trackingInfo.model';
import * as Stomp from 'stompjs';

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {

  constructor() { }
  name: string;
  ws: any;
  LiveInfoEntity:TrackingInfo[]=[];
  Connected=false;
  isConnected(){
    return this.Connected;
  }
  getLiveInfoEntity(){
    return this.LiveInfoEntity;
  }
  connect(username:string) {
    let LiveInfo;
    let socket = new WebSocket("ws://localhost:8080/vehicle");
    this.ws = Stomp.over(socket);
    this.ws
    this.Connected=true;
    let that = this;
    this.ws.connect({}, function(frame) {
      that.ws.subscribe("/topic/reply/"+username, message => {
        LiveInfo=message.body.split(",");
        for(let v of LiveInfo){
          let inf=v.split("*");
          let entity:TrackingInfo= new TrackingInfo();
          entity.carSerialNumber=inf[0];
          entity.lat=+inf[1];
          entity.lang=+inf[2]
          that.LiveInfoEntity.push(entity);
        }
        that.LiveInfoEntity.pop();
      });

    }, function(error) {

    });
  }

  disconnect() {
    if (this.ws != null) {
      this.Connected=false;
      this.ws.ws.close();
    }
    console.log("Disconnected");
  }

  sendMsg(LiveTrucks,userName) {
    if(LiveTrucks.length){
      let LiveInfoEntity:TrackingInfo[]=[];
      let Serials:string="";
      console.log("Seriels:"+Serials);
      for(let truck of LiveTrucks)
        Serials+=truck.carSerialNumber+"/";
      console.log(Serials);
      this.ws.send("/app/message/"+userName, {},Serials );
    }
  }


}
