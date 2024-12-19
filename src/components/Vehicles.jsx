import styles from "./Vehicles.module.css";

const Vehicles = ({ item }) => {
  return (
    <div className={styles["vehicle_container"]}>
      <img
        className={styles["item-image"]}
        src={item.image}
        alt="Vehicle photo"
      />
      <div className={styles["rating"]}>4.5 ⭐ | 1.4k</div>
      <div className={styles["company_name"]}>{item.make}</div>
      <div className={styles["item_name"]}>{item.model}</div>
      <div className={styles["price"]}>
        <span className={styles["current_price"]}>{item.price}</span>
        <span className={styles["original_price"]}>{item.price}</span>
        <span className={styles["discount"]}>(42% OFF)</span>
      </div>
      <button className={styles["btn-add-bag"]}>Checkout</button>
    </div>
  );
};

export default Vehicles;
