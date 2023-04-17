import React from "react";

//React router dom
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <div>
      <h3>Hi This is Main</h3>
      <Link to="/characters">Characters</Link>
    </div>
  );
};

export default Main;
