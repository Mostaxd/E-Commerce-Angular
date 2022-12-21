import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../model/product';
import { CartService } from '../services/cart.service';
import { ProductService } from '../services/product.service';
import { ToastService } from '../services/toast.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  @Input() product: Product = {
    id: 0,
    image: '',
    title: '',
    description: '',
    price: 0,
  }

  constructor(private productService: ProductService,
              private cartService: CartService,
              private toastService: ToastService) { }



  ngOnInit(): void {
    this.product = this.productService.sendProductDetails();
  }

  addToCart(){
    this.cartService.addToCart(this.product)
    this.toastService.show(`${this.product.title} Added to cart`, { classname: 'bg-success text-light', delay: 2000 })
  }
}
