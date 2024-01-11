import { Poker, Player } from "../engine/utils/index.mjs"; // Adjust the path based on your actual file structure

// Rest of your code...

const PokerTable = () => {
  const pokerGame = new Poker();

  const player1 = new Player("Carlos", 1000);
  const player2 = new Player("Dan", 1000);

  pokerGame.addPlayer(player1);
  pokerGame.addPlayer(player2);

  // pokerGame.play();

  return (
    <section id="poker-page">
      <h1>Pop Off Texas Hold&aposem</h1>
      <img src="src/assets/table/poker-table.jpg" alt="" />
    </section>
  );
};

export default PokerTable;
