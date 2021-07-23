import React from 'react';



// components
import Poster from '../components/Poster/Poster.component';
import PlaysFilter from '../components/PlaysFilter/PlaysFilter.component';




const Plays=()=>{
    return<>
    {/* plays in bengalure */}
    <div className="container mx-auto px-4 lg:flex flex-row-reverse">
        <div className="flex flex-col gap-3 lg-3/4">
        <h2 className="font-bold text-2xl text-gray-700 pl-2 md:pl-4">Plays in Bengalure</h2>
            <div className="flex flex-wrap w-full md:gap-2 lg:gap-0 " >
                <div className="w-1/2 md:w-60 my-3  ">
                    <Poster  src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyNCBKdWwgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:oi-discovery-catalog@@icons@@bundle-icon-shadow-4x.png,ox-15,oy-15,ow-50/et00302444-qsjwfmgjgk-portrait.jpg"
                    alt="ponniyan selvan"
                    title="Tvk Cultural Presents Ponniyin Selvan"
                    subtitle="Multiple Venues"
                    isDark={false}/>
                    </div>
                    <div className="w-1/2 md:w-60 my-3 ">
                    <Poster  src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyNCBKdWwgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:oi-discovery-catalog@@icons@@bundle-icon-shadow-4x.png,ox-15,oy-15,ow-50/et00302444-qsjwfmgjgk-portrait.jpg"
                    alt="ponniyan selvan"
                    title="Tvk Cultural Presents Ponniyin Selvan"
                    subtitle="Multiple Venues"
                    isDark={false}/>
                    </div>
                    <div className="w-1/2 md:w-60 my-3 ">
                    <Poster  src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyNCBKdWwgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:oi-discovery-catalog@@icons@@bundle-icon-shadow-4x.png,ox-15,oy-15,ow-50/et00302444-qsjwfmgjgk-portrait.jpg"
                    alt="ponniyan selvan"
                    title="Tvk Cultural Presents Ponniyin Selvan"
                    subtitle="Multiple Venues"
                    isDark={false}/>
                    </div>
                    <div className="w-1/2 md:w-60 my-3 ">
                    <Poster  src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyNCBKdWwgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:oi-discovery-catalog@@icons@@bundle-icon-shadow-4x.png,ox-15,oy-15,ow-50/et00302444-qsjwfmgjgk-portrait.jpg"
                    alt="ponniyan selvan"
                    title="Tvk Cultural Presents Ponniyin Selvan"
                    subtitle="Multiple Venues"
                    isDark={false}/>
                    </div>
                  
            </div>
        </div>
    {/* filters */}
    <div className ="hidden lg:block lg:w-1/4 px-4">
    <h2 className="font-bold text-2xl text-gray-700 mb-6">Filters</h2>
    <div className="flex flex-col gap-5">
    <PlaysFilter title="Date"
    tags={["Today","Tomorrow","ThisWeekend"]}
    />
     <PlaysFilter title="Language"
    tags={["Tamil","Telugu","English"]}
    />
    <PlaysFilter title="Categories"
    tags={["Theatre"]}
    />
    <PlaysFilter title="Genres"
    tags={["Drama","Comedy","Adaptation","Historical"]}
    />
    <PlaysFilter title="More Filters"
    tags={["Online Streaming","Kids Allowed"]}
    />
    <PlaysFilter title="Price"
    tags={["Free","0-500","500-1000"]}
    />
    </div>
    </div>
    </div>
    </>
    
}



export default Plays;




