import React from "react";
import { useState } from "react";
import "../Styles/cards.css";

import { motion } from "framer-motion";
import CharacterDetail from "./CharacterDetail";

const Cards = ({ characters }) => {
  const [characterSelect, setCharacterSelect] = useState(null);

  const handleCharacterClick = (character) => {
    setCharacterSelect(character);
  };
  return (
    <div className="cards">
      {characters.map((character) => (
        <motion.div
          key={character.id}
          className="card"
          initial={{ opacity: 0, y: -1000 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 1000 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <motion.div
            whileHover={{
              scale: [1, 2, 2, 1, 1],
              // rotate: 360,
              borderRadius: ["20%", "20%", "50%", "50%", "20%"],
            }}
          >
            <img
              src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
              alt=""
              onClick={() => handleCharacterClick(character)}
            />
          </motion.div>

          <h2>{character.name}</h2>
        </motion.div>
      ))}

      <div className="character-detail">
        {characterSelect && (
          <button onClick={() => setCharacterSelect(!characterSelect)}>
            Cerrar
          </button>
        )}
        {characterSelect && <CharacterDetail character={characterSelect} />}
      </div>
    </div>
  );
};

export default Cards;
