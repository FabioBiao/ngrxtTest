import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { ActionTypes } from './actions';
import { FruitsService } from '../services/fruits.service';

@Injectable()
export class ShopEffects {
    @Effect()
    loadFruits$ = this.actions$.pipe(
        ofType(ActionTypes.LoadItems), // filter the action
        // mergeMap operator by RxJS is for flattening and merging the actions into an Observable.
        mergeMap(() =>
            this.fruitsService.getAll().pipe(
                map((fruits) => {
                    return { type: ActionTypes.LoadSuccess, payload: fruits };
                }),
                catchError(() => EMPTY)
            )
        )
    );

    constructor(
        private actions$: Actions,
        private fruitsService: FruitsService
    ) {}
}
