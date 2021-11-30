import React from "react";
import useFetch from "../util/useFetch";
import { Link } from "react-router-dom";

const Home = () => {
  const { moves, loading } = useFetch("?limit=844");
  console.log(moves);

  if (loading) {
    return <div className="loading"></div>;
  }

  return (
    <div className="app">
      {moves.map((move) => {
        const { name, url } = move;
        return (
          <Link to={name}>
            <div className="IndMove">
               <h2>{name}</h2>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Home;
