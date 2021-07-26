import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-createoffer',
  templateUrl: './createoffer.component.html',
  styleUrls: ['./createoffer.component.css']
})
export class CreateofferComponent implements OnInit {
 public offer: Product
  constructor() { }

  ngOnInit(): void {
    this.offer=new Product(0,"26-07-2021",null,null,[],null,true,null,0,null);
  }
  addOffer(){
    console.log(this.offer)
  }

}
