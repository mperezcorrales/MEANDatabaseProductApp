import { Component } from '@angular/core';
import { GetProductsService } from './get-products.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  products;

  constructor(private dataService: GetProductsService) {
    this.dataService.getProducts().subscribe(response => this.products = response);
  }

}
