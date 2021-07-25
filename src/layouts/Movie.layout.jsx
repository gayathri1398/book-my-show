import React from 'react';
import { useParams } from 'react-router';

import MovieNavbar from '../components/Navbar/movienavbar.component';

const MovieLayout =(props)=>{
  const {id} = {useParams};

    return<>
    <MovieNavbar/>
    {props.children}
    </>
}
export default MovieLayout;