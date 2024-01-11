// import React from "react";
// import Card from "./Card"; // Make sure to adjust the path based on your project structure

// const Player = ({ name, hand }) => {
const Player = () => {
  return (
    <div>
      <h2>{name}</h2>
      <div style={{ display: "flex" }}>
        {/* {hand.map((card, index) => (
          <Card key={index} rank={card.rank} suit={card.suit} />
        ))} */}
      </div>
    </div>
  );
};

export default Player;
