import React from "react";
import "../Styles/main.css";
import charactersImg from "../Images/charactersImg.jpg";
import comicsImg from "../Images/comicsImg.jpg";

//React router dom
import { Link } from "react-router-dom";
//icons

const Main = () => {
  return (
    <div className="main">
      <h1 className="main-title">Welcome to the amazing universe of Marvel</h1>
      <div className="main-cards">
        <div className="card">
          <Link to="/characters">
            <img src={charactersImg} style={{ width: "200px" }} alt="" />
            Characters
          </Link>
        </div>

        <div>
          <Link to="/comics">
            <img src={comicsImg} style={{ width: "185px" }} alt="" />
            Comics
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Main;
