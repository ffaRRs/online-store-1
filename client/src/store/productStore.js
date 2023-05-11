import { makeAutoObservable } from "mobx";

export default class ProductStore{
    // countProduct = 0;
    products = 0;
    


    constructor(){
        makeAutoObservable(this)
    }

    setCountProduct(product){
        this.products = product;
        //this.countProduct = arrProducts?.length;
    }
}