import React, { useState } from 'react';
import styles from './SearchForm.module.css';
import { Form } from 'react-bootstrap';
import { IoSearchSharp } from 'react-icons/io5';
import { useSearchFormData } from 'store/SearchFormData';

export default function SearchForm() {
  const [inputValue, setInputValue] = useState('');
  const { query, isLoading, error, setQuery } = useSearchFormData();

  const handleSubmit = e => {
    e.preventDefault();
    setQuery(inputValue);
    console.log(query);
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
