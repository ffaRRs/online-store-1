import { makeAutoObservable } from "mobx";

export default class CartStore{
    // countProduct = 0;
    products = [];
    countProduct = 0;
    count = 1;
    cartOpen = false;


    constructor(){
        makeAutoObservable(this)
    }

    setCountProduct(arrProducts){
        this.products = arrProducts;
        this.countProduct = arrProducts?.length;
    }
    setCount(){
        this.count += 1;
    }
    
    setCartOpen(){
        this.cartOpen = !this.cartOpen;
    }
}