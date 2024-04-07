import { MessageStyled } from './ErrorMessage.styled.js';
import PropTypes from 'prop-types';

function ErrorMessage({ message }) {
  return (<MessageStyled>{message}</MessageStyled>);
}

ErrorMessage.propTypes = {
  message: PropTypes.string.isRequired,
};

export default ErrorMessage;
