import React, {useRef, useContext} from "react";
import "./ProductSlider.scss";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { Navigation, Thumbs} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { observer } from "mobx-react-lite";
import { Context } from "../..";

// import "swiper/css/effect-fade";

const ProductSlider = ({activeThumb}) => {
    const { productStore } = useContext(Context);

    const productNavPrevRef = useRef(null);
    const productNavNextRef = useRef(null);
    let fun = () => {
        console.log(activeThumb);
    }
    return (
        <>
            <Swiper
                // loop={true}
                spaceBetween={10}
                modules={[Navigation, Thumbs]}
                // navigation={true}
                centeredSlides={true}
                slidesPerView={1}
                // grabCursor={true}
                autoHeight={false}
                navigation={{
                    prevEl: productNavPrevRef.current,
                    nextEl: productNavNextRef.current,
                }}
                thumbs={{swiper : activeThumb}}
                onInit={(swiper) => {
                    swiper.params.navigation.prevEl = productNavPrevRef.current;
                    swiper.params.navigation.nextEl = productNavNextRef.current;
                    swiper.navigation.init();
                    swiper.navigation.update();
                }}
                className="product-slider"
            >
                <SwiperSlide>
                    <img src={productStore.products.img[0]} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={productStore.products.img[1]} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={productStore.products.img[2]} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={productStore.products.img[0]} alt="" />
                </SwiperSlide>
                <div className="product-slider__prev" onClick={fun} ref={productNavPrevRef}></div>
                <div className="product-slider__next" ref={productNavNextRef}></div>
            </Swiper>
        </>
    );
};

export default observer(ProductSlider);
