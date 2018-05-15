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

  getDistinct(distinctParam): Observable<string[]> {
    const params = new HttpParams({
      fromObject: {
        'distinctParam': distinctParam
      }
    });
    return this.httpClient.get<string[]>('/distinct', {params});
  }

}
