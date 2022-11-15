import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-home',
  templateUrl: './list-home.component.html',
  styleUrls: ['./list-home.component.css']
})
export class ListHomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  data=[
    {value:20,label:'Müşteri'},
    {value:'3500 Tl',label:'Ciro'},
    {value:67,label:'Yorumlar'},
  ]
  products=[
    {
      imgUrl:'/assets/dresser.jpeg',
      title:'Şifonyer',
      description:'Her türlü eşyanızı koyacağınız şifonyer'
  },
  {
    imgUrl:'/assets/couch.jpeg',
    title:'Koltuk',
    description:'Çok Rahat Koltuk'
  }
  ]
}
