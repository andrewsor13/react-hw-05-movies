import React from 'react';
import styles from './LoadingSpinne.module.css';

import { ColorRing } from 'react-loader-spinner';

export default function LoadingSpinner() {
  return (
    <div className={styles.loader}>
      <ColorRing
        visible={true}
        height="80"
        width="80"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
      />
    </div>
  );
}
