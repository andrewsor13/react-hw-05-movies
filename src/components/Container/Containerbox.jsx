import React from 'react';
import styles from './Containerbox.module.css';

export default function Containerbox({ children }) {
  return <div className={styles.container}>{children}</div>;
}
