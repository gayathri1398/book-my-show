import React from "react";


// HOC
import DefaultHOC from "./HOC/Default.HOC";
import MovieHOC from "./HOC/Movie.HOC";

// Pages
import HomePage from "./pages/Home.page";
import MoviePage from "./pages/Movie.page";


// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";





function App() {

  return (
    
  <>
  <DefaultHOC path ="/" exact component={HomePage} />
  <MovieHOC path ="/movies/:id" exact component={MoviePage}/>
  </>
  );
}

export default App;
