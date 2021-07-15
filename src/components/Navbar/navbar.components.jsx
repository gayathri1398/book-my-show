import React from "react";
import {BiChevronRight,BiSearch,BiChevronDown,BiMenu} from 'react-icons/bi';

const Navsm = () => {
    return<>
    <div className="flex justify-between items-center">
        <div>
            <h3 className="text-xl font-bold text-white">It All Starts Here!</h3>
            <span className="flex items-center text-gray-300 ">Bengaluru <BiChevronRight/></span>
        </div>
        <div className="text-white w-8 h-8" >
        <BiSearch className="w-full h-full"/>
        </div>
    </div>

    </>

};

const Navmd = ()=> {   
    let style = { color: "grey"};
    return<>
   
    <div className="w-full h-10  flex items-center bg-white p-2">
    <div className=" text-grey-500 h-10"><BiSearch style={style} className="h-full"/></div>
    
    <input type="text" placeholder="  Search for Movies, Events, Plays, Sports and Activities" className="w-full " />
     
   </div>
    </>
    
};

const Navlg = ()=> {
    let style = { color: "grey"};
    return<>
    <div className="flex items-center justify-around w-full">
            <div className ="flex items-center w-5/12 ">
                <div className="w-10 h-10"> 
                    <img src="https://i.ibb.co/zPBYW3H/imgbin-bookmyshow-office-android-ticket-png.png" alt="logo" className="h-8" />
                </div>
                <div className="w-full h-10  flex items-center bg-white p-2 rounded">
                    <div className=" text-grey-500 h-10"><BiSearch style={style} className="h-full"/></div>
                    
                    <input type="text" placeholder="  Search for Movies, Events, Plays, Sports and Activities" className="w-full " />
                    
                </div>
        </div>

        <div className="flex items-center gap-4">
                <span className="flex items-center text-white">Bengaluru <BiChevronDown/></span>
                <div className ="bg-bms-900 rounded ">
                    <h2 className="text-sm text-white border-2  border-none px-2 py-1 ">Sign In</h2>
                </div>
                <div className="w-6 h-6">
                <BiMenu className="text-white w-full h-full"/>
                </div>
        </div>
   </div>
    </>
}


const Navbar = () => {
return <>
   <nav className="bg-bms-700 p-3">
    <div className="md:hidden">{/* Mobile devices */}<Navsm/></div>
    <div className ="hidden md:flex lg:hidden">{/* Tablet devices */}<Navmd/></div>
    <div className ="hidden lg:flex">{/* PC devices */}<Navlg/></div>
   </nav>


</>
};

export default Navbar;