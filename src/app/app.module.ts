import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductComponent } from './product/product.component';

// custom imports
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ShopReducer } from './store/reducer';
import { ShopEffects } from './store/effects';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        HeaderComponent,
        ProductListComponent,
        ProductComponent,
    ],
    imports: [
        BrowserModule,
        // AppRoutingModule,
        // custom imports
        HttpClientModule,
        StoreModule.forRoot({ 'shop': ShopReducer }),
        EffectsModule.forRoot([ShopEffects]),
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
