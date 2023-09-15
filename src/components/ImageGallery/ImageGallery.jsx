import React from 'react';
import ImageGalleryItem from '../ImageGalleryItem';
import PropTypes from 'prop-types';
import {
  ImageGalleryStyled,
} from './ImageGallery.styled';

export default function ImageGallery({ images }) {
  return (<ImageGalleryStyled>
    {images.map(({
      id,
      webformatURL,
      largeImageURL,
      tags,
    }) => {
      return <li key={id}>
        <ImageGalleryItem previewImageURL={webformatURL}
                          fullSizeImageURL={largeImageURL}
                          description={tags} />
      </li>;
    })}
  </ImageGalleryStyled>);
}

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
  })),
};
