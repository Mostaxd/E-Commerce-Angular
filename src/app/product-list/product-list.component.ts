import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product';
import { CartService } from '../services/cart.service';
import { ProductService } from '../services/product.service';
import { Slide } from '../model/Slide';
import { ToastService } from '../services/toast.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  currentCategory: number = 1;

  slides: Slide[] = [
    { url: 'assets/model.jpg', title: 'model1' },
    { url: 'assets/model-2.jpg', title: 'model2' },
    { url: 'assets/model-3.jpg', title: 'model3' },
  ];

  constructor(
    private productService: ProductService,
    private cartService: CartService,
    private toastService: ToastService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    if (this.activatedRoute.snapshot.paramMap.has('id')) {
      this.currentCategory = +this.activatedRoute.snapshot.paramMap.get('id')!;
    } else {
      this.currentCategory = 0;
    }

    this.productService
      .getProducts(this.currentCategory)
      .subscribe((products) => (this.products = products));

    // this.activatedRoute.params.subscribe(params => {
    //   if (params['id']) {
    //     this.currentCategory = params['id']
    //   }
    // })
  }

  addToCart(product: Product) {
    let added = this.cartService.addToCart(product);
  }

  filterByCategory(id: number) {
    this.router.navigate(['/category', id], {
      relativeTo: this.activatedRoute,
    });
    // this.ngOnInit()
  }

  showSuccess() {
    this.toastService.show('hello world', {
      classname: 'bg-success text-light',
      delay: 2000,
    });
  }
}
