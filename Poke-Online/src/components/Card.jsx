import React from "react";
import "../styles/card.css";

const Card = ({ rank, suit }) => {
  const imagePath = `src/assets/cards/${rank}_of_${suit}.png`;

  return <img className="card" src={imagePath} alt={`${rank} of ${suit}`} />;
};

export default Card;
