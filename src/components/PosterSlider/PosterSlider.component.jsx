import React from 'react'

import Slider from 'react-slick'

// config
import settings from '../../config/PosterCarousel.config';

// component
import Poster from '../Poster/Poster.component';

 const PosterSlider= (props) => {
    const sliderConfig = props.config ? props.config : settings;

   


    return (
        <>
        <div className="flex flex-col ">
             <h2 className={`text-xl font-bold my-2 ${props.isDark? "text-white":"text-gray-700"}`}>{props.title}</h2>
               <p className ={`text-sm ${props.isDark ? "text-white":"text-gray-700"}`} > {props.subtitle}</p>
         </div>    
            <Slider {...sliderConfig}>
             {props.image.map((image)=>
             <Poster {...image} isDark={props.isDark}/>)}
                </Slider>     
         </>   
        
    )
}

export default PosterSlider