import React from "react";
import { NavLink, Outlet } from "react-router-dom";
// import CustomLink from "./CustomLink";
import Header from "../Header/Header";
import Menu from "../Menu/Menu";
import Footer from "../Footer/Footer";

const Layout = () => {
    return (
        <>
            <Header />
            <Menu />
            {/* Указывает на место куда будут вставляться дочерние элементы */}
            <Outlet />

            <Footer />
        </>
    );
};

export default Layout;
