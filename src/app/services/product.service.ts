import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  selectedProduct: Product = {
    id: 0,
    image: '',
    title: '',
    description: '',
    price: 0,
  }
  constructor(private http: HttpClient) { }


  productsURL = 'https://ecommerce-backend-3.herokuapp.com/api/products'
  localURL = 'http://localhost:8080/api/products'
  getProducts(): Observable<Product[]> {
    return this.http.get<GetResponse>(this.localURL).pipe(
      map(response => response._embedded.products)
    );
  }

  getProductDetails(product: Product): Product{
   this.selectedProduct = product
   return this.selectedProduct
  }

  sendProductDetails(){
    return this.selectedProduct
  }

}
interface GetResponse {
  _embedded: {
    products: Product[];
  }
}


