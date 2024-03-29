import React, { useContext, createContext, useState, useEffect } from 'react';
import axios from 'axios';

const url = 'https://api.themoviedb.org/3/trending/tv/day?language=en-US';
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMTRhOTFjNTY4YjYyNWRjMTBiYjMyMTZiMmU4OTNjZSIsInN1YiI6IjY1YjM3OTVkYTA2NjQ1MDE3YzhkODdhYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.k-J_vpdCaIcpcHQqeu_ltZbhKGRyu_a4IsRKGb1g_wY',
  },
};
const TrendingContext = createContext();

export const TrendingTvShowsProvider = ({ children }) => {
  const [trendingTvShowsData, setTrendinTvShowsData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url, options);
        setTrendinTvShowsData(response.data.results);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const contextValue = { trendingTvShowsData, isLoading, error };

  return (
    <TrendingContext.Provider value={contextValue}>
      {children}
    </TrendingContext.Provider>
  );
};

export const useTvShowsTrendingData = () => {
  const context = useContext(TrendingContext);
  if (!context) {
    throw new Error(
      'useTradingData must be used inside of an TrendingProvider'
    );
  }
  return context;
};
