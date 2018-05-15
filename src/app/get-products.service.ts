import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Product } from './models/product';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class GetProductsService {

  constructor(private httpClient: HttpClient) { }

  getProducts() {
    const params = new HttpParams({
      fromObject: {
        'DE_CATE': 'LATEX',
        'DE_EQUI': 'AMERICAN COLORS',
        'DE_FAMI': 'AMERICAN COLORS'
      }
    });
    return this.httpClient.get<Product[]>('/products', {params});
  }

  getDistinctCategory(): Observable<string[]> {
    return this.httpClient.get<string[]>('/distinctcategory');
  }

  getDistinctBrand(selectedCategory): Observable<string[]> {
    const params = new HttpParams({
      fromObject: {
        'selectedCategory': selectedCategory
      }
    });
    return this.httpClient.get<string[]>('/distinctbrand', {params});
  }

  getDistinctFamily(selectedCategory, selectedBrand): Observable<string[]> {
    const params = new HttpParams({
      fromObject: {
        'selectedCategory': selectedCategory,
        'selectedBrand': selectedBrand
      }
    });
    return this.httpClient.get<string[]>('/distinctfamily', {params});
  }

}
