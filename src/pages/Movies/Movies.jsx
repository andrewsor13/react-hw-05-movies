import SearchForm from 'components/SearchForm/SearchForm';
import React from 'react';
import { SearchFormProvider } from 'store/SearchFormData';

export default function Movies() {
  return (
    <div>
      <SearchFormProvider>
        <SearchForm />
      </SearchFormProvider>
    </div>
  );
}
