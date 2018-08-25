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
  LiveInfoEntity:TrackingInfo=new TrackingInfo();
  Connected=false;
  isConnected(){
    return this.Connected;
  }
  getLiveInfoEntity(){
    return this.LiveInfoEntity;
  }
  connect(username:string) {
    let LiveInfo;
    let socket = new WebSocket("ws://arcane-mountain-40535.herokuapp.com/vehicle");

    this.ws = Stomp.over(socket);
    this.ws
    this.Connected=true;
    let that = this;
    this.ws.connect({}, function(frame) {
      that.ws.subscribe("/topic/reply/"+username, message => {
        LiveInfo=message.body;
        let inf=LiveInfo.split("*");
        that.LiveInfoEntity=new TrackingInfo();
        that.LiveInfoEntity.carSerialNumber=inf[0];
        that.LiveInfoEntity.lat=+inf[1];
        that.LiveInfoEntity.lang=+inf[2];
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
      for(let truck of LiveTrucks)
        Serials+=truck.carSerialNumber+"/";
      this.ws.send("/app/message/"+userName, {},Serials );
    }
  }


}
