import axios from "axios";
import React from "react";
import Cards from "./Cards";
import "../Styles/main.css";

import { useState, useEffect } from "react";

import logo from "../Images/logo.png";

const Main = () => {
  const [characters, setCharacters] = useState("");
  const [inputSearch, setInputSearch] = useState("Spider-Man");
  // const [loading, setLoading] = useState(false);

  useEffect(() => {
    axios
      .get(`https://gateway.marvel.com:443/v1/public/characters`, {
        params: {
          ts: 1,
          apikey: `617e862772b3ae26bf7f8809a8ed6f70`,
          hash: `dfce4b5bb164d2c4747d086d4f77c326`,
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

    console.log(inputSearch);
  };

  return (
    <div className="main-container">
      <div className="search">
        <img width="80px" src={logo} alt="" />

        <h3>Find your favorite Marvel Hero</h3>
        <form onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Type here"
            onChange={(e) => setInputSearch(e.target.value)}
            value={inputSearch}
          />
        </form>
      </div>

      {characters ? <Cards characters={characters} /> : "Hero not found"}
    </div>
  );
};

export default Main;
