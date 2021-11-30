import React from "react";
import { Link } from "react-router-dom";
import useFetch from "../util/useFetch";

const Move = () => {
  console.log(window.location.pathname);
  const { moves, loading } = useFetch(window.location.pathname);
  const { name, accuracy, pp, power, id, priority} = moves;
  console.log(moves);
  if (loading) {
    <div className="loading"></div>;
  }
  return (
    <div className="MoveBorder">
     
      <div className="stats">
        <div className="Name"> <p>Name: {name}</p></div>
        <div className="ID"> <p>ID: {id}</p></div>
        <div className="Accuracy"> <p>Accuracy: {accuracy}</p></div>
        <div className="PP"> <p>Power points: {pp}</p></div>
        <div className="Power"> <p>Power: {power}</p></div>
        <div className="Priority"> <p>Priority: {priority}</p> </div>

        

      </div>
      <Link to="/">back to Home</Link>
    </div>
  );
};

export default Move;
