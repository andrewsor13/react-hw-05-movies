import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

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
          <Nav.Link
            href="/home"
            className={`${styles.home} ${
              location.pathname === '/home' ? 'active' : ''
            }`}
          >
            Home
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            href="/movies"
            className={`${styles.home} ${
              location.pathname === '/movies' ? 'active' : ''
            }`}
          >
            Movies
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </nav>
  );
}
