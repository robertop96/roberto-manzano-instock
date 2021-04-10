import { NavLink, Link } from 'react-router-dom';
import logo from '../../Assets/Logo/InStock-Logo.svg';
import React, { Component } from 'react';
import './Header.scss';

const Header = () => {
  return (
    <>
      <div className="nav">
        <Link to="/">
          <img src={logo} alt="logo" className="nav__logo" />
        </Link>
        <div className="nav__links">
          <NavLink
            to="/warehouses"
            className="nav__link"
            activeClassName="active"
          >
            Warehouses
          </NavLink>
          <NavLink
            to="/inventory"
            className="nav__link"
            activeClassName="active"
          >
            Inventory
          </NavLink>
        </div>
      </div>
    </>
  );
};
export default Header;
