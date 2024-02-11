import React from 'react';
import styles from './Similars.module.css';
import { Link } from 'react-router-dom';

export default function Similars({ similars }) {
  return (
    <ul className={styles.similarTitles}>
      {similars?.map(similar => (
        <Link key={similar.id} to={`/movies/${similar.id}`}>
          <li key={similar.id}>
            <img
              src={`https://image.tmdb.org/t/p/w500${similar.poster_path}`}
              alt={similar.original_title}
              width={100}
            />
            <h3>{similar.original_title}</h3>
          </li>
        </Link>
      ))}
    </ul>
  );
}
