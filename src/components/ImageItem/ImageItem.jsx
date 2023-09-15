import React from 'react';
import PropTypes from 'prop-types';

export default function ImageItem({
  previewImageURL,
  fullSizeImageURL,
  description,
}) {
  return (<div>
    <img src={previewImageURL}
         alt={description}
         width='320' />
  </div>);
}

ImageItem.propTypes = {
  previewImageURL: PropTypes.string.isRequired,
  fullSizeImageURL: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
