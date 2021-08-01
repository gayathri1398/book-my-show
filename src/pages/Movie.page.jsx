import React,{useContext,useState,useEffect} from 'react';
import {FaCcVisa}from 'react-icons/fa';
import {SiApplepay}from 'react-icons/si';
import axios from 'axios';
import { useParams } from 'react-router';




// component
import MovieHero from '../components/MovieHero/MovieHero.component';
import CastandCrew from '../components/Cast/CastandCrew.component';
import PosterSlider from '../components/PosterSlider/PosterSlider.component';
import TempPosters from '../config/TempPosters.config';

// context
import { MovieContext } from '../context/movie.context';
import Slider from 'react-slick';



const MoviePage = () => {
    const {movie} = useContext(MovieContext);
    const {id} = useParams();
    const [cast, setCast] = useState([]);
    const [getSimilarMovies, setSimilarMovies] = useState([]);
    const [getRecommendedMovies, setRecommendedMovies] = useState([]);

    useEffect(()=>{
        const requestCast = async()=>{
            const getCast = await axios.get(`/movie/${id}/credits`);
            setCast(getCast.data.cast);
        }
        
        requestCast();
    },[id]);

    useEffect(()=>{
        const requestSimilarMovies = async()=>{
          const getSimilarMovies = await axios.get(`/movie/${id}/similar`);
         setSimilarMovies (getSimilarMovies.data.results);
        }
        requestSimilarMovies();
        
     },[id]);
     
     useEffect(()=>{
         const requestRecommendedMovies = async()=>{
         const getRecommendedMovies = await axios.get(`movie/${id}/recommendations`);
         setRecommendedMovies(getRecommendedMovies.data.results);
         };
         requestRecommendedMovies();
     },[id]);

     
    

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
    let castSettings = {
        infinity:true,
        autoplay:false,
        slidesToShow:6,
        slidesToScroll:1,
        InitialSlide:0,
        responsive:[
            {
            breakpoint: 1024,
            settings :{
                slidesToShow:4,
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
                <p className="text-sm md:text-base">{movie.overview}</p>
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
            <div className=" my-4 " >
            <h2 className="text-2xl font-bold">Cast</h2>
            <Slider {...castSettings}>
                {cast.map((castdata)=>(
                   
                    <CastandCrew image={`https://image.tmdb.org/t/p/original${castdata.profile_path}`}
                    name={castdata.original_name}
                    role={castdata.character}/>
                   
                ))}
            
            </Slider>
            </div>
             <div  className="mt-8">
                <hr />
            </div>
             <div className="my-4">
                 <PosterSlider 
                 config={movieSettings}
                 image={getSimilarMovies}
                 title ="You might also like"
                 isDark={false}/>
             </div>
             <div  className="mt-8">
                <hr />
            </div>
             <div className="my-4">
                 <PosterSlider 
                 config={movieSettings}
                 image={getRecommendedMovies}
                 title ="BMS XCLUSIV"
                 isDark={false}/>
             </div>
             
         </div>
        </>
    )
}

export default MoviePage;
