import React from 'react';
// components
import EntertainmentCardSlider from '../components/Entertainmentcard/EntertainmentCard.component';


const HomePage = () => {
    return (
        <>
        <div className=" container mx-auto p-8">
            <h1 className="text-2xl font-bold text-gray-800 my-3">The Best of Entertainment</h1>
            <EntertainmentCardSlider/>
        </div>
        </>
    );
};

export default HomePage;
