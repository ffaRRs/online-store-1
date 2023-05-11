import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const CardProduct = ({ slide }) => {
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

    return (
        <div className="slidebuy">
            <div className="slidebuy__sale">-15%</div>
            <div className="slidebuy__img">
                <img src={slide.img} alt="" />
            </div>
            <div className="slidebuy__info info-sliderbuy">
                <div className="info-sliderbuy__count">{slide.people}</div>
                <div className="info-sliderbuy__time">{slide.timePlay}</div>
                <div className="info-sliderbuy__age">{slide.age}</div>
            </div>
            <div className="slidebuy__label label-slidebuy">
                <div className="label-slidebuy__name">{slide.name}</div>
                <div className="label-slidebuy__cost">
                    <span>4350 ₽</span> {slide.price} ₽
                </div>
            </div>
            <div className="slidebuy__btn in-cart">В корзину</div>
            <div className="slidebuy__btn buy-one-click">Купить в 1 клик</div>
        </div>
    );
};

export default CardProduct;
