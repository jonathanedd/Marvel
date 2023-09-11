import React from "react";
import { useState } from "react";

const Pruebas = () => {
  const [inputInfo, setInputInfo] = useState("");

  const handleInput = (e) => {
    e.preventDefault();
    setInputInfo(e.target.value);
    console.log(inputInfo);
  };

  return (
    <div>
      <form action="">
        <input type="text" onChange={handleInput} />
        <button onClick={handleInput}>Submit</button>
      </form>
    </div>
  );
};

export default Pruebas;
