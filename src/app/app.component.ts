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

  categorySelected = false;
  brandSelected = false;
  familySelected = false;
  showProducts = false;

  categoryDistinctArray: string[];
  brandDistinctArray: string[];
  familyDistinctArray: string[];

  constructor(private productService: GetProductsService) {
    // this.getSelectedProducts();
    this.getCategoryDistinctValues();
  }

  getSelectedProducts() {
    this.productService.getProducts(this.productParameters).subscribe(response => {
      console.log('compnent response ', response);
      this.products = response;
      this.showProducts = true;
    });
  }

  getCategoryDistinctValues() {
    this.productService.getDistinctCategory().subscribe(response => {
      console.log('distinct response ', response);
      this.categoryDistinctArray = response;
    });
  }

  onCategorySelected($event) {
    console.log('Selecciono categoria ', $event.target.value);
    this.productService.getDistinctBrand($event.target.value).subscribe(response => {
      console.log('distinct response ', response);
      this.brandDistinctArray = response;
      this.categorySelected = true;
      this.brandSelected = false;
    });
  }

  onBrandSelected($event) {
    console.log('Selecciono marca ', $event.target.value);
    console.log('Selecciono categoria ', this.productParameters.DE_CATE);
    this.productService.getDistinctFamily(this.productParameters.DE_CATE, $event.target.value).subscribe(response => {
      console.log('distinct response ', response);
      this.familyDistinctArray = response;
      this.brandSelected = true;
    });
  }

  onFamilySelected($event) {
    console.log('Selecciono familia ', $event.target.value);
    console.log('Selecciono marca ', this.productParameters.DE_EQUI);
    console.log('Selecciono categoria ', this.productParameters.DE_CATE);
    this.familySelected = true;
  }

  onResetClicked() {
    this.categorySelected = false;
    this.brandSelected = false;
    this.familySelected = false;
    this.showProducts = false;
    this.productParameters.DE_CATE = '';
  }

}
