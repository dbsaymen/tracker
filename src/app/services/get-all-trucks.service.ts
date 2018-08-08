import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';
import {truck} from '../Models/truck.model';
import {AuthService} from './auth.service';
import {TrackingInfo} from '../Models/trackingInfo.model';

@Injectable({
  providedIn: 'root'
})
export class GetAllTrucksService {

  constructor(private http: HttpClient,private auth:AuthService) { }

  getAllTrucks(): Observable<truck[]>{
    return this.http.get<truck[]>("http://localhost:8080/vehicle/all",{headers:new HttpHeaders({'Authorization':this.auth.getToken()})});
  }
  getTruckbySerialNumber(serial): Observable<truck>{
    return this.http.post<truck>("http://localhost:8080/GetVahicle",serial,{headers:new HttpHeaders({'Authorization':this.auth.getToken()})});
  }
  getTrackingDataBySerialNumberAndTimeRange(Info): Observable<TrackingInfo>{
    return this.http.post<TrackingInfo>("http://localhost:8080/GetCarTrackingbyDate",Info,{headers:new HttpHeaders({'Authorization':this.auth.getToken()})});
  }

}
