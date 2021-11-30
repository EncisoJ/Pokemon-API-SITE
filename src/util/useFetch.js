import { useState, useEffect } from "react";
const API_ENDPOINT = `https://pokeapi.co/api/v2/move`;

const useFetch = (query) => {
  //   const [query, setQuery] = useState('?limit=844');
  const [moves, setMoves] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchMoves = async (url) => {
    setLoading(true);
    const response = await fetch(url);
    const data = await response.json();
    if (data.results) {
      setMoves(data.results);
    } else {
      setMoves(data);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchMoves(`${API_ENDPOINT}${query}`);
    //https://pokeapi.co/api/v2/move  then  /movename
  }, [query]);

  return { moves, loading,  };
};

export default useFetch;
