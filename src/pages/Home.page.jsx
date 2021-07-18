import React from 'react';

// components
import EntertainmentCardSlider from '../components/Entertainmentcard/EntertainmentCard.component';
import Premier from '../components/Premier/Premier.component';


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

               <div className="bg-gai3-900 py-12">
                
                <div className ="container mx-auto px-4 flex flex-col gap-3 lg:px-12" >
                <div className=" hidden md:flex">
               <img src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png"
                alt="rupay" 
                className="w-full h-full" />
                </div>
                <h2 className="text-xl font-bold text-white">Premiers</h2>
                <p className ="text-sm text-white "> Brand new release every Friday</p>

                <Premier />
               </div>
               </div>
               </div>
            </>
          
           
            
           
       
       
    );
};

export default HomePage;
