import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import DropMenuStore from './store/dropMenuStore';
import Store from './store/store';
import CartStore from './store/cartStore';
import {BrowserRouter} from 'react-router-dom'
import ProductStore from './store/productStore';

const root = ReactDOM.createRoot(document.getElementById('root'));

const store = new Store();
const dropMenuStore = new DropMenuStore();
const cartStore = new CartStore();
const productStore = new ProductStore();
export const Context = createContext({
    store, 
    dropMenuStore,
    cartStore,
    productStore
})

root.render(
    <BrowserRouter>
        <Context.Provider value={{store, dropMenuStore, cartStore, productStore}}>
            <App />
        </Context.Provider> 
    </BrowserRouter>
    
);

