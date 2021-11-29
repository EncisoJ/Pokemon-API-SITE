import React from "react";
import useFetch from "../util/useFetch";
import { Link } from "react-router-dom";

const Home = () => {
  const { moves, loading } = useFetch('?limit=844');
  console.log(moves);

  if (loading) {
    return <div className="loading"></div>;
  }

  return (
    <div className="app">
      {moves.map((move) => {
        const { name, url } = move;
        return (
          <div className="IndMove">
            {" "}
            <Link to = {name}> {name} </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
