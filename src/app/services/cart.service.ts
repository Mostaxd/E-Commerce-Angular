import { Injectable } from '@angular/core';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItems: Product[] = []
  total = 0;
  constructor() { }


  addToCart(product: Product) {
    this.cartItems.push(product)
  }

  getCartItems() {
    return this.cartItems;
  }

  clearCart() {
    this.cartItems = []
    this.total = 0
  }

  getTotal(): number {
    for (let i = 0; i < this.cartItems.length; i++) {
      this.total += this.cartItems[i].price
    }
    return this.total
  }

  removeItem(title: string){
    this.cartItems = this.cartItems.filter(item => item.title !== title)
    this.total = 0
  }
}
