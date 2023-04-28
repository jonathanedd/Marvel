import React from "react";
import "../Styles/main.css";
import charactersImg from "../Images/charactersImg.jpg";
import comicsImg from "../Images/comicsImg.jpg";
import seriesImg from "../Images/seriesImg.jpg";
import logo from "../Images/logo.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";

const Main = () => {
  const [searchChange, setSearchChange] = useState("");
  // const [search, setSearch] = useState([]);

  // const search = props.characters;

  const handleChange = (e) => {
    setSearchChange(e.target.value);
    console.log(searchChange);
  };
  const handleSearch = () => {
    // console.log(search.name);
    console.log("Me ejecute");
  };
  return (
    <div className="main">
      <div className="main-img"></div>

      <div className="upper-bar">
        <h1 className="main-title">Jhonatan Ordonez</h1>

        <form>
          <input
            className="input"
            onChange={handleChange}
            type="text"
            placeholder="Search by Characters, comics or series"
          />
          <AiOutlineSearch className="search-icon" onClick={handleSearch} />
        </form>

        <Link to="/">
          <img src={logo} alt="" />
        </Link>
      </div>

      <div className="main-cards">
        <div className="card">
          <Link style={{ textDecoration: "none" }} to="/characters">
            <img src={charactersImg} alt="" />
            <h3>Characters</h3>
          </Link>
        </div>

        <div className="card">
          <Link style={{ textDecoration: "none" }} to="/comics">
            <img src={comicsImg} alt="" />
            <h3>Comics</h3>
          </Link>
        </div>

        <div className="card">
          <Link style={{ textDecoration: "none" }} to="/series">
            <img src={seriesImg} alt="" />
            <h3>Series</h3>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Main;
