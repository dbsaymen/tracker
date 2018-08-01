import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';
import {truck} from '../Models/truck.model';

@Injectable({
  providedIn: 'root'
})
export class GetAllTrucksService {

  constructor(private http: HttpClient) { }

  getAllTrucks(): Observable<truck[]>{
    return this.http.get<truck[]>("http://localhost:8080/vehicle/all");
  }
}
