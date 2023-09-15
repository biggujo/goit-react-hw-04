import React from 'react';
import ImageItem from '../ImageItem';
import PropTypes from 'prop-types';

export default function ImageGallery({ images }) {
  return (<ul>
    {images.map(({
      id,
      webformatURL,
      largeImageURL,
      tags,
    }) => {
      return <li key={id}>
        <ImageItem previewImageURL={webformatURL}
                   fullSizeImageURL={largeImageURL}
                   description={tags} />
      </li>;
    })}
  </ul>);
}

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
  })),
};
