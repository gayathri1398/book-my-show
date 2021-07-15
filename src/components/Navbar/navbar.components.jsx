import React from "react";
import {BiChevronRight,BiSave,BiSearch} from 'react-icons/bi';

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
    const style = { color: "grey"};
    return<>
   
    <div className="w-full h-10  flex items-center bg-white p-2">
    <div className=" text-grey-500 h-10"><BiSearch style={style} className="h-full"/></div>
    
    <input type="text" placeholder="  Search for Movies, Events, Plays, Sports and Activities" className="w-full " />
     
   </div>
    </>
    
};

const Navlg = ()=> {
    
}


const Navbar = () => {
return <>
   <nav className="bg-bms-700 p-3">
    <div className="md:hidden">{/* Mobile devices */}<Navsm/></div>
    <div className ="hidden md:flex lg:hidden">{/* Tablet devices */}<Navmd/></div>
    <div className ="hidden lg:flex">{/* PC devices */}</div>
   </nav>


</>
};

export default Navbar;