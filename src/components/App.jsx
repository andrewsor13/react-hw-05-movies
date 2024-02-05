import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Navigation from './Navigation/Navigation';
import Home from '../pages/Home/Home';
import Movies from '../pages/Movies/Movies';
import NotFoundPage from 'pages/NotFoundPage/NotFoundPage';
import '../store/TrendingMoviesData';

import styles from './App.module.css';
import StoreProvider from 'store';

export const App = () => {
  return (
    <StoreProvider>
      <div className={styles.container}>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />}>
            {/* <Route path='movies' element={}/>
            <Route path='tvshows' element={}/> */}
          </Route>
          <Route path="/movies" element={<Movies />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </StoreProvider>
  );
};
