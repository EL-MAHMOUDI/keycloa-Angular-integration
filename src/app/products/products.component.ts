import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products:any;

  constructor() { }

  ngOnInit(): void {
    this.products = [
      {id:1, name:'Computer HP 54', price:7800},
      {id:2, name:'Printer LX ER', price:1200},
      {id:3, name:'Sart Phone Samsung S20', price:12000}
    ] 
  }

}
