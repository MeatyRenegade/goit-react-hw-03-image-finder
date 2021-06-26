import ImageGalleryItem from '../ImageGalleryItem/';
import PropTypes from 'prop-types';

import styles from './ImageGallery.module.css';

const ImageGallery = ({ pictures, onClick }) => {
  return (
    <ul className={styles.ImageGallery}>
      {pictures.map(({ id, webformatURL, tags, largeImageURL }) => (
        <ImageGalleryItem
          key={id}
          webformatURL={webformatURL}
          tags={tags}
          largeImageURL={largeImageURL}
          onClick={onClick}
        />
      ))}
    </ul>
  );
};

ImageGallery.propTypes = {
  pictures: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ImageGallery;
