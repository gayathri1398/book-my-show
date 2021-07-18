import React from 'react';

// components
import EntertainmentCardSlider from '../components/Entertainmentcard/EntertainmentCard.component';

import PosterSlider from '../components/PosterSlider/PosterSlider.component';

// config
import TempPosters from '../config/TempPosters.config'

const HomePage = () => {
    return (
        <>
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
                      image={TempPosters}
                       title="Premiers"
                        subtitle="Brand new releases every Friday" 
                         isDark
                        />
                    </div>
                    </div>

                   <div className="container mx-auto px-4 flex flex-col gap-3 lg:px-12">
                    <PosterSlider 
                      image={TempPosters}
                       title="Online Streaming Events"
                        isDark={false}
                        />
                   </div>
                
                   <div className="container mx-auto px-4 flex flex-col gap-3 lg:px-12">
                    <PosterSlider 
                      image={TempPosters}
                       title="Outdoor Events"
                        isDark={false}
                        />
                   </div>
               </div>
            </>
          
    );
};

export default HomePage;
