import axios from "axios";
import React from "react";
import Cards from "./Cards";
import "../Styles/main.css";

import { useState, useEffect } from "react";

const Main = () => {
  const [characters, setCharacters] = useState();

  const marvelApi = () => {
    axios
      .get(
        `https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=617e862772b3ae26bf7f8809a8ed6f70&hash=dfce4b5bb164d2c4747d086d4f77c326`
      )
      .then((res) => {
        setCharacters(res.data.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  console.log(characters);

  useEffect(() => {
    marvelApi();
  }, []);

  return (
    <>
      <div className="search">
        <h3>Search for your fav Hero</h3>
        <form>
          <input type="text" placeholder="Type here" />
          <button type="submit">Submit</button>
        </form>
      </div>

      {characters ? <Cards characters={characters} /> : "Hero not found"}
    </>
  );
};

export default Main;
