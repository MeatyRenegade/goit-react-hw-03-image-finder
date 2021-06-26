import PropTypes from 'prop-types';

import styles from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ webformatURL, tags, largeImageURL, onClick }) => {
  return (
    <li className={styles.ImageGalleryItem} onClick={onClick}>
      <img
        src={webformatURL}
        alt={tags}
        className={styles.ImageGalleryItem__image}
        data-source={largeImageURL}
        data-alt={tags}
      />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
