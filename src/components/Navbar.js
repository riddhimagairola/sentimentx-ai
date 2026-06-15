import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{
      background: "#333",
      color: "white",
      padding: "10px",
      display: "flex",
      justifyContent: "space-between"
    }}>
      <h2>SentimentX</h2>

      <div>
        <Link to="/" style={{ color: "white", marginRight: "10px" }}>
          Home
        </Link>

        <Link to="/about" style={{ color: "white", marginRight: "10px" }}>
          About
        </Link>

        <Link to="/dashboard" style={{ color: "white", marginRight: "10px" }}>
          Dashboard
        </Link>

        <Link to="/login" style={{ color: "white" }}>
          Login
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;