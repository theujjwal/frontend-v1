import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { EmployeeService } from 'src/app/employee.service';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-createoffer',
  templateUrl: './createoffer.component.html',
  styleUrls: ['./createoffer.component.css']
})
export class CreateofferComponent implements OnInit {
  public offer: Product;
  public model: any;
  constructor(private empServise: EmployeeService, private productService: ProductService, private route: Router) { }

  ngOnInit(): void {
    // this.offer = new Product(0, "26-07-2021", null, null, [], null, true, null, 0, null);
    this.model = {
      details: "",
      offerCategory: "",
      price: 0
    }
  }
  addOffer() {
    if (this.empServise.isLoggedIn()) {
      // console.log(this.offer)
      this.offer = new Product(0, "26-07-2021", null, null, [], null, true, null, 0, null);

      var author = this.empServise.getEmpId();
      // if (author == null) {
      // this.offer.authorId = 'subsa';
      // } else {
      this.offer.authorId = author;
      // }
      var today = new Date();
      var todayDateString = '';
      todayDateString += (today.getDate() <= 9) ? `0${today.getDate()}` : `${today.getDate()}`;
      todayDateString += (today.getMonth() < 9) ? `-0${today.getMonth() + 1}` : `-${today.getMonth() + 1}`;
      todayDateString += `-${today.getUTCFullYear()}`;
      this.offer.details = this.model.details;
      this.offer.createdAt = todayDateString;
      this.offer.price = this.model.price;
      this.offer.offerCategory = this.model.offerCategory;

      console.log("adding" + JSON.stringify(this.offer));

      this.productService.postNewProduct(this.offer).subscribe((resp) => {
        alert('offer added');
        this.route.navigate(['/shop']);
      }, (err) => {
        alert('offer not added');
      })
    }
  }

}
