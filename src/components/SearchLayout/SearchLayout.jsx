import React from 'react';
import { useSearchFormData } from 'store/SearchFormData';
import LoadingSpinner from 'components/LoadingSpinner/LoadingSpinner';
import styles from './SearchLayout.module.css';
import Cover from 'components/Cover/Cover';
import { Link, useParams } from 'react-router-dom';

export default function SearchLayout() {
  const { searchData, isLoading, error } = useSearchFormData();
  const { query } = useParams();

  return (
    <div>
      {isLoading ? (
        <LoadingSpinner />
      ) : error ? (
        <p>{error}</p>
      ) : (
        <ul className={styles.list}>
          {searchData?.map(movie => (
            <Link key={movie.id} to={`/movies/${query}/${movie.id}`}>
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
          ))}
        </ul>
      )}
    </div>
  );
}
