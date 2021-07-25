import React, {Children, useState} from 'react';

export const MovieContext = React.createContext();

const MovieProvider = ({children})=>{
 const [movie, setmovie] = useState({
     id:0,
     original_title = "",
     poster_path ="",
     backdrop_path = "",
     overview = ""

 });

    return (
    <>
    <MovieContext.Provider value={{movie,setmovie}} >
        {children}
    </MovieContext.Provider>
    </>
    )
    };
    export default MovieProvider;