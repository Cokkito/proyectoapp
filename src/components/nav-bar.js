import React from "react";

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand">BalancesApp</a>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link disabled" aria-current="page" href="#">Ingresos</a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="#">Egresos</a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="#">Futuras Opciones</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;