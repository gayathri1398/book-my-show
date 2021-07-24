import React from "react";
import axios from "axios";

// HOC
import DefaultHOC from "./HOC/Default.HOC";
import MovieHOC from "./HOC/Movie.HOC";

// Pages
import HomePage from "./pages/Home.page";
import MoviePage from "./pages/Movie.page";
import Plays from "./pages/Plays.page";


// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// axios default settings
axios.defaults.baseURL="https://api.themoviedb.org/3";
axios.defaults.params={};   //by default the params object is not present so creating it empty first
axios.defaults.params["api_key"]=process.env.REACT_APP_API_KEY;



function App() {

  return (
    
  <>
  <DefaultHOC path ="/" exact component={HomePage} />
  <MovieHOC path ="/movies/:id" exact component={MoviePage}/>
  <DefaultHOC path ="/plays" exact component ={Plays}/>

  </>
  );
}

export default App;
