import { Component, OnInit } from '@angular/core';

import { select, Store } from '@ngrx/store';
import { GetItems } from '../store/actions';
import { Product } from '../product/product.component';

import {
    getStore,
    getCart,
    getItemsList,
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
        store.pipe(select(getCart)).subscribe((data) => {
            // store.pipe().subscribe((data) => {
            console.log('load finish on component');
            console.log(data);
            if (data && data['shop']) {
                console.log(data['shop']);
                this.items = data['shop'].items;
            }

            console.log('test');
            this.getItemsList = store.select(getItemsList);
            console.log(this.getItemsList);
            this.getCartsList = store.select(getCartList);
            console.log(this.getCartsList);
        });

        //console.log(store.select('shop'));
    }

    // constructor(private store: Store<{ items: Product[]; cart: [] }>) {
    //   this.count$ = store.pipe(select('count'));
    // }

    ngOnInit(): void {
        this.store.dispatch(new GetItems());
    }
}
