import { NavLink, Link } from 'react-router-dom';
import logo from '../../Assets/Logo/InStock-Logo.svg';
import React from 'react';
import './Header.scss';

const Header = () => {
  return (
    <header className="header">
      <nav className="header__nav">
        <ul className="header__list">
          <li className="header__item">
            <Link to="/">
              <img className="header__logo" src={logo} alt="logo" />
            </Link>
          </li>
          <li className="header__item">
            <NavLink to="/" className="header__link" activeClassName="active">
              Warehouses
            </NavLink>
          </li>
          <li className="header__item">
            <NavLink to="/inventory" className="header__link" activeClassName="active">
              Inventories
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
