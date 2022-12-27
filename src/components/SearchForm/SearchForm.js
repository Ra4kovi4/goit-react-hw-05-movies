import PropTypes from 'prop-types';
import { FormSearch, Input, SubmitButton } from './SearchForm.styled';
import { useState } from 'react';

export const SearchForm = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const onChange = e => {
    setQuery(e.target.value);
  };
  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(query);
  };
  return (
    <>
      <FormSearch onSubmit={handleSubmit}>
        <Input value={query} onChange={onChange} />
        <SubmitButton type="submit" children="Search" />
      </FormSearch>
    </>
  );
};

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
