import React from 'react';
import { MessageStyled } from './ErrorMessage.styled.js';

function ErrorMessage({ message }) {
  return (<MessageStyled>{message}</MessageStyled>);
}

export default ErrorMessage;
