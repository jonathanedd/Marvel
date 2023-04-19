import React from "react";
import "../Styles/nav.css";
import logo from "../Images/logo.png";

//React router dom
import { Link } from "react-router-dom";
//icons
import { AiOutlineSearch } from "react-icons/ai";

const Nav = () => {
  return (
    <div>
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
    </div>
  );
};

export default Nav;
