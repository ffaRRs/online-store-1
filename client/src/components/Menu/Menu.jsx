import React, { useState } from "react";
import "./Menu.scss";
import { observer } from "mobx-react-lite";
import DropMenu from "../DropMenu/DropMenu";
import { useContext } from "react";
import { Context } from "../..";
import DropMenuMedia from "../DropMenu/DropMenuMedia/DropMenuMedia";
import { Link } from "react-scroll";
  
// import dropMenuStore from "../../store/dropMenuStore";

const Menu = () => {
    // let [openDropMenu, setOpenDropMenu] = useState(false);
    const {dropMenuStore} = useContext(Context);

    return (
        <div className="pos">
            <DropMenuMedia/>
            <DropMenu />
            <div className="menu">
                <div className="container">
                    <div className="menu__row">
                        <div
                            className={
                                !dropMenuStore.openDropMenu
                                    ? "menu__catalog catalog-menu"
                                    : "menu__catalog catalog-menu active"
                            }
                            // onClick={() => dropMenuStore.changeOpenDropMenu}
                        >

                            <div className="catalog-menu__burger">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                            <div className="catalog-menu__label">Каталог</div>
                        </div>
                        <ul className="menu__items items-menu">
                            <li className="items-menu__item"><Link to="Catalog" activeClass="active" spy={true} smooth={true} offset={-200} duration={500}>Wharhammer</Link></li>
                            <li className="items-menu__item"><Link to="Timebuy" activeClass="active" spy={true} smooth={true} offset={-200} duration={500}>Успей купить</Link></li>
                            <li className="items-menu__item"><Link to="Event" activeClass="active" spy={true} smooth={true} offset={-200} duration={500}>Мероприятия</Link></li>
                            <li className="items-menu__item"><Link to="About" activeClass="active" spy={true} smooth={true} offset={-200} duration={500}>О центре</Link></li>
                            <li className="items-menu__item"><Link to="Footer" activeClass="active" spy={true} smooth={true} offset={-200} duration={500}>Контакты</Link></li>
                        </ul>
                        <div className="menu__social social-menu">
                            <img
                                className="social-menu__inst"
                                src="img/header/instagram.svg"
                                alt="inst"
                            />
                            <img
                                className="social-menu__vk"
                                src="img/header/vk.svg"
                                alt="vk"
                            />
                            <img
                                className="social-menu__fb"
                                src="img/header/facebook.svg"
                                alt="fb"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default observer(Menu);
