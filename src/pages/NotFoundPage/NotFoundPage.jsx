import React from 'react';
import notFoundImg from '../../assets/browser-error-404-icon.svg';
import Button from 'react-bootstrap/Button';
import styles from './NotFoundPage.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { useNavigate } from 'react-router-dom';

export default function NotFoundPage() {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate('/');
  };

  return (
    <div className={styles.not_found}>
      <img src={notFoundImg} alt="Not Found" />
      <p>Ruta nu exista 404.</p>
      <Button onClick={handleRedirect}>Inapoi la pagina principala</Button>
    </div>
  );
}
