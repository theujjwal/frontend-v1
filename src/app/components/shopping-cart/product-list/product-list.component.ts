import { Component, OnInit } from '@angular/core';

import { ProductService } from 'src/app/services/product.service'
import { Product } from 'src/app/models/product';
import { EmployeeService } from 'src/app/employee.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productList: Product[] = []

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.getProducts().subscribe(
      (resp) => {
        this.productList = resp.body;
        console.log("resp" + resp.status);
      }, (err) => {
        alert('can\'t fetch offers right now');
      }
    )
  }
}
