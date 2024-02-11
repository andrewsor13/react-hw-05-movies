import React, { useState, useEffect } from 'react';
import styles from './SearchForm.module.css';
import { Form } from 'react-bootstrap';
import { IoSearchSharp } from 'react-icons/io5';
import { useSearchFormData } from 'store/SearchFormData';
import { useNavigate } from 'react-router-dom';

export default function SearchForm() {
  const [inputValue, setInputValue] = useState('');
  const { isLoading, error, setQuery } = useSearchFormData();
  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    setQuery(inputValue);
    navigate(`${inputValue}`);
    setInputValue('');
  };

  const handleChange = e => {
    setInputValue(e.target.value);
  };

  return (
    <div className={styles.formContainer}>
      <Form onSubmit={handleSubmit} className={styles.form}>
        <Form.Group controlId="formInput">
          <Form.Control
            type="text"
            value={inputValue}
            onChange={handleChange}
            className={styles.input}
          />
        </Form.Group>
        <button type="submit" className={styles.searchButton}>
          <IoSearchSharp size={20} />
        </button>
      </Form>
    </div>
  );
}
