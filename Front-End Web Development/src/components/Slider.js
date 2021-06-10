import styles from "./Slider.module.css"

export const Slider = ({ min, max, value, handleChange, listId }) => (
  <input
    className={styles.slider}
    type="range"
    min={min}
    max={max}
    value={value}
    list={listId}
    onChange={handleChange}
  />
);
