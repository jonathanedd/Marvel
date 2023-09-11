import axios from "axios";
import React from "react";
import Cards from "./Cards";
import "../Styles/main.css";

import { useState, useEffect } from "react";
// import { calcLength } from "framer-motion";

const Main = () => {
  const [characters, setCharacters] = useState();
  const [inputSearch, setInputSearch] = useState("");
  // const [loading, setLoading] = useState(false);

  useEffect(() => {
    axios
      .get(`https://gateway.marvel.com:443/v1/public/characters`, {
        params: {
          ts: 1,
          apikey: "617e862772b3ae26bf7f8809a8ed6f70",
          hash: "dfce4b5bb164d2c4747d086d4f77c326",
          nameStartsWith: inputSearch,
        },
      })
      .then((res) => {
        setCharacters(res.data.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [inputSearch]);

  console.log(characters);

  const handleSearch = (e) => {
    e.preventDefault();
    setInputSearch(e.target.value);

    console.log(inputSearch);
  };

  return (
    <>
      <div className="search">
        <h3>Search for your fav Hero</h3>
        <form>
          <input
            type="text"
            placeholder="Type here"
            onChange={handleSearch}
            value={inputSearch}
          />
          <button onClick={handleSearch}>Submit</button>
        </form>
      </div>

      {characters ? <Cards characters={characters} /> : "Hero not found"}
    </>
  );
};

export default Main;
