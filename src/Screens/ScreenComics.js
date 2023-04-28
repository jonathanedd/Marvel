import React from "react";
import axios from "axios";
import "../Styles/screencomics.css";
import logo from "../Images/logo.png";

//Hooks
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { HiOutlineArrowLeft } from "react-icons/hi";
import { MdFavorite } from "react-icons/md";

const ScreenComics = () => {
  const [comics, setComics] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://gateway.marvel.com:443/v1/public/comics?ts=1&apikey=617e862772b3ae26bf7f8809a8ed6f70&hash=dfce4b5bb164d2c4747d086d4f77c326"
      )
      .then((res) => {
        setComics(res.data.data.results);
        console.log(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="comics-main">
      <div className="upper-bar">
        <Link to="/">
          <HiOutlineArrowLeft className="characters-icon" />
        </Link>
        <h1>Comics</h1>
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
      </div>

      <div className="comic-cards">
        {comics.map((comic) => (
          <div className="comic-card" key={comic.id}>
            <img
              src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
              alt=""
            />
            <h3>{comic.title}</h3>
            <Link>
              <MdFavorite className="characters-icon" />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScreenComics;
