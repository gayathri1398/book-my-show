import axios from 'axios';
import React from 'react';
import { useParams} from 'react-router-dom';
import { useContext,useEffect } from 'react';


// components
import MovieNavbar from '../components/Navbar/movienavbar.component';


// context
import { MovieContext } from '../context/movie.context';


const MovieLayout =(props)=>{
  const {id} = useParams();
  const {movie,setmovie} = useContext(MovieContext) ;

  useEffect(()=>{
    const requestMovie = async()=>{
      const getMovie = await axios.get(`/movie/${id}`);
      setmovie(getMovie.data);
    };
    requestMovie();

  },[])

    return<>
    <MovieNavbar/>
    {props.children}
    </>
}
export default MovieLayout;