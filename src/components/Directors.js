import React from "react";
import { directors } from "../data";

function Directors() {
  //return <div>{/*{code here}*/}</div>;
  let directorsCards = directors.map(director => (
    <div key={director.name}>
      Name: {director.name}
      Movies:
      <ul>
        {director.movies.map(movie => <li key={movie}>{movie}</li>)}
      </ul>
    </div>
  ))


  return (
    <>
    <h1>Directors Page</h1>
    {directorsCards}
    </>
  )
}

export default Directors;
