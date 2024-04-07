import React from 'react';
import PropTypes from 'prop-types';
import { ImageModalStyled } from './ImageModal.styled.js';
import Modal from 'react-modal';

Modal.setAppElement('#modal');

const customStyles = {
  content: {
    position: 'fixed',
    top: '50%',
    left: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '920px',
    height: '680px',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    borderRadius: '7px',
    overflow: 'hidden',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
  },
};

export default function ImageModal({
  isOpen,
  onRequestClose,
  contentLabel,
  children,
}) {
  const handleAfterOpen = () => {

  };

  return <Modal isOpen={isOpen}
                onAfterOpen={handleAfterOpen}
                onRequestClose={onRequestClose}
                contentLabel={contentLabel}
                style={customStyles}
  >
    {children}
  </Modal>;
}

ImageModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onRequestClose: PropTypes.func.isRequired,
  contentLabel: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};
