import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-popup-home',
  templateUrl: './popup-home.component.html',
  styleUrls: ['./popup-home.component.css']
})
export class PopupHomeComponent implements OnInit {
  openModel=false
  constructor() { }

  ngOnInit(): void {
  }
  onOpen(){
    this.openModel=!this.openModel
  }
}
