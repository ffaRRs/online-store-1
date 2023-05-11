import React, {useRef, useContext} from "react";
import "./ProductVertSlider.scss";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { Navigation, Thumbs} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { observer } from "mobx-react-lite";
import { Context } from "../..";

// import "swiper/css/effect-fade";

const ProductVertSlider = ({setActiveThumb}) => {
    
    const { productStore } = useContext(Context);

    const productNavPrevRef = useRef(null);
    const productNavNextRef = useRef(null);
    let fun = () => {
        console.log(setActiveThumb);
    }
    return (
        <>
            <Swiper
                onSwiper={setActiveThumb}
                // loop={true}
                spaceBetween={10}
                modules={[Navigation, Thumbs]}
                // navigation={true}
                // centeredSlides={true}
                slidesPerView={3}
                // grabCursor={true}
                // autoHeight={false}
                navigation={{
                    prevEl: productNavPrevRef.current,
                    nextEl: productNavNextRef.current,
                }}
                direction={'vertical'}
                onInit={(swiper) => {
                    swiper.params.navigation.prevEl = productNavPrevRef.current;
                    swiper.params.navigation.nextEl = productNavNextRef.current;
                    swiper.navigation.init();
                    swiper.navigation.update();
                }}
                className="product-slider-vert"
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
                <div className="product-slider-vert__prev" ref={productNavPrevRef}></div>
                <div className="product-slider-vert__next" onClick={fun} ref={productNavNextRef}></div>
            </Swiper>
        </>
    );
};

export default observer(ProductVertSlider);
