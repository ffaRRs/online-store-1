import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import { Context } from "../..";
import cartStore from "../../store/cartStore";
import { observer } from "mobx-react-lite";
import Road from "../../components/Road/Road";
import './Cart.scss'
import Product from "../../components/UI/Product";

const Cart = () => {
    const { cartStore } = useContext(Context);
    const [cartProducts, setCartProducts] = useState([]);
    const [cost, setCost] = useState(0)

    useEffect(() => {
      axios
      .get("https://6418314775be53f451d85e73.mockapi.io/cart")
      .then((res) => {
        // cartStore.setCountProduct(res.data);
        setCartProducts(res.data);
      });
    }, [])

    useEffect(() => {
      let sum = 0;
      for(let i = 0; i < cartProducts.length; i++){
        sum += Number(cartProducts[i].price) * cartProducts[i].count;
        console.log(cartProducts[i].price);
      }
      setCost(sum);
    }, [cartProducts, cartStore.count])





    return (
        <div className="cart">
            <div className="container">
                <Road />
                <div className="cart__title">Корзина</div>
                <div className="cart__row">
                  <div className="cart__products">
                    {(cartProducts.length !== 0) ? cartProducts.map(product => {
                      return (
                        <Product product={product} setCartProducts={setCartProducts}/>
                      )
                    }) : 'Пусто, нужно закупить больше товара'
                    }
                  </div>
                  <div className="cart__order order-cart">
                    <div className="order-cart__price price-cart">
                      <div className="price-cart__sum">Сумма: <span>{cost} ₽</span></div>
                      <form className="price-cart__form">
                        <label className="price-cart__label" for="sale">  Промокод:</label><br />
                        <input className="price-cart__input" type="text" id="sale" />
                      </form>
                      <button className="price-cart__offer">Оформить</button>
                      <button className="price-cart__oneclick buy-one-click">Купить в 1 клик</button>
                    </div>
                  </div>
                </div>
            </div>
        </div>
    );
};

export default observer(Cart);
