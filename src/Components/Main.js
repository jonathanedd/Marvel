import React from "react";
import "../Styles/main.css";
import charactersImg from "../Images/charactersImg.jpg";
import comicsImg from "../Images/comicsImg.jpg";
// import mainImg from "../Images/main-img.webp";

//hooks
// import { useState } from "react";

//React router dom
import { Link } from "react-router-dom";
//icons

const Main = () => {
  // const [search, setSearch] = useState("");
  return (
    <div className="main">
      <div className="main-img">hola</div>
      <div className="card">
        <Link to="/characters">
          <img src={charactersImg} style={{ width: "150px" }} alt="" />
          Characters
        </Link>
      </div>

      <div>
        <Link to="/comics">
          <img src={comicsImg} style={{ width: "135px" }} alt="" />
          Comics
        </Link>
      </div>
    </div>
  );
};

export default Main;
