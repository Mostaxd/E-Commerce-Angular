import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product';
import { CartService } from '../services/cart.service';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];



  constructor(private productService: ProductService,
              private cartService: CartService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(products => this.products = products)

  }

  addToCart(product: Product){
    let added = this.cartService.addToCart(product)
    if(added){
      window.alert(product.title + ' added to cart')
    }
  }







}
