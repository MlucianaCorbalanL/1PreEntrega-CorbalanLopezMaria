// src/componentes/NavBar.js
import React from 'react';
import CartWidget from './CartWidget';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../assets/logo.png';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="/">
        <img src={logo} alt="Logo" width="30" height="30" className="d-inline-block align-top" />
        VISION
      </a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="/categoria1">PRODUCTOS</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/categoria2">NOSOTROS</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/categoria3">LOCALES</a>
          </li>
        </ul>
      </div>
      <CartWidget />
    </nav>
  );
};

export default NavBar;
