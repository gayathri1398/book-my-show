import React from "react";
import HeroSlider from "react-slick";



// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NextArrow,PrevArrow } from "./Arrows.components";


const HeroCarousel=()=>{

    let settingsLg = {
        arrow:true,
        centerPadding:"400px",
        centerMode:true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextarrow:<NextArrow />,
        prevarrow:<PrevArrow/>
        

      };
     let settings = {
        arrow:true,
        autoplay:true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextarrow:<NextArrow/>,
        prevarrow:<PrevArrow/>
      };

    let images =["https://images.unsplash.com/photo-1606787947360-4181fe0ab58c?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
        "https://images.unsplash.com/photo-1626186282285-d7b87d60e867?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
        "https://images.unsplash.com/photo-1626371972453-9d3041d2c1db?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0MXx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1606787620819-8bdf0c44c293?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
        "https://images.unsplash.com/photo-1593642702909-dec73df255d7?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw1NHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"]

    return<>
     <div className="lg:hidden ">
       <HeroSlider {...settings}>{images.map((image)=>(
       <div className=" w-full h-44  md:h-80 py-3" >
           <img src={image} alt="image1" className="w-full h-full " />
       </div>
       ))}


       </HeroSlider>
    
       </div>

    <div className="hidden lg:block ">

       <HeroSlider {...settingsLg}>{images.map((image)=>(
       <div className="w-20 h-96 px-3 py-3 " >
           <img src={image} alt="image1" className="w-full h-full rounded-md " />
       </div>
       ))}
   

       </HeroSlider>
       </div>

      
    </>
}

export default HeroCarousel