import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-to-top-btn',
  templateUrl: './to-top-btn.component.html',
  styleUrls: ['./to-top-btn.component.css']
})
export class ToTopBtnComponent implements OnInit {
  scroll(elelem) {
    elelem.scrollIntoView();
  }
  constructor() { }

  ngOnInit() {
  }

}
