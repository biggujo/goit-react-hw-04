import React from 'react';
import { BackdropStyled, ModalStyled } from './Loader.styled';
import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';

const modalRoot = document.getElementById('modal');

export default function Loader({ children }) {
  return createPortal(<BackdropStyled>
    <ModalStyled>
      {children}
    </ModalStyled>
  </BackdropStyled>, modalRoot);
}

Loader.propTypes = {
  children: PropTypes.node.isRequired,
};
