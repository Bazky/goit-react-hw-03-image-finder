import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Searchbar } from '../Searchbar/Searchbar';
import { ImageGallery } from '../ImageGallery/ImageGallery';
import { Button } from '../Button/Button';
import { Modal } from '../Modal/Modal';
import { Loader } from '../Loader/Loader';
import css from '../App/App.module.css';
import propTypes from 'prop-types';

export const App = () => {
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [selectedImage, setSelectedImage] = useState(null);
  const [triggerFetch, setTriggerFetch] = useState(false);
  const API_KEY = '35883323-bde325eb0a57257c02d067bfb';

  useEffect(() => {
    if (triggerFetch) {
      const fetchImages = async () => {
        setLoading(true);
        try {
          const response = await axios.get(
            `https://pixabay.com/api/?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
          );
          const newImages = response.data.hits.filter(
            newImage =>
              !images.some(existingImage => existingImage.id === newImage.id)
          );
          setImages(prevImages => [...prevImages, ...newImages]);
        } catch (error) {
          console.error('Error fetching images:', error);
        }
        setLoading(false);
      };

      fetchImages();
      setTriggerFetch(false);
    }
  }, [triggerFetch, query, page, images]);

  const handleSearchSubmit = newQuery => {
    setQuery(newQuery);
    setImages([]);
    setPage(1);
    setTriggerFetch(true);
  };

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
    setTriggerFetch(true);
  };

  const handleImageClick = image => {
    setSelectedImage(image);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className={css.app}>
      <Searchbar onSubmit={handleSearchSubmit} />
      <ImageGallery images={images} onImageClick={handleImageClick} />
      {loading && <Loader />}
      {images.length > 0 && <Button onClick={handleLoadMore} />}
      {selectedImage && (
        <Modal image={selectedImage} onClose={handleCloseModal} />
      )}
    </div>
  );
};

App.propTypes = {
  query: propTypes.string,
  images: propTypes.array,
  loading: propTypes.bool,
  page: propTypes.number,
  selectedImage: propTypes.object,
  API_KEY: propTypes.string,
  handleSearchSubmit: propTypes.func,
  fetchImages: propTypes.func,
  handleLoadMore: propTypes.func,
  handleImageClick: propTypes.func,
  handleCloseModal: propTypes.func,
};
