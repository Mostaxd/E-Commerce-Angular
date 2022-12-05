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

  getProducts(): Observable<Product[]> {
    return this.http.get<Product []>('https://fakestoreapi.com/products/');
  }

  getProductDetails(product: Product): Product{
   this.selectedProduct = product
   return this.selectedProduct
  }

  sendProductDetails(){
    return this.selectedProduct
  }

}



