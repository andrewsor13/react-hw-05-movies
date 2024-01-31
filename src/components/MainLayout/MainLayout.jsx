import React from 'react';
import Containerbox from 'components/Container/Containerbox';
import styles from './MainLayout.module.css';
import Cover from 'components/Cover/Cover';
import { useTrendingData } from 'store/TrendingData';
import LoadingSpinner from 'components/LoadingSpinner/LoadingSpinner';

export default function MainLayout() {
  const { trendingData, isLoading, error } = useTrendingData();
  return (
    <div className={styles.container}>
      <Containerbox>
        {isLoading ? (
          <LoadingSpinner />
        ) : error ? (
          <p>{error}</p>
        ) : (
          <ul className={styles.list}>
            {trendingData?.map((movie, index) => {
              return (
                <li className={styles.listItem} key={index}>
                  <Cover
                    poster_path={movie.poster_path}
                    title={movie.title}
                    vote_average={movie.vote_average}
                    release_date={movie.release_date}
                  />
                </li>
              );
            })}
          </ul>
        )}
      </Containerbox>
    </div>
  );
}
