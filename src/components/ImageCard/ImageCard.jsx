import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  ImageCardStyled, ImageModalStyled, ImageStyled,
} from './ImageCard.styled.js';
import ImageModal from '../ImageModal/index.js';

export default function ImageCard({
  previewImageURL,
  fullSizeImageURL,
  description,
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (<ImageCardStyled>
    <ImageStyled src={previewImageURL}
                 alt={description}
                 onClick={openModal} />
    {isModalOpen && <ImageModal isOpen={isModalOpen}
                                onRequestClose={() => setIsModalOpen(false)}
                                contentLabel={description}
    >
      <ImageModalStyled src={fullSizeImageURL}
                        alt={description}
                        onClick={closeModal} />
    </ImageModal>}
  </ImageCardStyled>);
}

ImageCard.propTypes = {
  previewImageURL: PropTypes.string.isRequired,
  fullSizeImageURL: PropTypes.string.isRequired,
  description: PropTypes.string,
};
