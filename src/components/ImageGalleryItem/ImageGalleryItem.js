import styles from "./ImageGalleryItem.module.css";

const ImageGalleryItem = ({ pictures }) => {
  return pictures.map((picture) => (
    <li key={picture.id} className={styles.ImageGalleryItem}>
      <img
        src={picture.webformatURL}
        alt=""
        className={styles.ImageGalleryItem__image}
      />
    </li>
  ));
};

export default ImageGalleryItem;
