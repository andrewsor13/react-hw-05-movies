import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Navigation from './Navigation/Navigation';
import Home from '../pages/Home/Home';
import Movies from '../pages/Movies/Movies';
import NotFoundPage from 'pages/NotFoundPage/NotFoundPage';
import '../store/TrendingData';

import { TrendingProvider } from 'store/TrendingData';
export const App = () => {
  return (
    <TrendingProvider>
      <div>
        <Navigation />
        <Routes>
          <Route path="/goit-react-hw-05-movies/" element={<Home />} />
          <Route path="/goit-react-hw-05-movies/home" element={<Home />} />
          <Route path="/goit-react-hw-05-movies/movies" element={<Movies />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </TrendingProvider>
  );
};
