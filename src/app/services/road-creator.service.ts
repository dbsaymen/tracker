import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RoadCreatorService {

  road=[
    {origin:{lat:'',lng:''},dest:{lat:'',lng:''}},
    {origin:{lat:'',lng:''},dest:{lat:'',lng:''}},
  ];
  points=[
    {lat:51.678418, lng:7.809007},
    {lat:51.680668181552406, lng:7.812202388905121},
    {lat:51.67984293936449, lng:7.813275168058908},
    {lat:51.67922146595278, lng:7.813560810559807},
    {lat:51.677571600859686, lng:7.811326530450401},
    {lat:51.67804062104356, lng:7.81023487138134},
    {lat:51.67804125906352, lng:7.809849300499309},
    {lat:51.67801551115156, lng:7.809665482313221},
  ];
  constructor() { }
}
