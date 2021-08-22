import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-suppliers',
  templateUrl: './suppliers.component.html',
  styleUrls: ['./suppliers.component.css']
})
export class SuppliersComponent implements OnInit {

  suppliers: any;

  constructor() { }

  ngOnInit(): void {
    this.suppliers = [
      {id:1, name:'HP', email:'supplier@hp.com'},
      {id:2, name:'EPSON',email:'supplier@epson.com' },
      {id:3, name:'SAMSUNG', email:'supplier@samsung.com'}
    ] 
  }

}
