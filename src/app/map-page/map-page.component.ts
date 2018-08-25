import {Component, OnInit} from '@angular/core';
import {GetAllTrucksService} from '../services/get-all-trucks.service';
import {truck} from '../Models/truck.model';
import {TrackingInfo} from '../Models/trackingInfo.model';

import {AuthService} from '../services/auth.service';
import {WebSocketService} from '../services/web-socket.service';


const now = new Date();

@Component({
  selector: 'app-map-page',
  templateUrl: './map-page.component.html',
  styleUrls: ['./map-page.component.css']
})
export class MapPageComponent implements OnInit {

  latD: number = 36.45102486;
  lngD: number = 10.73452199;
  carID='';

  trucks: truck[];
  trucksHistory: truck[];
  LiveTrucks:truck[]=[];
  LiveInfoEntity:TrackingInfo=null;
  stop=false;


  LiveSelectedTruck:number=-1;
  IndexSelected:number=-1;
  FetchedInfo;
  inStreaming=false;


  fromDate={year: now.getFullYear(), month: now.getMonth() + 1, day: now.getDate()};
  fromTime={hour: now.getHours(), minute: now.getMinutes()};
  frommeridian= true;
  toDate={year: now.getFullYear(), month: now.getMonth() + 1, day: now.getDate()};
  toTime={hour: now.getHours(), minute: now.getMinutes()};
  tomeridian= true;

  constructor(private getAllTrucksService:GetAllTrucksService,
              private auth:AuthService,
              private websocket:WebSocketService
              ) {}

  ngOnInit() {
    this.getallTrucks();
  }

  fxNb(nb){
    if(nb<9) return ("0"+nb);
    else return nb;
  }
  pullTruck(){
    if(this.IndexSelected!=-1) {
      this.trucks.push(this.LiveTrucks[this.IndexSelected]);
      this.LiveTrucks.splice(this.IndexSelected, 1);
      this.IndexSelected=-1;
    }
  }

  pushTruck(){
    if(this.LiveSelectedTruck!=-1){
      this.LiveTrucks.push(this.trucks[this.LiveSelectedTruck]);
      this.trucks.splice(this.LiveSelectedTruck,1);
      this.LiveSelectedTruck=-1;
    }

  }
  clearAll(){
    this.FetchedInfo=[];
    this.LiveInfoEntity=null;
  }

  getallTrucks(){
    this.getAllTrucksService.getAllTrucks().subscribe( data => this.trucks=data);
    this.getAllTrucksService.getAllTrucks().subscribe( data => this.trucksHistory= data);
  }

  getTrackingDataBySerialNumberAndTimeRange(){
    this.clearAll();
    let Info='';
    if(this.carID != ''){
      let fromD=this.fromDate.year+"-"+this.fxNb(this.fromDate.month)+"-"+this.fxNb(this.fromDate.day)+"T"+this.fxNb(this.fromTime.hour)+":"+this.fxNb(this.fromTime.minute)+"Z";
      let toD=this.fromDate.year+"-"+this.fxNb(this.toDate.month)+"-"+this.fxNb(this.toDate.day)+"T"+this.fxNb(this.toTime.hour)+":"+this.fxNb(this.toTime.minute)+"Z";
      Info=this.carID+"/"+fromD+"/"+toD;
      this.getAllTrucksService.getTrackingDataBySerialNumberAndTimeRange(Info).subscribe(data=>this.FetchedInfo=data,err=>alert("Error while fetching Data! Please Contact the WebMaster aymen.bensalem@enis.tn"), ()=>{if(this.FetchedInfo.length==0) alert("No data exist between these two dates! "+fromD+ " --- "+toD)});
    }
    else {
      alert("Please Choose a Vehicle before start Trucking!");
    }
  }
  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }
  stopStreaming(){
    this.stop=true;
    this.websocket.disconnect();
    this.delay(2000).then(()=>{this.stop=false;this.inStreaming=false;});
  }

 repeatConnection(){
    this.connect();
    if(!this.stop)
      this.delay(1600).then(
        ()=>this.repeatConnection()
      )
  }


  connect(){
    if(this.LiveTrucks.length) {

      let username = this.auth.getUserName();

      if(!this.websocket.isConnected() && !this.stop ){ this.websocket.connect(username); this.inStreaming = true;}
        this.delay(800).then(
          () => {
            if(!this.stop){

              this.websocket.sendMsg(this.LiveTrucks, username);
              this.clearAll();
              this.LiveInfoEntity = this.websocket.getLiveInfoEntity();
              console.log(this.LiveInfoEntity);
            }
          }
        );

    }else
      alert("Please Choose a Vehicle before start Trucking!")
  }

}
