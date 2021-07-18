import React from 'react'
import Slider from 'react-slick';
// component
import Poster from '../Poster/Poster.component';

// config
import settings from '../../config/PosterCarousel.config';
import PremierImages from '../../config/TempPosters.config';
    

export const Premier = () => {
    return (
        <>
        <Slider {...settings}>
            {PremierImages.map((image)=>
            <Poster {...image}/>)}
        </Slider>
            
        </>
    )
}
export default Premier;