import React from 'react';


const Poster = (props) => {
    return (
      <div className="  flex  flex-col items-start gap-3 px-2 lg:px-4  ">
          <div className="h-64 lg:h-80 ">
            <img src={props.src}
             alt={props.title}
             className="h-full w-full rounded-xl" />
        </div>

      
            <h3 className={`text-lg font-bold ${props.isDark ? "text-white":"text-gray-700"}`}>
                {props.title}
            </h3>

            <p className={`text-sm ${props.isDark ? "text-white":"text-gray-700"}`}>
                {props.subtitle}
            </p>
            </div>
     
    )
};

export default Poster;





