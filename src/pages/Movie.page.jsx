import React from 'react';
import {FaCcVisa}from 'react-icons/fa';
import {SiApplepay}from 'react-icons/si';



// component
import MovieHero from '../components/MovieHero/MovieHero.component';
import CastandCrew from '../components/Cast/CastandCrew.component';
import PosterSlider from '../components/PosterSlider/PosterSlider.component';
import TempPosters from '../config/TempPosters.config';


const MoviePage = () => {

    let movieSettings = {
        infinity:true,
        autoplay:false,
        slidesToShow:4,
        slidesToScroll:1,
        InitialSlide:0,
        responsive:[
            {
            breakpoint: 1024,
            settings :{
                slidesToShow:3,
                slidesToScroll:2,
                infinity:true,
               },
            },
          {
            breakpoint: 600,
            settings:{
                slidesToShow:2,
                slidesToScroll:2,
                InitialSlide:1,
            },
            },
            {
                breakpoint: 480,
                settings:{
                    slidesToShow:2,
                    slidesToScroll:2,
                    InitialSlide:1,
                },
                },
     
        ]
       
    };
    return (
        <>
        <MovieHero/>
        <div className="container px-3 lg:px-40  w-full lg:w-4/5  ">
            <div className="my-4 w-full flex flex-col gap-2 lg:gap-3 my-8 ">
                <h2 className="text-xl md:text-2xl font-bold ">About the movie</h2>
                <p className="text-sm md:text-base">Bruce Wayne and Diana Prince try to bring the metahumans of Earth together after the death of Clark Kent. Meanwhile, 
                    Darkseid sends Steppenwolf to Earth with an army to subjugate humans.</p>
            </div>
            <div>
                <hr />
            </div>
            <div className=" my-4">
            <h2 className="text-2xl font-bold mb-4">Applicable offers</h2>
            <div className="flex flex-col gap-3 lg:flex-row ">
                    <div className="flex  gap-2 items-center border-2 border-yellow-300 bg-yellow-100 border-dashed p-2 rounded-lg">
                        
                        <div className=" h-4 w-12"> <FaCcVisa className="h-full w-full"/></div>
                        <div className="flex flex-col ">
                        <h3 className="font-bold text-base ">Visa Stream Offer</h3>
                        <p className="text-gray-700 text-sm md:text-base">Get 50% off up to INR 150 on all RuPay cards* on BookMyShow Stream.</p>
                        </div>
                
                    </div>
                    <div className="flex  gap-2 items-center border-2 border-yellow-300 bg-yellow-100 border-dashed p-2 rounded-lg">
                    
                    <div className=" h-8 w-12"> <SiApplepay className="h-full w-full"/></div>
                    <div className="flex flex-col ">
                    <h3 className="font-bold text-base ">Filmy Pass</h3>
                    <p className="text-gray-700 text-sm md:text-base">Get Rs.75* off on 3 movies you buy/rent on Stream. Buy Filmy Pass @Rs.99</p>
                    </div>
      
                    </div>
            </div>
            </div>
            <div  className="mt-8">
                <hr />
            </div>
            
            <h2 className="text-2xl font-bold my-4 ">Cast</h2>
            <div className="flex flex-wrap gap-3 ">
             <CastandCrew image="https://in.bmscdn.com/iedb/artist/images/website/poster/large/ben-affleck-292-12-09-2017-05-12-16.jpg"
             name="Ben Affleck"
             role="Batman"/>
               <CastandCrew image="https://in.bmscdn.com/iedb/artist/images/website/poster/large/henry-cavill-23964-04-05-2020-04-25-14.jpg"
             name="Henry Cavill"
             role="Superman"/>
               <CastandCrew image="https://in.bmscdn.com/iedb/artist/images/website/poster/large/gal-gadot-11088-17-10-2017-11-45-36.jpg"
             name="Gal Gadot"
             role="Wonder Woman"/>
         
             </div>
             <div  className="mt-8">
                <hr />
            </div>
             <div className="my-4">
                 <PosterSlider 
                 config={movieSettings}
                 image={TempPosters}
                 title ="You might also like"
                 isDark={false}/>
             </div>
             <div  className="mt-8">
                <hr />
            </div>
             <div className="my-4">
                 <PosterSlider 
                 config={movieSettings}
                 image={TempPosters}
                 title ="BMS XCLUSIV"
                 isDark={false}/>
             </div>
             
         </div>
        </>
    )
}

export default MoviePage
