import React, { Component } from 'react';
import { BackdropStyled, ModalStyled } from './Modal.styled';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

const modalRoot = document.getElementById('modal');

class Modal extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    onClose: PropTypes.func.isRequired,
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handleEscapePress);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleEscapePress);
  }

  handleBackdropClick = (event) => {
    const { onClose } = this.props;

    if (event.currentTarget === event.target) {
      onClose();
    }
  };

  handleEscapePress = (event) => {
    const { onClose } = this.props;

    if (event.code === 'Escape') {
      onClose();
    }
  };

  render() {
    const { children } = this.props;

    return createPortal(<BackdropStyled onClick={this.handleBackdropClick}>
      <ModalStyled>
        {children}
      </ModalStyled>
    </BackdropStyled>, modalRoot);
  }
}

export default Modal;
