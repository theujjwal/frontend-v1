import { Component, OnInit, Input } from '@angular/core';
import { EmployeeService } from 'src/app/employee.service';
import { Product } from 'src/app/models/product';
import { MessengerService } from 'src/app/service/messenger.service';
import { ProductService } from 'src/app/services/product.service';
@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() productItem: Product
  constructor(private msg: MessengerService,
    private empService: EmployeeService,
    private productService: ProductService) { }

  ngOnInit(): void {
  }

  handleAddToCart() {
    this.msg.sendMsg(this.productItem)
  }

  isLoggedIn(): Boolean {
    return this.empService.isLoggedIn();
  }

  likeProduct(): void {
    this.productService.likeProduct(this.productItem.offerId).subscribe((resp) => {
      console.log(resp);
      this.productItem.likes = resp.body.likes;
    }, (err) => {
      console.warn(err);
    })
  }
}
