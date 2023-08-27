import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import css from '../ImageGallery/ImageGallery.module.css';
import propTypes from 'prop-types';

export const ImageGallery = ({ images, onImageClick }) => {
  return (
    <ul className={css.imagegallery}>
      {images.map(image => (
        <ImageGalleryItem
          key={image.id}
          image={image}
          onImageClick={() => onImageClick(image)}
        />
      ))}
    </ul>
  );
};

ImageGallery.propTypes = {
  images: propTypes.array.isRequired,
  onImageClick: propTypes.func.isRequired,
};
