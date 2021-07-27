import { Component, OnInit } from '@angular/core';
import { MessengerService } from 'src/app/service/messenger.service';
import { ProductService } from 'src/app/services/product.service';
import { ProductListComponent } from '../product-list/product-list.component';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {

  public options: String[];
  constructor(private productService: ProductService, private msg: MessengerService) {
    this.options = ['COMPUTER_ACCESORIES', 'REAL_ESTATE', 'FURNITURE', 'FOUR_WHEELER'];
  }

  ngOnInit(): void {
  }

  searchByCategory(offerCategory: String) {
    // console.log('searching for' + offerCategory);
    // this.productService.getProductsByCategory(offerCategory));
    
  }

}
