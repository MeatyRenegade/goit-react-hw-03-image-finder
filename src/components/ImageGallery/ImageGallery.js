import ImageGalleryItem from "../ImageGalleryItem/";

import styles from "./ImageGallery.module.css";

const ImageGallery = ({ pictures, onClick }) => {
  return (
    <ul className={styles.ImageGallery}>
      <ImageGalleryItem pictures={pictures} onClick={onClick} />
    </ul>
  );
};

export default ImageGallery;
