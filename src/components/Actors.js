import React from "react";
import { actors } from "../data";

function Actors() {
  //return <div>{/*{code here}*/}</div>;
  let actorsCards = actors.map(actor => (
    <div key={actor.name}>
      <h2>Name: {actor.name}</h2>
      Movies:
      <ul>
        {actor.movies.map(movie => <li key={movie}>{movie}</li>)}
      </ul>
    </div>
  ))
  return (
    <>
    <h1>Actors Page</h1>
     {actorsCards}
    </>
  );
}

export default Actors;
