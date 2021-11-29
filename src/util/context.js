import React, { useState, useEffect } from "react";

const API_ENDPOINT = `https://pokeapi.co/api/v2/ability/`
export const useFetch = (searchQuery) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState({ show: false, msg: "" });
  const [movies, setMovies] = useState(null);

  const fetchHits = async (url) => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();

      if (data.Response === "True") { //needs to be swapped out, data.response myu not be in pokemon api
        setMovies(data.Search || movies); // check all data. tags, probably legacy
        setError({ show: false, msg: "" });
      } else {
        setError({ show: true, msg: data.Error });
      }
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    console.log(`${API_ENDPOINT}${searchQuery}`);
    fetchMovies(`${API_ENDPOINT}${searchQuery}`);
  }, [searchQuery]);

  return { loading, error, movies };
};
