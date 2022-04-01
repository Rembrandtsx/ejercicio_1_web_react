import React from "react";
import logo from "../assets/logo.svg";
function Navigation() {
  return (
    <nav>
      <img src={logo} alt="Museo de arte moderno" />
      <ul>
        <li className="active">Museos</li>
        <li>Artistas</li>
        <li>Movimientos</li>
      </ul>
    </nav>
  );
}

export default Navigation;
