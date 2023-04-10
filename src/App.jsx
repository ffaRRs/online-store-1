import React, { useContext } from "react";
import {
    Routes,
    Route,
    Link,
    RouterProvider,
    Navigate,
} from "react-router-dom";
import { Context } from ".";
import "./normalize.scss";
import "./App.scss";

import { observer } from "mobx-react-lite";
import Layout from "./components/Layout/Layout";

import Cart from "./page/Cart/Cart";
import HomePage from "./page/HomePage";

function App() {
    const { dropMenuStore } = useContext(Context);
    let closeMenu = function (e) {
        // console.log(e.target.parentNode.className.includes("menu__catalog"));
        
        if (
            (e.target.parentNode.className.includes("menu__catalog") || e.target.className.includes("catalog-menu")) &&
            !dropMenuStore.openDropMenu
        ) {
            dropMenuStore.chageOpenDropMenu();
        } else {
            if (
                !e.target.className.includes("drop-categories") &&
                !e.target.className.includes("drop-menu") &&
                !e.target.className.includes("row-column") &&
                !e.target.className.includes("media-categories")
            ) {
                dropMenuStore.closeDropMenu();
            }
        }
    };
    
    return (
        <div onClick={(e) => closeMenu(e)}>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<HomePage />} />
                    <Route path="cart" element={<Cart />} />
                </Route>
            </Routes>
            {/* <HomePage/> */}
            {/* <Cart/> */}
        </div>
    );
}

export default observer(App);
