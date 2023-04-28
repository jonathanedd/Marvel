import React from "react";
import axios from "axios";
import logo from "../Images/logo.png";
import "../Styles/screencharacters.css";

//Icons
import { MdFavorite } from "react-icons/md";
import { HiOutlineArrowLeft } from "react-icons/hi";

//hooks
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import Main from "../Components/Main";

const ScreenCharacters = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=617e862772b3ae26bf7f8809a8ed6f70&hash=dfce4b5bb164d2c4747d086d4f77c326"
      )
      .then((res) => {
        setCharacters(res.data.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  console.log(characters);

  return (
    <div className="characters-main">
      <div className="upper-bar">
        <Link to="/">
          <HiOutlineArrowLeft className="characters-icon" />
        </Link>
        <h1>Characters</h1>
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
      </div>

      <div className="character-cards">
        {characters.map((character) => (
          <div className="character-card" key={character.id}>
            <img
              src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
              alt=""
            />
            <h3>Name: {character.name}</h3>
            <span>Story: {character.stories.items[0]?.name}</span>

            <Link>
              <MdFavorite className="characters-icon" />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScreenCharacters;
