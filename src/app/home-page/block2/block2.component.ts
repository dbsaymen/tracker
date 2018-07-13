import { Component, OnInit } from '@angular/core';
declare var require;
@Component({
  selector: 'app-block2',
  templateUrl: './block2.component.html',
  styleUrls: ['./block2.component.css']
})
export class Block2Component implements OnInit {
  imgTruck=require("./img/truck.png");
  constructor() { }

  ngOnInit() {
  }

}
