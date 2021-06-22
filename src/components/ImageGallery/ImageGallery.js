import ImageGalleryItem from "../ImageGalleryItem/";

import styles from "./ImageGallery.module.css";

const ImageGallery = ({ pictures }) => {
  return (
    <ul className={styles.ImageGallery}>
      <ImageGalleryItem pictures={pictures} />
    </ul>
  );
};

export default ImageGallery;
