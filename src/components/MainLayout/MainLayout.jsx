import { React, useState } from 'react';
import Containerbox from 'components/Container/Containerbox';
import styles from './MainLayout.module.css';
import Cover from 'components/Cover/Cover';
import { useMoviesTrendingData } from 'store/TrendingMoviesData';
import { useTvShowsTrendingData } from 'store/TrendingTvShowsData';
import LoadingSpinner from 'components/LoadingSpinner/LoadingSpinner';
import ButtonType from 'components/ButtonType/ButtonType';
import { Link } from 'react-router-dom';

export default function MainLayout() {
  const { trendingMoviesData, isLoading, error } = useMoviesTrendingData();
  const { trendingTvShowsData } = useTvShowsTrendingData();
  const [radioValue, setRadioValue] = useState('1');
  const handleSelect = e => {
    setRadioValue(e.currentTarget.value);
  };
  const radios = [
    { name: 'Movies', value: '1', route: 'movies' },
    { name: 'TvShows', value: '2' },
  ];

  return (
    <div className={styles.container}>
      <Containerbox>
        <ButtonType
          radios={radios}
          handleSelect={handleSelect}
          radioValue={radioValue}
        />
        {isLoading ? (
          <LoadingSpinner />
        ) : error ? (
          <p>{error}</p>
        ) : (
          <ul className={styles.list}>
            {radioValue === '1'
              ? trendingMoviesData?.map(movie => (
                  <Link key={movie.id} to={`/${movie.id}`}>
                    <li
                      className={`${styles.listItem} ${styles.listEnter}`}
                      key={movie.id}
                    >
                      <Cover
                        poster_path={movie.poster_path}
                        title={movie.title}
                        vote_average={movie.vote_average}
                        release_date={movie.release_date}
                      />
                    </li>
                  </Link>
                ))
              : radioValue === '2'
              ? trendingTvShowsData?.map((show, index) => (
                  <li
                    className={`${styles.listItem} ${styles.listEnter}`}
                    key={index}
                  >
                    <Cover
                      poster_path={show.poster_path}
                      title={show.name}
                      vote_average={show.vote_average}
                      release_date={show.first_air_date}
                    />
                  </li>
                ))
              : null}
          </ul>
        )}
      </Containerbox>
    </div>
  );
}
