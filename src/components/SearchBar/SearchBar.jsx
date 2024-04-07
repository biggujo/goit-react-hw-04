import { Formik } from 'formik';
import {
  FieldStyled, FormStyled, IconButtonStyled, IconStyled, SearchBarStyled,
} from './SearchBar.styled';
import PropTypes from 'prop-types';
import toast from 'react-hot-toast';

export default function SearchBar({ onSubmit }) {
  return <SearchBarStyled>
    <Formik initialValues={{
      query: '',
    }} onSubmit={(values) => {
      if (values.query.trim() === '') {
        toast.error('Please, enter a query to search.');
        return;
      }

      onSubmit(values);
    }}>
      <FormStyled>
        <IconButtonStyled type='submit'
                          aria-label='Search'>
          <IconStyled />
        </IconButtonStyled>
        <FieldStyled name='query'
                     autoComplete='off'
                     placeholder='Search images and photos' />
      </FormStyled>
    </Formik>
  </SearchBarStyled>;
}

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
