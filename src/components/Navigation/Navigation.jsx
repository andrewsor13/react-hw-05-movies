import React from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';

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
      <Link
        to="/"
        className={`${styles.home} ${
          location.pathname === '/home' ? 'active' : ''
        }`}
      >
        Home
      </Link>

      <Link
        to="/movies"
        className={`${styles.home} ${
          location.pathname === '/movies' ? 'active' : ''
        }`}
      >
        Movies
      </Link>
    </nav>
  );
}
