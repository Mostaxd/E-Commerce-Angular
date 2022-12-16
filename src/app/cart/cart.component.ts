import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../model/product';
import { CartService } from '../services/cart.service';
import { ToastService } from '../services/toast.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  total: number = 0;

  name: string = ''
  address: string = ''
  zip: string = ''
  city: string = ''
  phone: string = ''
  email: string = ''

  itemsMap = new Map<Product, number>();


  constructor(private cartService: CartService,
              private router: Router,
              private toastService: ToastService) { }

  ngOnInit(): void {
    this.itemsMap = this.cartService.getCartList()
    this.total = this.cartService.getTotal()
  }

  clearCart() {
    this.cartService.clearCart()
    this.ngOnInit()
  }

  removeItem(product: Product) {
    this.cartService.removeItem(product)
    this.toastService.show(`${product.title}is removed from cart`, { classname: 'bg-danger text-light', delay: 2500 })
    this.ngOnInit()
  }

  submitForm() {
    if (this.itemsMap.size === 0) {
      this.toastService.show('please add products to the cart!', { classname: 'bg-danger text-light', delay: 2500 })
    }
    else {
      this.toastService.show('success', { classname: 'bg-danger text-light', delay: 2500 })
      this.router.navigate(['success']);
    }
  }




}
