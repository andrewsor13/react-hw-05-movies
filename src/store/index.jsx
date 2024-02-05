import React from 'react';

import { TrendingMoviesProvider } from './TrendingMoviesData';
import { TrendingTvShowsProvider } from './TrendingTvShowsData';

export default function StoreProvider({ children }) {
  return (
    <>
      <TrendingMoviesProvider>
        <TrendingTvShowsProvider>{children}</TrendingTvShowsProvider>
      </TrendingMoviesProvider>
    </>
  );
}
