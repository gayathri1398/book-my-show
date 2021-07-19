import React from "react";
import {BiShareAlt,BiSearch,BiMenu} from 'react-icons/bi';
import {MdArrowDropDown} from 'react-icons/md'

const Navsm = () => {
    return<>
    <div className="flex justify-between items-center">
        <div>
            <h3 className="text-xl font-bold text-white">It All Starts Here!</h3>
         
        </div>
        <div className="text-white w-8 h-8" >
        <BiShareAlt className="w-full h-full"/>
        </div>
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
                    <div className=" text-grey-500 h-10"><BiSearch style={style} className="h-full "/></div>
                       <input type="text" placeholder="  Search for Movies, Events, Plays, Sports and Activities" className="w-full " />
                         </div>
            </div>

        <div className="flex items-center gap-5">
                <span className="flex items-center text-white cursor-pointer">Bengaluru <MdArrowDropDown/></span>
                <div className ="bg-bms-900 rounded ">
                    <h2 className="text-sm text-white border-2  border-none px-2 py-1 cursor-pointer ">Sign In</h2>
                </div>
                <div className="w-6 h-6">
                <BiMenu className="text-white w-full h-full"/>
                </div>
        </div>
   </div>
    </>
}


const MovieNavbar = () => {
return <>
   <nav className="absolute  inset-x-0 z-30 bg-opacity-10  backdrop-filter backdrop-blur-lg lg:relative lg:bg-bms-700 p-4">
    <div className="md:hidden">{/* Mobile devices */}<Navsm/></div>
    <div className ="hidden md:block lg:hidden">{/* Tablet devices */}<Navsm/></div>
    <div className ="hidden lg:block">{/* PC devices */}<Navlg/></div>
   </nav>


</>
};

export default MovieNavbar;