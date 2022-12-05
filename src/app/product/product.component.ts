import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Product } from '../model/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() product: Product;
  @Output() cartAdder: EventEmitter<Product> = new EventEmitter();

  constructor(private productService: ProductService) {
    this.product = {
      id: 0,
      image: '',
      title: '',
      description: '',
      price: 0,
    }
  }

  ngOnInit(): void {
  }

  addToCart(product: Product) {
    console.log(this.product)
    this.cartAdder.emit(product)
  }

  sendProductDetails() {
    this.productService.getProductDetails(this.product)
  }



}
