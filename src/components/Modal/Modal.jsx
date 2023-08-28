import React, { useEffect } from 'react';
import css from '../Modal/Modal.module.css';
import propTypes from 'prop-types';

export const Modal = ({ image, onClose }) => {
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  return (
    <div className={css.overlay} onClick={onClose}>
      <div className={css.modal}>
        <img src={image.largeImageURL} alt={image.tags} />
      </div>
    </div>
  );
};

Modal.propTypes = {
  image: propTypes.object.isRequired,
  onClose: propTypes.func.isRequired,
};
