import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  ImageGalleryItemStyled, ImageModalStyled, ImageStyled,
} from './ImageGalleryItem.styled';
import Modal from '../Modal';

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
    {isModalOpen && <Modal onClose={closeModal}>
      <ImageModalStyled src={fullSizeImageURL}
                        alt={description}
                        onClick={closeModal} />
    </Modal>}
  </ImageGalleryItemStyled>);
}

ImageGalleryItem.propTypes = {
  previewImageURL: PropTypes.string.isRequired,
  fullSizeImageURL: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
