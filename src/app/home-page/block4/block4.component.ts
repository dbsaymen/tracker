import { Component, OnInit } from '@angular/core';
declare var require;
@Component({
  selector: 'app-block4',
  templateUrl: './block4.component.html',
  styleUrls: ['./block4.component.css']
})
export class Block4Component implements OnInit {
  imgFiled1= require('./img/icon1.png')
  imgFiled2= require('./img/icon2.png')
  imgFiled3= require('./img/icon3.png')
  constructor() { }

  ngOnInit() {
  }

}
