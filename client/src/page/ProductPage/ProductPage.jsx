import React, { useContext, useState } from "react";
import Road from "../../components/Road/Road";
import "./ProductPage.scss";
import ProductSlider from "../../components/ProductSlider/ProductSlider";
import ProductVertSlider from "../../components/ProductVertSlider/ProductVertSlider";
import Tabs from "../../components/ProductComponent/Tabs";
import ButtonAdd from "../../components/UI/ButtonAdd/ButtonAdd";
import Akardion from "../../components/ProductComponent/Akardion/Akardion";
import { observer } from "mobx-react-lite";
import { Context } from "../..";


const ProductPage = () => {
    const [activeThumb, setActiveThumb] = useState();
    const [sale, setSale] = useState(true);

    const { productStore } = useContext(Context);

    const orderInfo = [
        {
            id: 1,
            header: "Доставка",
            text: `Самовывоз из магазина: сегодня
                   Самовывоз из 761 пункта: 1-3 дня
                   Курьерская доставка: 1-3 дня
                   Доставка почтой: от 3 дней`,
        },
        {
            id: 2,
            header: "Оплата",
            text: `Самовывоз из магазина: сегодня
                   Самовывоз из 761 пункта: 1-3 дня
                   Курьерская доставка: 1-3 дня
                   Доставка почтой: от 3 дней`,
        },
    ];

    return (
        <div className="product">
            <div className="container">
                <Road />
                <div className="product__title">{productStore.products.name}</div>
                <div className="product__row">
                    <div className="product__item item-product">
                        <div className="item-product__sliders">
                            <ProductVertSlider
                                setActiveThumb={setActiveThumb}
                            />
                            <ProductSlider activeThumb={activeThumb} />
                        </div>
                        <div className="item-product__info info-product">
                            <Tabs />
                        </div>
                    </div>
                    <div className="product__order order-product">
                        <div className="order-product__row">
                            <div className="order-product__cod">
                                Код товара:842672
                            </div>
                            <div className="order-product__info info-order">
                                <div className="info-order__group group-order">
                                    <div className="group-order__img">
                                        <img
                                            src="./img/sliderBuy/group.svg"
                                            alt=""
                                        />
                                    </div>
                                    <div className="group-order__count">
                                        {productStore.products.people}
                                    </div>
                                </div>
                                <div className="info-order__time time-order">
                                    <div className="time-order__img">
                                        <img
                                            src="./img/sliderBuy/timer.svg"
                                            alt=""
                                        />
                                    </div>
                                    <div className="time-order__count">
                                        {productStore.products.timePlay}
                                    </div>
                                </div>
                                <div className="info-order__age">{productStore.products.age}</div>
                            </div>
                            {sale ? (
                                <div className="order-product__sale">
                                    2390 ₽
                                </div>
                            ) : (
                                ""
                            )}
                            <div className="order-product__price">{productStore.products.price}</div>
                            <ButtonAdd
                                text="В корзину"
                                nameStyle="order-product__add"
                                whatBtn="btnAdd"
                            />
                            <ButtonAdd
                                text="Купить в 1 клик"
                                nameStyle="order-product__oneclick"
                                whatBtn="oneClick"
                            />
                        </div>
                        <Akardion faqs={orderInfo} />
                        <ButtonAdd
                            text="Задать вопрос"
                            nameStyle="order-product__question"
                            whatBtn="oneClick"
                        />
                    </div>
                    <div className="product__recently recently-product">
                        <div className="recently-product__row"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default observer(ProductPage);
