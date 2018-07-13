import { Component, OnInit } from '@angular/core';
declare var require;
@Component({
  selector: 'app-block3',
  templateUrl: './block3.component.html',
  styleUrls: ['./block3.component.css']
})
export class Block3Component implements OnInit {
  imgTruck=require("./img/imageMap.png");
  constructor() { }

  ngOnInit() {
  }

}
