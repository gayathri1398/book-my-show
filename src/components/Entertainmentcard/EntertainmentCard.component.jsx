import React from 'react';
import Slider from 'react-slick';

const EntertainmentCard = (props) => {
    return (
        <>
        <div className="w-full h-40 px-4 ">
            <img src={props.src}
             alt="testing"
             className="w-full h-full rounded " />
        </div>
        </>
    )
  
};

const EntertainmentCardSlider =()=>{
    const EntertainmentImages =["https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MjQwKyBFdmVudHM%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/workshops-collection-202007231330.png",
                                "https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MTUrIEV2ZW50cw%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/fitness-collection-2020081150.png",
                                "https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-ODUrIEV2ZW50cw%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/kids-collection-202007220710.png",
                                "https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-NjUrIEV2ZW50cw%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/comedy-shows-collection-202007220710.png",
                                "https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MyBFdmVudHM%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/music-shows-collection-202007220710.png",
                                "https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MjArIEV2ZW50cw%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/esports-collection-202011150107.png",
                                "https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MjUrIEV2ZW50cw%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/self-improvement-collection-202007220710.png",
                                "https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MSBFdmVudA%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/food-n-drinks-collection-202010061250.png",
                                "https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MiBFdmVudHM%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/interactive-games-collection-202012041129.png",
                                ];

    let settings = {
        infinity:false,
        autoplay:false,
        slidesToShow:5,
        slidesToScroll:4,
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
                slidesToShow:3,
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


    return(
    <>
   
        <Slider {...settings}>
            {
            EntertainmentImages.map((image)=>
                <EntertainmentCard src={image}/>
            )}   
        </Slider>
   
    </>
    );
};


export default EntertainmentCardSlider;



