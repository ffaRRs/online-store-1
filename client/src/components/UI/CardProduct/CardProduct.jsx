import React, {useContext} from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Context } from "../../..";
import { observer } from "mobx-react-lite";



const CardProduct = ({slide}) => {

    const { productStore } = useContext(Context);


    let moveToCart = (...card) => {
        alert(card[1] + " " + "добавлено в карзину");
        let newObj = {
            img: card[0],
            count: 1,
            name: card[1],
            price: card[2],
        };
        axios.post("https://6418314775be53f451d85e73.mockapi.io/cart", newObj);
        // cartStore.setCount();
        // console.log(cartStore.count);
    };

    let forwardPage = (product) =>{
        productStore.setCountProduct(product)
        console.log(productStore.products);
    }

    return (
        <div className="slidebuy">
            <div className="slidebuy__img">
                <img src={slide.img[0]} alt="" />
            </div>
            <div className="slidebuy__info info-sliderbuy">
                <div className="info-sliderbuy__count">{slide.people}</div>
                <div className="info-sliderbuy__time">{slide.timePlay}</div>
                <div className="info-sliderbuy__age">{slide.age}</div>
            </div>

            <div className="slidebuy__label label-slidebuy">
                <Link to={`/product`}>
                    <div onClick={() => forwardPage(slide)} className="label-slidebuy__name">{slide.name}</div>
                </Link>
                <div className="label-slidebuy__cost">{slide.price} ₽</div>
            </div>
            <div
                className="slidebuy__btn in-cart"
                onClick={() => moveToCart(slide.img[0], slide.name, slide.price)}
            >
                В корзину
            </div>
            <div className="slidebuy__btn buy-one-click">Купить в 1 клик</div>
        </div>
    );
};

export default observer(CardProduct);
