import { Injectable } from '@angular/core';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  total = 0;
  cartMap = new Map<Product, number>();

  constructor() { }

  addToCart(product: Product): boolean {
    if (this.cartMap.has(product)) {
      this.cartMap.set(product, (this.cartMap.get(product)! + 1))
      return true
    }
    else {
      this.cartMap.set(product, 1)
      return true
    }
  }

  isProductEqual(p1: Product, p2: Product) {
    return p1.id === p2.id;
  }

  getCartList() {
    return this.cartMap;
  }

  clearCart() {
    this.cartMap.clear()
    this.updateTotal()
  }

  removeItem(product: Product): boolean {
    this.cartMap.delete(product)
    this.updateTotal()
    return true
  }

  getTotal(): number {
    this.updateTotal()
    return this.total
  }

  updateTotal() {
    this.total = 0
    for (let [key, value] of this.cartMap) {
      this.total += (key.price) * value
    }


  }




}
