import React from "react";

import Navbar from "../components/Navbar/navbar.components";
import HeroCarousel from "../components/HeroCarousel/HeroCarousel.component";

const DefaultLayout = (props) =>{
    return (
    <>
    <Navbar/>
    <HeroCarousel/>
    {props.children}
    </>
    )
    };

export default DefaultLayout;