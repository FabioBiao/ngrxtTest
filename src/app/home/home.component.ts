import { Component, OnInit } from '@angular/core';

import { select, Store } from '@ngrx/store';
import { GetItems } from '../store/actions';
import { Product } from '../product/product.component';

import {
    getStore,
    getCart,
    selectStoreItems,
    getCartList,
} from './../store/store.selector';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
    items: Observable<Product[]>;
    count$: any;
    test: any;
    getItemsList: any;
    getCartsList: any;

    constructor(private store: Store<{ items: Product[]; cart: [] }>) {
        store.pipe(select(getCartList)).subscribe((data) => {
            // store.pipe().subscribe((data) => {
            console.log('load finish on component');
            console.log(data);
            if (data && data['shop']) {
                console.log(data['shop']);
                this.items = data['shop'].items;
            }

            console.log('test');
            this.getItemsList = store.select(getCartList);
            console.log(this.getItemsList);
            this.getCartsList = store.select(getCart);
            console.log(this.getCartsList);
        });
    }

    ngOnInit(): void {
        this.store.dispatch(new GetItems());
        console.log('test');
        this.getItemsList = this.store.select(getCartList).subscribe((data) => {
            // store.pipe().subscribe((data) => {
            console.log('load on getItemsList');
            console.log(data);
        });
        console.log(this.getItemsList);
        this.getCartsList = this.store.select(getCart);
        console.log(this.getCartsList);
    }
}
