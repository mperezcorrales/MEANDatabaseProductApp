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

  p = 1;

  categorySelected = false;
  brandSelected = false;
  familySelected = false;
  showProducts = false;

  categoryDistinctArray: string[];
  brandDistinctArray: string[];
  familyDistinctArray: string[];

  constructor(private productService: GetProductsService) {
    this.getCategoryDistinctValues();
  }

  // This method is used to get all available category options.
  // It calls the product service getDistinctCategory() method.
  getCategoryDistinctValues() {
    this.productService.getDistinctCategory().subscribe(response => {
      this.categoryDistinctArray = response;
    });
  }

  // This method is called to get all the available brands from the category selected.
  // It calls the product service getDistinctBrand(selectedCategory) method.
  onCategorySelected($event) {
    this.productService.getDistinctBrand($event.target.value).subscribe(response => {
      this.brandDistinctArray = response;
      this.categorySelected = true;
      this.brandSelected = false;
      this.familySelected = false;
    });
  }

  // This method is called to get all the available families from the brand and category selected.
  // It calls the product service getDistinctFamily(selectedCategory, selectedBrand) method.
  onBrandSelected($event) {
    this.productService.getDistinctFamily(this.productParameters.DE_CATE, $event.target.value).subscribe(response => {
      this.familyDistinctArray = response;
      this.brandSelected = true;
      this.familySelected = false;
    });
  }

  // This method is called to indicate that the family has being selected so the buttons can be shown.
  onFamilySelected($event) {
    this.familySelected = true;
  }

  // This method is called to get all the available products from the category, brand and family selected.
  // It calls the product service getProducts(productParameters: Product) method.
  getSelectedProducts() {
    this.productService.getProducts(this.productParameters).subscribe(response => {
      this.products = response;
      this.showProducts = true;
    });
  }

  // This method is called to reset all the selected values and start again.
  onResetClicked() {
    this.categorySelected = false;
    this.brandSelected = false;
    this.familySelected = false;
    this.showProducts = false;
    this.productParameters.DE_CATE = '';
  }

}
