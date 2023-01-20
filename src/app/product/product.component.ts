import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Product } from '../model/product';
import { ProductService } from '../services/product.service';
import { ToastService } from '../services/toast.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() product: Product;
  @Output() cartAdder: EventEmitter<Product> = new EventEmitter();

  constructor(private productService: ProductService,
              private toastService: ToastService) {
    this.product = {
      id: 0,
      image: '',
      title: '',
      description: '',
      price: 0,
      category: 0
    }
  }

  ngOnInit(): void {
  }

  addToCart(product: Product) {
    console.log(this.product)
    this.cartAdder.emit(product)
    this.toastService.show(`${this.product.title} Added to cart`, { classname: 'bg-success text-light', delay: 2000 })
  }

  sendProductDetails() {
    this.productService.getProductDetails(this.product)
  }
}
