import { Component, OnInit, Input } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Product } from '../product/product.component';
import { getStore } from './../store/store.selector';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
    constructor(private store: Store<{ items: []; cart: [] }>) {
        store.pipe().subscribe((data) => {
            console.log('header');
            console.log(data);
            this.cart = data['shop'].cart;
        });
    }
    cart = [];

    ngOnInit(): void {}
}
