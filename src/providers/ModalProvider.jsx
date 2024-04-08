import { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';

const modalContext = createContext(null);

export const useModalContext = () => useContext(modalContext);

const Provider = modalContext.Provider;

function ModalProvider({ children }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImageSrc, setModalImageSrc] = useState('');
  const [modalImageAlt, setModalImageAlt] = useState('');

  const values = {
    isModalOpen,
    setIsModalOpen,
    modalImageSrc,
    setModalImageSrc,
    modalImageAlt,
    setModalImageAlt,
  };

  return <Provider value={values}>
    {children}
  </Provider>;
}

ModalProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ModalProvider;
