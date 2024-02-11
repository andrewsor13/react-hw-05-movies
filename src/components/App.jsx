import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

import Navigation from './Navigation/Navigation';
import Home from '../pages/Home/Home';
import Movies from '../pages/Movies/Movies';
import NotFoundPage from 'pages/NotFoundPage/NotFoundPage';
import '../store/TrendingMoviesData';

import StoreProvider from 'store';
import MovieDetails from './MovieDetails/MovieDetails';
import SearchLayout from './SearchLayout/SearchLayout';
import LoadingPage from 'pages/LoadingPage/LoaginPage';

const LazyMoviesPage = lazy(() => import('../pages/Movies/Movies'));

const LazyMainpage = lazy(() => import('../pages/Home/Home'));

const LazyMovieDetails = lazy(() => import('./MovieDetails/MovieDetails'));

export const App = () => {
  return (
    <StoreProvider>
      <div>
        <Navigation />
        <Suspense fallback={<LoadingPage />}>
          <Routes>
            <Route index element={<LazyMainpage />} />
            <Route path="/home" element={<LazyMainpage />}>
              {/* <Route path='movies' element={}/>
            <Route path='tvshows' element={}/> */}
            </Route>
            <Route path="/movies" element={<LazyMoviesPage />}>
              <Route path=":query" element={<SearchLayout />}></Route>
            </Route>
            <Route
              path="movies/:query/:movieId"
              element={<LazyMovieDetails />}
            ></Route>

            <Route path="/:movieId" element={<LazyMovieDetails />}></Route>

            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </div>
    </StoreProvider>
  );
};
