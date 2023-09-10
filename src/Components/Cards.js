import React from "react";
import "../Styles/cards.css";

import { motion } from "framer-motion";

const Cards = ({ characters }) => {
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
              rotate: [0, 0, 270, 270, 0],
              borderRadius: ["20%", "20%", "50%", "50%", "20%"],
            }}
          >
            <img
              src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
              alt=""
            />
          </motion.div>

          <h2>{character.name}</h2>
        </motion.div>
      ))}
    </div>
  );
};

export default Cards;
