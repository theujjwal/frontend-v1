import { Component, OnInit } from '@angular/core';
import { MessengerService } from 'src/app/service/messenger.service';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems = []

  cartTotal = 0

  constructor(private msg: MessengerService) { }

  ngOnInit() {
    this.msg.getMsg().subscribe((product: Product) => {
      this.addProductToCart(product)
    })
  }

  addProductToCart(product: Product) {

    let productExists = false

    for (let i in this.cartItems) {
      if (this.cartItems[i].productId === product.offerId) {
        this.cartItems[i].qty++
        productExists = true
        break;
      }
    }

    if (!productExists) {
      this.cartItems.push({
        productId: product.offerId,
        productName: product.details,
        qty: 1,
        price: product.price
      })
    }


    this.cartTotal = 0
    this.cartItems.forEach(item => {
      this.cartTotal += (item.qty * item.price)
    })
  }

}
