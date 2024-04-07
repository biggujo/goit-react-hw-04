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
      urls: {
        small,
        regular,
      },
      description,
    }) => {
      return <ItemStyled key={id}>
        <ImageCard previewImageURL={small}
                   fullSizeImageURL={regular}
                   description={description} />
      </ItemStyled>;
    })}
  </ImageGalleryStyled>);
}

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    urls: PropTypes.shape({
      small: PropTypes.string.isRequired,
      regular: PropTypes.string.isRequired,
    }),
    description: PropTypes.string,
  })).isRequired,
};
