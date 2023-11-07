import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { BackdropStyled, ModalStyled } from './Modal.styled';
import { createPortal } from 'react-dom';

const modalRoot = document.getElementById('modal');

export default function Modal({
  onClose,
  children,
}) {
  const handleBackdropClick = (event) => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };

  useEffect(() => {
    const handleEscapePress = (event) => {
      if (event.code === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleEscapePress);
    return () => {
      window.removeEventListener('keydown', handleEscapePress);
    };
  }, [onClose]);

  return createPortal(<BackdropStyled onClick={handleBackdropClick}>
    <ModalStyled>
      {children}
    </ModalStyled>
  </BackdropStyled>, modalRoot);
}

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  onClose: PropTypes.func.isRequired,
};
