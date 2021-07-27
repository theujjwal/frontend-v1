import { Component, OnInit } from '@angular/core';

import { ProductService } from 'src/app/services/product.service'
import { Product } from 'src/app/models/product';
import { EmployeeService } from 'src/app/employee.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  public productList: Product[] = []
  options = ['ALL', 'COMPUTER_ACCESORIES', 'REAL_ESTATE', 'FURNITURE', 'FOUR_WHEELER'];

  search_empId: String = '';

  constructor(private productService: ProductService, private empServ: EmployeeService) { }

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

  isLoggedIn(): Boolean {
    return this.empServ.isLoggedIn();
  }

  reload(observableResponse: Observable<any>) {
    observableResponse.subscribe((resp) => {
      this.productList = resp.body;
    }, (err) => {
      alert('error status' + err.status);
      console.warn(err);
    })
  }

  searchByCategory(category: String) {
    if (category === this.options[0]) {
      this.reload(this.productService.getProducts());
    } else {
      this.reload(this.productService.getProductsByCategory(category));
    }
  }

  searchByEmpId() {
    console.log('searching for ' + this.search_empId);
    if (this.search_empId) {
      this.reload(this.productService.getProductsByEmpId_2(this.search_empId));
    }
  }
}
