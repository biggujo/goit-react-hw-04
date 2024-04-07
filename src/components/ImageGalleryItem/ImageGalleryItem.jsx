import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  ImageGalleryItemStyled, ImageModalStyled, ImageStyled,
} from './ImageGalleryItem.styled';
import ImageModal from '../ImageModal/index.js';

export default function ImageGalleryItem({
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

  return (<ImageGalleryItemStyled>
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
  </ImageGalleryItemStyled>);
}

ImageGalleryItem.propTypes = {
  previewImageURL: PropTypes.string.isRequired,
  fullSizeImageURL: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
