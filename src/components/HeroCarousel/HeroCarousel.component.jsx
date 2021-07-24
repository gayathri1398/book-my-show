import React, {useState,useEffect} from "react";
import HeroSlider from "react-slick";
import axios from "axios";




import { NextArrow,PrevArrow } from "./Arrows.components";


const HeroCarousel=()=>{
    const [images,setImages]= useState([]);


  //async and await
    useEffect(()=>{
        const requestNowPlayingmovies = async () =>{
         const getImages = await axios.get("/movie/now_playing");
         setImages(getImages.data.results);
        
        };
        requestNowPlayingmovies();
        
    },[])

    

    let settingsLg = {
        arrow:true,
        centerPadding:"400px",
        centerMode:true,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow:<NextArrow />,
        prevArrow:<PrevArrow/>
        

      };
     let settings = {
        arrow:true,
        autoplay:true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow:<NextArrow/>,
        prevArrow:<PrevArrow/>
      };

    
    return<>
     <div className="lg:hidden ">
       <HeroSlider {...settings}>{images.map((image)=>(
       <div className=" w-full h-44  md:h-80 py-3" >
           <img src={`https://image.tmdb.org/t/p/original${image.backdrop_path}`} alt="image1" className="w-full h-full " />
       </div>
       ))}


       </HeroSlider>
    
       </div>

    <div className="hidden lg:block ">

       <HeroSlider {...settingsLg}>{images.map((image)=>(
       <div className="w-20 h-96 px-3 py-3 " >
           <img src={`https://image.tmdb.org/t/p/original${image.backdrop_path}`} alt="image1" className="w-full h-full rounded-md " />
       </div>
       ))}
   

       </HeroSlider>
       </div>

      
    </>
}

export default HeroCarousel