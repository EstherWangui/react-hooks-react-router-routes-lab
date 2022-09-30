import React from "react";
import { movies } from "../data";

function Movies() {
 //return <div>{/*{code here}*/}</div>;
 let movieCard = movies.map(movie => (
  <div key={movie.title}>
    Name: {movie.title}<br/>
    Time: {movie.time}
    <ul>
      {movie.genres.map(genre => <li key={genre}>{genre}</li>)}
    </ul>
  </div>
))
  return (
      <>
     <h1>Movies Page</h1>
      {movieCard}

      </>
  )
}

export default Movies;
