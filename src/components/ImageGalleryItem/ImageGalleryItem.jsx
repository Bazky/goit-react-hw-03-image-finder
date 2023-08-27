import css from '../ImageGalleryItem/ImageGalleryItem.module.css';
import propTypes from 'prop-types';

export const ImageGalleryItem = ({ image, onImageClick }) => {
  return (
    <li className={css.imagegallery_item}>
      <img
        className={css.imagegallery_image}
        src={image.webformatURL}
        alt={image.tags}
        onClick={onImageClick}
      />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  image: propTypes.object.isRequired,
  onImageClick: propTypes.func.isRequired,
};
