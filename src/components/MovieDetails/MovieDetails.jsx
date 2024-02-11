import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useHandleSearch from 'hooks/useHandleSearch';
import Containerbox from 'components/Container/Containerbox';
import styles from './MovieDetails.module.css';
import { FaStar } from 'react-icons/fa';
import Reviews from 'components/Reviews/Reviews';
import Credits from 'components/Credits/Credits';
import LoadingSpinner from 'components/LoadingSpinner/LoadingSpinner';

export default function MovieDetails() {
  const { movieId } = useParams();
  const { fetchData, setItem, data, reviews, credits, isLoading } =
    useHandleSearch();

  useEffect(() => {
    setItem(movieId);
    fetchData();
  }, [fetchData, setItem, movieId]);

  return (
    <>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <Containerbox>
          <div className={styles.container}>
            {data && (
              <div
                className={styles.posterContainer}
                // style={{
                //   backgroundImage: `url(https://image.tmdb.org/t/p/w500${data.backdrop_path})`,
                //   backgroundSize: 'cover',
                //   backgroundRepeat: 'no-repeat',
                //   opacity: 0.7,
                // }}
              >
                <img
                  src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
                  alt="Movie Poster"
                  className={styles.poster}
                />
                <div className={styles.details}>
                  <div className={styles.title}>
                    <h2>
                      {data.title} ({data.release_date.split('-')[0]})
                    </h2>
                    <div>
                      <div className={styles.detailsInfo}>
                        <p>({data.original_language.toUpperCase()})</p>
                        <p>{data.release_date}</p>
                        <ul className={styles.detailsGenres}>
                          {data.genres.map((genre, index) => (
                            <li key={index}>
                              <strong>
                                {genre.name}
                                {index < data.genres.length - 1 ? ',' : null}
                              </strong>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className={styles.detailsRating}>
                      <FaStar color="orange" size={20} />
                      <p>
                        <strong>{data.vote_average?.toFixed(1)}</strong>
                      </p>
                    </div>
                  </div>
                  <p className={styles.detailsTagline}>{data.tagline}</p>
                  <div>
                    <p>
                      <b>Description:</b>
                    </p>
                    <p className={styles.detailsOverview}>{data.overview}</p>
                  </div>
                </div>
                <div className={styles.sideInfo}>
                  <ul className={styles.extraInfo}>
                    <li className={styles.extraInfo_item}>
                      <p className={styles.extraInfo_item_text}>Status:</p>
                      <p>{data?.status}</p>
                    </li>
                    <li>
                      <p className={styles.extraInfo_item_text}>Budget:</p>
                      <p>${data?.budget.toLocaleString()}</p>
                    </li>
                    <li>
                      <p className={styles.extraInfo_item_text}>Revenue:</p>
                      <p>${data?.revenue.toLocaleString()}</p>
                    </li>
                  </ul>
                </div>
              </div>
            )}
            <div className={styles.dataBlock}>
              <div className={styles.dataBlock_castRev}></div>
              {/* <div className={styles.sideInfo}>
              <ul className={styles.extraInfo}>
                <li className={styles.extraInfo_item}>
                  <p className={styles.extraInfo_item_text}>Status:</p>
                  <p>{data?.status}</p>
                </li>
                <li>
                  <p className={styles.extraInfo_item_text}>Budget:</p>
                  <p>${data?.budget.toLocaleString()}</p>
                </li>
                <li>
                  <p className={styles.extraInfo_item_text}>Revenue:</p>
                  <p>${data?.revenue.toLocaleString()}</p>
                </li>
              </ul>
            </div> */}
            </div>
          </div>
        </Containerbox>
      )}
    </>
  );
}
