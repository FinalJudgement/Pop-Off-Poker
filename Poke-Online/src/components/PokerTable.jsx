import React, { useEffect, useState } from "react";
import Card from "./Card";
import Choices from "./Choices";
import { Poker, Player } from "../engine/utils/index.mjs";
import "../styles/pokerTable.css";

const PokerTable = () => {
  const [pokerGame, setPokerGame] = useState(new Poker());
  const [player1, setPlayer1] = useState(new Player("Carlos", 1000));
  const [player2, setPlayer2] = useState(new Player("Dan", 1000));
  const [handsDealt, setHandsDealt] = useState(false);

  useEffect(() => {
    // Add players to the game when the component mounts
    pokerGame.addPlayer(player1);
    pokerGame.addPlayer(player2);

    // Deal hands to players when the component mounts
    pokerGame.dealHands([player1, player2]);

    // Update state to indicate that hands are dealt
    setHandsDealt(true);
  }, []);

  useEffect(() => {
    // Render cards when hands are dealt
    if (handsDealt) {
      setPokerGame({ ...pokerGame });
    }
  }, [handsDealt]);

  return (
    <section id="poker-page">
      <h1>Pop Off Texas Hold&apos;em</h1>
      <section id="poker-table">
        <img src="src/assets/table/poker-table.jpg" alt="" />
      </section>

      {/* Render Player 2's cards dynamically */}
      <section id="cards">
        <h2>{player2.name}&apo s Hand</h2>
        {player2.hand.map((card, index) => {
          const rank = card.split(" ")[0];
          const suit = card.split(" ")[2];
          return <Card key={index} rank={rank} suit={suit} />;
        })}

        {/* Render Player 1's cards dynamically */}
        <h2>{player1.name}&apos s Hand</h2>
        {player1.hand.map((card, index) => {
          const rank = card.split(" ")[0];
          const suit = card.split(" ")[2];
          return <Card key={index} rank={rank} suit={suit} />;
        })}
        <Choices />
      </section>
    </section>
  );
};

export default PokerTable;
