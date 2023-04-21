import React from "react";
import "../Styles/main.css";
import charactersImg from "../Images/charactersImg.jpg";
import comicsImg from "../Images/comicsImg.jpg";
import logo from "../Images/logo.png";
// import mainImg from "../Images/main-img.webp";

//hooks
// import { useState } from "react";

//React router dom
import { Link } from "react-router-dom";
//icons
import { AiOutlineSearch } from "react-icons/ai";

const Main = () => {
  // const [search, setSearch] = useState("");
  return (
    <div className="main">
      <div className="main-img"></div>

      <div className="upper-bar">
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
        <form action="">
          <input className="input" type="text" placeholder="Search" />
          <AiOutlineSearch />
        </form>
        <h1 className="main-title">Welcome to the amazing universe of</h1>
      </div>

      <div className="main-cards">
        <div className="card">
          <Link to="/characters">
            <img src={charactersImg} alt="" />
            <h3>Characters</h3>
          </Link>
        </div>

        <div className="card">
          <Link to="/comics">
            <img src={comicsImg} alt="" />
            <h3>Comics</h3>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Main;
