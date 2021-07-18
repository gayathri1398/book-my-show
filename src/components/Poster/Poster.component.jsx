import React from 'react';


const Poster = (props) => {
    return (
      <div className="  flex  flex-col items-start gap-3 px-1 h-96 ml-4 mr-6  ">
          <div className="h-80 px-4">
            <img src={props.src}
             alt={props.title}
             className="h-full w-full rounded-xl" />
        </div>

        <div className="ml-4">
            <h3 className={`text-lg font-bold ${props.isDark ? "text-white":"text-gray-700"}`}>
                {props.title}
            </h3>

            <p className={`text-sm ${props.isDark ? "text-white":"text-black"}`}>
                {props.subtitle}
            </p>
            </div>
      </div>
    )
};

export default Poster;





