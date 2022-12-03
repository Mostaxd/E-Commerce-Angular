import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../model/product';
import { CartService } from '../services/cart.service';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  @Input() product: Product = {
    image: '',
    title: '',
    description: '',
    price: 0
  }

  constructor(private productService: ProductService,
              private cartService: CartService) { }



  ngOnInit(): void {
    this.product = this.productService.sendProductDetails();
  }

  addToCart(){
    this.cartService.addToCart(this.product)
    window.alert(this.product.title + ' added to cart')
  }

}
