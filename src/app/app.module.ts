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
import { ImageSliderComponent } from './product-list/image-slider/image-slider.component';
import { CarouselModule } from 'ngx-bootstrap/carousel'
import {MatSidenavModule} from '@angular/material/sidenav';
import { FooterComponent } from './footer/footer.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import { NgbToastModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbPopoverModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbdToastGlobal } from "./toast/toast.component";
import { ToastsContainer } from "./toast/toasts-container.component";








@NgModule({
    declarations: [
        AppComponent,
        ProductListComponent,
        ProductComponent,
        CartComponent,
        ProductDetailsComponent,
        SuccessComponent,
        ImageSliderComponent,
        FooterComponent,
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        HttpClientModule,
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        FontAwesomeModule,
        BrowserAnimationsModule,
        CarouselModule.forRoot(),
        MatSidenavModule,
        MatFormFieldModule,
        MatSelectModule,
        MatButtonModule,
        NgbToastModule,
        NgbPopoverModule,
        NgbdToastGlobal,
        ToastsContainer
    ]
})
export class AppModule { }
