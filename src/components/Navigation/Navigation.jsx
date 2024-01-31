import React from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';

import Nav from 'react-bootstrap/Nav';
import styles from './Navigation.module.css';
import './Navigation.module.css';
import Logo from '../../assets/film.svg';

export default function Navigation() {
  const location = useLocation();

  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate('/home');
  };
  return (
    <nav className={styles.navigation}>
      <img
        onClick={handleRedirect}
        src={Logo}
        alt="Page Logo"
        className={styles.image}
      />
      <Nav justify fill variant="tabs">
        <Nav.Item>
          <Link
            to="/home"
            className={`${'nav-link'} ${styles.home} ${
              location.pathname === '/home' ? 'active' : ''
            }`}
          >
            Home
          </Link>
        </Nav.Item>
        <Nav.Item>
          <Link
            to="/movies"
            className={`${'nav-link'} ${styles.home} ${
              location.pathname === '/movies' ? 'active' : ''
            }`}
          >
            Movies
          </Link>
        </Nav.Item>
      </Nav>
    </nav>
  );
}
