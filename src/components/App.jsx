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
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </TrendingProvider>
  );
};
