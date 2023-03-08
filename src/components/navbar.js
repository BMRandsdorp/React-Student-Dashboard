import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="dropdown">
        <button className="dropbtn">
          Menu
          <i class="fa fa-caret-down"></i>
        </button>
        <div className="dropdown-content">
          <Link to="/">Home</Link>

          <Link to="/evelyn">Evelyn</Link>

          <Link to="/aranka">Aranka</Link>

          <Link to="/floris">Floris</Link>

          <Link to="/Hector">Hector</Link>

          <Link to="/martina">Martina</Link>

          <Link to="/maurits">Maurits</Link>

          <Link to="/rahima">Rahima</Link>

          <Link to="/sandra">Sandra</Link>

          <Link to="/wietske">Wietske</Link>

          <Link to="/storm">Storm</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
