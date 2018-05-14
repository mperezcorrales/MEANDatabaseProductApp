import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GetProductsService {
  result;
  constructor(private http: Http) { }

  getProducts() {
    return this.http.get('/products').map(result => result.json().data);
  }

}
