import styles from "./ImageGalleryItem.module.css";

const ImageGalleryItem = ({ pictures, onClick }) => {
  return pictures.map(({ id, webformatURL, type }) => (
    <li key={id} className={styles.ImageGalleryItem} onClick={onClick}>
      <img
        src={webformatURL}
        alt={type}
        className={styles.ImageGalleryItem__image}
      />
    </li>
  ));
};

export default ImageGalleryItem;
