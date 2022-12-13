import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductComponent } from './product/product.component';
import { CartComponent } from './cart/cart.component';
import { FormsModule } from '@angular/forms';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SuccessComponent } from './cart/success/success.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { trigger , state , style } from '@angular/animations';
import { ImageSliderComponent } from './product-list/image-slider/image-slider.component'




@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductComponent,
    CartComponent,
    ProductDetailsComponent,
    SuccessComponent,
    ImageSliderComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
