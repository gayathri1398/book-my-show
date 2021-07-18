import React from 'react';

// components
import EntertainmentCardSlider from '../components/Entertainmentcard/EntertainmentCard.component';
import Premier from '../components/Premier/Premier.component';


const HomePage = () => {
    return (
        <>
           
            <div className=" container mx-auto px-16 ">
                <h1 className="text-lg lg:text-2xl font-bold text-gray-800 my-3">
                    The Best of Entertainment
                </h1>
                <EntertainmentCardSlider/>
                <Premier/>
            </div>

              <div className="flex flex-col">
              <div className="w-full  ">
               <img src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png"
                alt="rupay" 
                className="w-full" />
               </div>
                
                <div className="bg-gai3-900 mr-4 w-full">
              
               </div>
               </div>
            
          
           
            
           
       
        </>
    );
};

export default HomePage;
