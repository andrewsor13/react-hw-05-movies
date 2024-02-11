import SearchForm from 'components/SearchForm/SearchForm';
import SearchLayout from 'components/SearchLayout/SearchLayout';
import React from 'react';
import { Container } from 'react-bootstrap';
import { SearchFormProvider } from 'store/SearchFormData';

export default function Movies() {
  return (
    <div>
      <SearchFormProvider>
        <Container>
          <SearchForm />
          <SearchLayout />
        </Container>
      </SearchFormProvider>
    </div>
  );
}
