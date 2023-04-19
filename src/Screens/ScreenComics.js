import React from "react";
import axios from "axios";
import "../Styles/screencomics.css"
//Hooks
import { useEffect, useState } from "react";

//URLS
//Initial :  https://gateway.marvel.com:443/v1/public/comics?ts=1&apikey=617e862772b3ae26bf7f8809a8ed6f70&hashdfce4b5bb164d2c4747d086d4f77c326
//PUblic : 617e862772b3ae26bf7f8809a8ed6f70
//Private: 446b5eb921f3ab830d4235fbcee16a915970bade

// ts : 1446b5eb921f3ab830d4235fbcee16a915970bade617e862772b3ae26bf7f8809a8ed6f70
// hash : dfce4b5bb164d2c4747d086d4f77c326

const ScreenComics = () => {
  const [comics, setComics] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://gateway.marvel.com:443/v1/public/comics?ts=1&apikey=617e862772b3ae26bf7f8809a8ed6f70&hash=dfce4b5bb164d2c4747d086d4f77c326"
      )
      .then((res) => {
        setComics(res.data.data.results);
        console.log(res.data.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h1>Comics</h1>
      <div className="comic-cards">
        {comics.map((comic) => (
          <div className="comic-card" key={comic.id}>
            <img src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`} alt="" />
            <h3>{comic.title}</h3>

          </div>
        ))}
      </div>
    </div>
  );
};

export default ScreenComics;
