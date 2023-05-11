import React, {useContext} from "react";
import Catalog from "../components/Catalog/Catalog";
import SliderBuy from "../components/SliderBuy/SliderBuy";
import Event from "../components/Event/Event";
import MoreInfo from "../components/MoreInfo/MoreInfo";
import About from "../components/About/About";
import Slider from "../components/Slider/Slider";
import { observer } from "mobx-react-lite";
import { Context } from "..";



const HomePage = () => {
    const { cartStore } = useContext(Context);

    return (
        <>  
            <Slider />
            <div className="container">
                <Catalog />
                <SliderBuy id={1} name="Успей купить" />
                <SliderBuy id={2} name="Специальные предложения" />
                <Event />
                <MoreInfo />
                <About />
            </div>
        </>
        
    );
};

export default observer(HomePage);
