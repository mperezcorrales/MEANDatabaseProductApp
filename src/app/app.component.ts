import { Component } from '@angular/core';
import { GetProductsService } from './get-products.service';
import { Product } from './models/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  products: Product[];
  productParameters: Product = {
    DE_CATE: '',
    DE_EQUI: '',
    DE_FAMI: ''
  };

  categoryDistinctArray: string[];
  brandDistinctArray: string[];
  familyDistinctArray: string[];

  constructor(private productService: GetProductsService) {
    this.getSelectedProducts();
    this.getDistinctValues();
  }

  getSelectedProducts() {
    this.productService.getProducts().subscribe(response => {
      console.log('compnent response ', response);
      this.products = response;
    });
  }

  getDistinctValues() {
    this.productService.getDistinct('DE_CATE').subscribe(response => {
      console.log('distinct response ', response);
      this.categoryDistinctArray = response;
    });

    // this.productService.getDistinct('DE_EQUI').subscribe(response => {
    //   console.log('distinct response ', response);
    //   this.brandDistinctArray = response;
    // });

    // this.productService.getDistinct('DE_FAMI').subscribe(response => {
    //   console.log('distinct response ', response);
    //   this.familyDistinctArray = response;
    // });
  }

}
