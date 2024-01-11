// import React from "react";
// const Card = ({ rank, suit }) => {
const Card = () => {
  // const imagePath = `src/assets/cards/${rank}_of_${suit}.png`; // Adjust the path based on your asset structure

  return (
    <img
      // src={imagePath}
      // alt={`${rank} of ${suit}`}
      style={{ width: "100px", height: "150px", margin: "5px" }}
    />
  );
};

export default Card;
