import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product';
import { CartService } from '../services/cart.service';
import { ProductService } from '../services/product.service';
import { Slide } from '../model/Slide';
import { ToastService } from '../services/toast.service';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  showFiller = false;

  slides: Slide[] = [
    {url: 'assets/model.jpg', title: 'model1'},
    {url: 'assets/model-2.jpg', title: 'model2'},
    {url: 'assets/model-3.jpg', title: 'model3'},
  ]



  constructor(private productService: ProductService,
              private cartService: CartService,
              private toastService: ToastService
              ) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(products => this.products = products)

  }

  addToCart(product: Product){
    let added = this.cartService.addToCart(product)
  }
}




