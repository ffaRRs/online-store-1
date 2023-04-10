import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import DropMenuStore from './store/dropMenuStore';
import Store from './store/store';
import CartStore from './store/cartStore';
import {BrowserRouter} from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));

const store = new Store();
const dropMenuStore = new DropMenuStore();
const cartStore = new CartStore();

export const Context = createContext({
    store, 
    dropMenuStore,
    cartStore,

})

root.render(
    <BrowserRouter>
        <Context.Provider value={{store, dropMenuStore, cartStore}}>
            <App />
        </Context.Provider> 
    </BrowserRouter>
    
);

