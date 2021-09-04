import styles from "./ImageGalleryItem.module.css";

export default function ImageGalleryItem({ items, onClick }) {
  return items.map((item) => (
    <li className={styles.ImageGalleryItem} key={item.largeImageURL}>
      <img
        id={item.id}
        src={item.webformatURL}
        alt={item.tags}
        className={styles.ImageGalleryItemImage}
        onClick={(evt) => {
          evt.preventDefault();
          onClick(item.largeImageURL);
        }}
      />
    </li>
  ));
}
