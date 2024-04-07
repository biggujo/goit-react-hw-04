import React from 'react';
import ImageCard from '../ImageCard';
import PropTypes from 'prop-types';
import {
  ImageGalleryStyled, ItemStyled,
} from './ImageGallery.styled';

export default function ImageGallery({ images }) {
  return (<ImageGalleryStyled>
    {images.map(({
      id,
      webformatURL,
      largeImageURL,
      tags,
    }) => {
      return <ItemStyled key={id}>
        <ImageCard previewImageURL={webformatURL}
                   fullSizeImageURL={largeImageURL}
                   description={tags} />
      </ItemStyled>;
    })}
  </ImageGalleryStyled>);
}

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
  })).isRequired,
};
