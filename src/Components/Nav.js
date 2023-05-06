import React from "react";
import logo from "../Images/logo.png";
import { Link } from "react-router-dom";

//icnos
import { HiOutlineArrowLeft } from "react-icons/hi";

const Nav = () => {
  return (
    <div>
      <div className="upper-bar">
        <Link to="/">
          <HiOutlineArrowLeft className="characters-icon" />
        </Link>
        <h1>Characters</h1>
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
      </div>
    </div>
  );
};

export default Nav;
