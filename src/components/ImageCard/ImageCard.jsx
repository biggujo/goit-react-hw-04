import PropTypes from 'prop-types';
import {
  ImageCardStyled, ImageStyled,
} from './ImageCard.styled.js';
import { useModalContext } from '../../providers/ModalProvider.jsx';

export default function ImageCard({
  previewImageURL,
  fullSizeImageURL,
  description,
}) {
  const {
    setIsModalOpen,
    setModalImageSrc,
    setModalImageAlt,
  } = useModalContext();

  const handleImageClick = () => {
    setModalImageSrc(fullSizeImageURL);
    setModalImageAlt(description);
    setIsModalOpen(true);
  };

  return (<ImageCardStyled>
    <ImageStyled src={previewImageURL}
                 alt={description}
                 onClick={handleImageClick} />
  </ImageCardStyled>);
}

ImageCard.propTypes = {
  previewImageURL: PropTypes.string.isRequired,
  fullSizeImageURL: PropTypes.string.isRequired,
  description: PropTypes.string,
};
