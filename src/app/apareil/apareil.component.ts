import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-apareil',
  templateUrl: './apareil.component.html',
  styleUrls: ['./apareil.component.css']
})
export class ApareilComponent implements OnInit {

  appareilName = 'Machine a lave';
  appareilStatus = 'éteint'

  constructor() { }

  ngOnInit() {
  }
  getStatus() {
    return this.appareilStatus;
  }

}
