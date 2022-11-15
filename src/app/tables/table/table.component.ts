import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  data=[
    {name:'Soykan',age:27,job:'FrontEnd Developer',employed:'Hayır'},
    {name:'Fulya',age:29,job:'İnsan .kaynakları',employed:'Hayır'},
    {name:'Furkan',age:27,job:'Data Analyst',employed:'Evet'}
  ]
  headers=[
    {key:'employed',label:'İşinden Memnun mu?'},
    {key:'name',label:'İsim'},
    {key:'age',label:'Yaş'},
    {key:'job',label:'İş'}
  ]
}
