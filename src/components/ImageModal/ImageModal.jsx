import PropTypes from 'prop-types';
import Modal from 'react-modal';
import { ImageModalStyled } from '../ImageCard/ImageCard.styled.js';

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
  src,
  alt,
}) {
  return <Modal isOpen={isOpen}
                onRequestClose={onRequestClose}
                style={customStyles}
  >
    <ImageModalStyled src={src}
                      alt={alt}
                      onClick={onRequestClose} />
  </Modal>;
}

ImageModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onRequestClose: PropTypes.func.isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};
