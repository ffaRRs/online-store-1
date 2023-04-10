import React, {useState, useContext} from "react";
import axios from "axios";
import { Context } from "../..";
import { observer } from "mobx-react-lite";



const Product = ({product, setCartProducts}) => {
    const [countProduct, setCountProduct] = useState(1)
    const { cartStore } = useContext(Context);


    const onRemoveItem = (id) => {
        console.log(id);
        axios.delete(`https://6418314775be53f451d85e73.mockapi.io/cart/${id}`);
        // cartStore.setCountProduct((prev) => prev.filter(item => item.id !== id));
        setCartProducts((prev) => prev.filter(item => item.id !== id));
    }

    let clickMinus = () => {
        if (cartStore.count !== 1){
          cartStore.setCount(cartStore.count + 1);
          setCountProduct(countProduct - 1);
          product.count = countProduct;
          console.log(product.count);
        }
      }
      let clickPlus = () => {
          cartStore.setCount(cartStore.count + 1);
          setCountProduct(countProduct + 1);
          product.count = countProduct;
          console.log(product);

      }

    return (
        <div key={product.id} className="cart__product product-cart">
            <div className="product-cart__img">
                <img src={product.img} alt="" />
            </div>
            <div className="product-cart__title">{product.name}</div>
            <div className="product-cart__price">{product.price}</div>
            <div className="product-cart__counter counter-product">
                <div className="counter-product__minus" onClick={clickMinus}>
                    -
                </div>
                <div className="counter-product__count">{product.count} шт</div>
                <div className="counter-product__plus" onClick={clickPlus}>
                    +
                </div>
            </div>
            <div
                className="product-cart__delete"
                onClick={() => onRemoveItem(product.id)}
            >
                <img src="./img/cart/trash.svg" alt="" />
            </div>
        </div>
    );
};

export default observer(Product);
