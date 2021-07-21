import React from 'react'

const MovieInfo = () => {
    return (
        <>
        <div className="flex flex-col items-start gap-3  md:gap-5  lg:gap-10  ">
            <div className= "w-32 h-6 flex  items-center gap-4">
                <img src="https://in.bmscdn.com/moviemode/tvod/premiere-tag.png" 
                alt="Premier" 
                className="h-full w-full"/> 
                <p className="bg-gai3-900 rounded-lg text-white text-xs p-1 w-full"> Streamingnow</p>
            </div>
            <div className="flex flex-col-reverse lg:flex-col ">
                <div className="text-white w-full h-16 flex flex-col gap-2 lg:gap-5">
                    <h1 className="hidden lg:block font-bold text-4xl">Zack Snyder`s Justice League</h1>
                    <h3 className="text-gray-300 text-sm md:text-base"> English  &bull;  Language: Audio(1), Subtitle(1)</h3>
                    <h3 className="w-full text-sm md:text-base"> 4h 1m &bull; Fantasy, Action, Adventure &bull; 16+ &bull; 18 Mar,2021</h3>
                </div>
                <div className="p-1 text-white w-screen h-12 flex lg:mt-28 ">
                    <button className="w-1/2 bg-bms-900 rounded-md lg:w-56">Rent₹149</button>
                    
                    <button className="w-1/2 bg-bms-900  rounded-md mx-2 lg:w-56"> Buy₹749</button>
                </div>
            </div>
        </div>
     </>
    )
    }
export default MovieInfo
