import React from 'react'
import MovieInfo from './MovieInfo.component';

const MovieHero = () => {
    return (
    <>
        <div>
        {/* 📱 Mobile Devices */}
       <div className="relative md:hidden" style={{height:"calc(180vw)"}}>
              <div className="absolute bg-black opacity-50 h-48 w-full bottom-0 z-20 "/>
              <div  className="absolute bottom-4 z-30 "> <MovieInfo/>  </div>
               <img src=" https://in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/zack-snyder-s-justice-league-et00047164-10-04-2021-03-22-49.jpg"
                alt="movieimage"
                className="h-full w-full " />
       </div>
      
      
       {/* tablet devices */}
       <div className=" hidden md:block md:relative  lg:hidden" style={{height:" calc(120vw)"}} >
      
       <div className="absolute bg-black opacity-50 h-52 w-full bottom-0 z-20" /> 
       <div  className="absolute bottom-2 z-30 "> <MovieInfo/>  </div>
      
       <img src=" https://in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/zack-snyder-s-justice-league-et00047164-10-04-2021-03-22-49.jpg"
                alt="movieimage"
                className="h-full w-full" />
         
       </div>
       
      
      
       {/* PC devices */}
       <div className="hidden lg:block relative" style={{height:"30rem"}}>
           <div className="absolute w-full h-full z-20" style={{backgroundImage :"linear-gradient(90deg, rgb(34, 34, 34) 24.97%, rgb(34, 34, 34) 38.3%, rgba(34, 34, 34, 0.04) 97.47%, rgb(34, 34, 34) 100%)"}}/>
             
             <div className="absolute h-96 w-64 z-30 top-12 left-40 flex gap-10 items-center ">
                 <img src="https://in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/zack-snyder-s-justice-league-et00047164-10-04-2021-03-22-49.jpg"
                  alt="posterimage" 
                  className="h-full w-full rounded-lg"/>
                  <MovieInfo/>
             </div>
             
             <img src=" https://in.bmscdn.com/iedb/movies/images/extra/horizontal_no_logo/mobile/listing/xxlarge/zack-snyder-s-justice-league-et00047164-10-04-2021-03-22-49.jpg"
                alt="movieimage"
                className="h-full w-full" />
                
       </div>
       </div>
       </>
    )
   
}

export default MovieHero;
