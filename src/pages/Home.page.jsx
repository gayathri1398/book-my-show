import axios from 'axios';
import React,{useState,useEffect} from 'react';
import { Link } from 'react-router-dom';


// components
import EntertainmentCardSlider from '../components/Entertainmentcard/EntertainmentCard.component';

import PosterSlider from '../components/PosterSlider/PosterSlider.component';

// config
// import TempPosters from '../config/TempPosters.config'

const HomePage = () => {

    const[popularMovies,setPopularMovies] = useState([]);
    const[topRatedMovies,setTopRatedMovies] = useState([]);
    const[upcomingMovies,setUpcomingMovies] = useState([]);

    useEffect(()=>{
        // creating async fn separately because it leads to race condition(deadlock) 
        const requestPopularMovies = async() =>{
             const getPopularMovies = await axios.get("/movie/popular");
             setPopularMovies(getPopularMovies.data.results);
             console.log( getPopularMovies)
        }
        requestPopularMovies();
    },[]);

    useEffect(()=>{
        const requestTopRatedMovies = async()=>{
            const getTopRatedMovies = await axios.get("/movie/top_rated");
            setTopRatedMovies(getTopRatedMovies.data.results);

        };
        requestTopRatedMovies();

    },[]);

    useEffect(()=>{
        const requestUpcomingMovies = async()=>{
            const getUpcomingMovies = await axios.get("/movie/upcoming");
            setUpcomingMovies(getUpcomingMovies.data.results);
        };
        requestUpcomingMovies();
    },[])

    return (
        <Link to = "/movies/id">
           <div className="flex flex-col gap-10 ">
            <div className=" container mx-auto px-4 my-12 lg:px-12 ">
                <h1 className="text-lg lg:text-2xl font-bold text-gray-800 ">
                    The Best of Entertainment
                </h1>
                <EntertainmentCardSlider/>
                
            </div>

               <div className=" bg-gai3-900 py-12">
                    
                    <div className ="container mx-auto px-4 flex flex-col gap-3 lg:px-12" >
                    <div className="  hidden md:flex ">
                    <img src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png"
                    alt="rupay" 
                    className="w-full h-full " />
                    </div>
                  
                    <PosterSlider 
                      image={popularMovies}
                       title="Premiers"
                        subtitle="Brand new releases every Friday" 
                         isDark
                        />
                    </div>
                    </div>

                   <div className="container mx-auto px-4 flex flex-col gap-3 lg:px-12">
                    <PosterSlider 
                      image={topRatedMovies}
                       title="Online Streaming Events"
                        isDark={false}
                        />
                   </div>
                
                   <div className="container mx-auto px-4 flex flex-col gap-3 lg:px-12">
                    <PosterSlider 
                      image={upcomingMovies}
                       title="Outdoor Events"
                        isDark={false}
                        />
                   </div>
               </div>
            </Link>
          
    );
};

export default HomePage;
