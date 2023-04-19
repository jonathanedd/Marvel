import React from "react";
import axios from "axios";
import "../Styles/screencharacters.css";

import { Link } from "react-router-dom";

//Icons
import { MdFavorite } from "react-icons/md";

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
    <div className="characters-main">
      <Link to="/">Back</Link>
      <h1>Characters</h1>

      <div className="character-cards">
        {characters.map((character) => (
          <div className="character-card" key={character.id}>
            <img
              src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
              alt=""
            />
            <h3>Name: {character.name}</h3>
            <Link>
              <MdFavorite />
            </Link>

            <span>Story: {character.stories.items[0]?.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScreenCharacters;
