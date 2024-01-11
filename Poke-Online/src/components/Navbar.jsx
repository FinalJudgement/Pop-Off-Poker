import { Link } from "react-router-dom";
import "../styles/navbar.css";

const Navbar = () => {
  return (
    <header id="nav_header">
      <nav>
        <section>
          <Link to="/home">Home</Link>
        </section>
        <section>
          <Link to="/game">Play Poker</Link>
        </section>
      </nav>
    </header>
  );
};

export default Navbar;
