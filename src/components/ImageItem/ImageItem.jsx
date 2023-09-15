import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  ImageItemStyled, ImageModalStyled, ImageStyled,
} from './ImageItem.styled';
import Modal from '../Modal';

class ImageItem extends Component {
  static propTypes = {
    previewImageURL: PropTypes.string.isRequired,
    fullSizeImageURL: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  };

  state = {
    isModalOpen: false,
  };

  openModal = () => {
    this.setState({ isModalOpen: true });
  };

  closeModal = () => {
    this.setState({ isModalOpen: false });
  };

  render() {
    const {
      previewImageURL,
      fullSizeImageURL,
      description,
    } = this.props;
    const { isModalOpen } = this.state;

    return (<ImageItemStyled>
      <ImageStyled src={previewImageURL}
                   alt={description}
                   onClick={this.openModal} />
      {isModalOpen && <Modal onClose={this.closeModal}>
        <ImageModalStyled src={fullSizeImageURL}
                          alt={description}
                          onClick={this.closeModal} />
      </Modal>}
    </ImageItemStyled>);
  }
}

export default ImageItem;
