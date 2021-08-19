# FruitStore
Run node server:  node server.js
Run frontend:  ng serve

## Commands used

ng new fruit-store --style=scss

// install depencies required to build the server
npm install express body-parser

// front-end dependencies
npm install @ngrx/store @ngrx/effects

ng generate component home
ng generate component header

ng generate service fruits 

//  commands we could use
ng generate module Customer
ng generate class models/customer

ng generate action customer/store/action/Customer
? Should we generate success and failure actions? No
? Do you want to use the create function? Yes

ng generate reducer customer/store/reducer/Customer
? Should we add success and failure actions to the reducer? No
? Do you want to use the create function? Yes

## ngRx introduction

NgRx/store is a library for managing state in your Angular applications, it is a reactive state management library powered by RxJS. Similar to Redux, this library can be used to manage the flow of data throughout your application, when actions are dispatched, reducers act on them and mutate the store. Another library we’ll be working with is NgRx/effects. Effects are commonly used to handle side effects in your application, like fetching data from an external resource.


Best resource to learn ngrx: https://ngrx.io/guide/store

The first step is to create and assign actions. The actions will be mapped to constants using an enum.