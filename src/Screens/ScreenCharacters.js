import React from "react";
import axios from "axios";

//hooks
import { useEffect, useState } from "react";

const ScreenCharacters = () => {
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=617e862772b3ae26bf7f8809a8ed6f70&hash=dfce4b5bb164d2c4747d086d4f77c326"
      )
      .then((res) => {
        console.log(res.data.data.results);
        setCharacters(res.data.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h1>Marvel</h1>
      {characters.map((character) => (
        <div key={character.id}>
          <h3>Name: {character.name}</h3>
          <img
            src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
            alt=""
          />
        </div>
      ))}
    </div>
  );
};

export default ScreenCharacters;
