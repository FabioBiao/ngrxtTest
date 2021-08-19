import { Component, OnInit } from '@angular/core';

import { select, Store } from '@ngrx/store';
import { GetItems } from '../store/actions';
import { Product } from '../product/product.component';

import {
    // getStore,
    // selectStoreItems,
    // getItemList,
    getCart,
    getItems,
} from './../store/store.selector';

import { Observable } from 'rxjs';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
    items: Product[];
    //items: Observable<Product[]>;
    count$: any;
    test: any;
    getItemsList$: any;
    getCartsList$: any;

    constructor(private store: Store<{ items: Product[]; cart: [] }>) {
        store.pipe(select(getItems)).subscribe((data) => {
            // store.pipe().subscribe((data) => {
            console.log('load finish on component');
            console.log(data);
            this.items = data;


            // console.log('test');
            // this.getItemsList = store.select(getItemList);
            // console.log(this.getItemsList);
            // this.getCartsList = store.select(getCart);
            // console.log(this.getCartsList);
        });
    }

    ngOnInit(): void {
        this.store.dispatch(new GetItems());
        console.log('test');


        this.getCartsList$ = this.store.select(getItems);
        console.log(this.getCartsList$);
        this.getCartsList$ = this.store.select(getCart);
        console.log(this.getCartsList$);
    }
}
