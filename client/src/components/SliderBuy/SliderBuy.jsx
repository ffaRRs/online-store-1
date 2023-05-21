import React, { useEffect, useRef, useState, useContext } from "react";
import "./SliderBuy.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { Navigation, EffectFade } from "swiper";
import { Context } from "../..";
import { observer } from "mobx-react-lite";

import axios from "axios";
import sliderTimeBuy from "../../data/slider/sliderTimeBuy";
import { Link } from "react-router-dom";
import CardProduct from "../UI/CardProduct/CardProduct";
import CardProductSale from "../UI/CardProductSale/CardProductSale";

const SliderBuy = ({ name, id }) => {
    const { cartStore } = useContext(Context);

    const swiperNavPrevRefBuy = useRef(null);
    const swiperNavNextRefBuy = useRef(null);
    const [slideTimeBuy, setSlideTimeBuy] = useState(null);

    useEffect(() => {
        axios
            .get("https://6418314775be53f451d85e73.mockapi.io/cardsGames")
            .then((resp) => {
                const slides = resp.data;
                setSlideTimeBuy(slides);
            });
    }, []);

    

    if (!slideTimeBuy) return <p>Товаров нету</p>;
    return (
        <div className="timebuy" name="Timebuy">
            <div className="timebuy__title">{name}</div>
            <Swiper
                modules={[Navigation, EffectFade]}
                navigation={{
                    prevEl: swiperNavPrevRefBuy.current,
                    nextEl: swiperNavNextRefBuy.current,
                }}
                spaceBetween={20}
                speed={800}
                slidesPerView={4}
                onInit={(swiper) => {
                    swiper.params.navigation.prevEl =
                        swiperNavPrevRefBuy.current;
                    swiper.params.navigation.nextEl =
                        swiperNavNextRefBuy.current;
                    swiper.navigation.init();
                    swiper.navigation.update();
                }}
                className="myswiperbuy"
            >
                {id === 1
                    ? slideTimeBuy?.map((slide) => {
                          return (
                              <SwiperSlide className="timebuy__slidebuy">
                                  <CardProduct slide={slide} />
                              </SwiperSlide>
                          );
                      })
                    : sliderTimeBuy.map((slide) => {
                          return (
                              <SwiperSlide className="timebuy__slidebuy">
                                  <CardProductSale slide={slide}/>
                              </SwiperSlide>
                          );
                      })}

                <div
                    className="swiperNavPrevBuy"
                    ref={swiperNavNextRefBuy}
                ></div>
                <div
                    className="swiperNavNextBuy"
                    ref={swiperNavPrevRefBuy}
                ></div>
            </Swiper>
        </div>
    );
};

export default observer(SliderBuy);
