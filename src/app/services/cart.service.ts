import { Injectable } from '@angular/core';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItems: Product[] = []
  total = 0;
  constructor() { }


  addToCart(product: Product): boolean {
    if (this.cartItems.includes(product)) {
      if (confirm(`${product.title} is already in cart, do you wish to add one more?`) == true) {
        this.cartItems.push(product);
        return true
      }
      else{
        return false
      }
    }
    else {
      this.cartItems.push(product)
      return true
    }
  }

  getCartItems() {
    return this.cartItems;
  }

  clearCart() {
    this.cartItems = []
    this.total = 0
  }

  getTotal(): number {
    this.total = 0
    for (let i = 0; i < this.cartItems.length; i++) {
      this.total += this.cartItems[i].price
    }
    return this.total
  }

  removeItem(title: string) {
    this.cartItems = this.cartItems.filter(item => item.title !== title)
    this.total = 0
  }
}
