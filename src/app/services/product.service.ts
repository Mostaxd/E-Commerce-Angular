import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  selectedProduct: Product = {
    id: 0,
    image: '',
    title: '',
    description: '',
    price: 0,
    category: 0,
  };
  constructor(private http: HttpClient) {}

  deployableURL = 'https://ecommerce-backend-3.herokuapp.com';
  localURL = 'http://localhost:8080';

  getProducts(categoryId: number): Observable<Product[]> {
    // return this.http.get<GetResponse>(this.localURL + "/api/products").pipe(
    //   map(response => response._embedded.products)
    // );

    return this.http.get<any>(this.localURL + `/api/category/${categoryId}`);
  }

  getProductDetails(product: Product): Product {
    this.selectedProduct = product;
    return this.selectedProduct;
  }

  sendProductDetails() {
    return this.selectedProduct;
  }
}
interface GetResponse {
  _embedded: {
    products: Product[];
  };
}

interface fillteredByCategoryResponse {
  products: Product[];
}
