import React from 'react'

import Slider from 'react-slick'

// config
import settings from '../../config/PosterCarousel.config';

// component
import Poster from '../Poster/Poster.component';

 const PosterSlider= (props) => {
    return (
        <>
        <div className="flex flex-col ">
             <h2 className={`text-xl font-bold ${props.isDark? "text-white":"text-gray-700"}`}>{props.title}</h2>
               <p className ={`text-sm ${props.isDark ? "text-white":"text-gray-700"}`} > {props.subtitle}</p>
         </div>    
            <Slider {...settings}>
             {props.image.map((image)=>
             <Poster {...image} isDark={props.isDark}/>)}
                </Slider>     
         </>   
        
    )
}

export default PosterSlider