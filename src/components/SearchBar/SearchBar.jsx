import React from 'react';
import { Field, Form, Formik } from 'formik';
import {
  FieldStyled, FormStyled, IconButtonStyled, IconStyled, SearchBarStyled,
} from './SearchBar.styled';
import PropTypes from 'prop-types';

export default function SearchBar({ onSubmit }) {
  return <SearchBarStyled>
    <Formik initialValues={{
      query: '',
    }} onSubmit={(values) => {
      onSubmit(values);
    }}>
      <FormStyled>
        <IconButtonStyled type='submit' aria-label='Search'>
          <IconStyled />
        </IconButtonStyled>
        <FieldStyled name='query' autoComplete='off' />
      </FormStyled>
    </Formik>
  </SearchBarStyled>;
}

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
