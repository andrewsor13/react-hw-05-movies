import React from 'react';
import styles from './Cover.module.css';
import { FaStar } from 'react-icons/fa';

export default function Cover({
  poster_path,
  title,
  vote_average,
  release_date,
}) {
  return (
    <div className={styles.coverContainer}>
      <div>
        <div className={styles.imageContainer}>
          <img
            src={`https://image.tmdb.org/t/p/w500` + poster_path}
            alt={title}
            className={styles.image}
          />
        </div>
        <h2 className={styles.title}>{title}</h2>
      </div>
      <div className={styles.rating}>
        <div className={styles.ratingContainer}>
          <FaStar color="orange" />
          <p>
            <b>{vote_average.toFixed(1)}</b>
          </p>
        </div>
        <p>
          <b>{release_date}</b>
        </p>
      </div>
    </div>
  );
}
