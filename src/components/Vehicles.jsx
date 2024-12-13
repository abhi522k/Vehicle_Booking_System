import styles from "./Vehicles.module.css";

const Vehicles = () => {
  return (
    <>
      <div className={styles["vehicles_container"]}>
        <div className={styles["vehicle_container"]}>
          <img
            className={styles["item-image"]}
            src="cars_ Carousel_1/car1.jpg"
            alt="Vehicle no 1 photo"
          />
          <div className={styles["rating"]}>4.5 ⭐ | 1.4k</div>
          <div className={styles["company_name"]}>Tata Motors</div>
          <div className={styles["item_name"]}>Tata Nexon</div>
          <div className={styles["price"]}>
            <span className={styles["current_price"]}>Rs 12 lack</span>
            <span className={styles["original_price"]}>Rs 14 lack</span>
            <span className={styles["discount"]}>(42% OFF)</span>
          </div>
          <button className={styles["btn-add-bag"]}>Checkout</button>
        </div>
        <div className={styles["vehicle_container"]}>
          <img
            className={styles["item-image"]}
            src="cars_ Carousel_1/car1.jpg"
            alt="Vehicle no 1 photo"
          />
          <div className={styles["rating"]}>4.5 ⭐ | 1.4k</div>
          <div className={styles["company_name"]}>Tata Motors</div>
          <div className={styles["item_name"]}>Tata Nexon</div>
          <div className={styles["price"]}>
            <span className={styles["current_price"]}>Rs 12 lack</span>
            <span className={styles["original_price"]}>Rs 14 lack</span>
            <span className={styles["discount"]}>(42% OFF)</span>
          </div>
          <button className={styles["btn-add-bag"]}>Checkout</button>
        </div>
        <div className={styles["vehicle_container"]}>
          <img
            className={styles["item-image"]}
            src="cars_ Carousel_1/car1.jpg"
            alt="Vehicle no 1 photo"
          />
          <div className={styles["rating"]}>4.5 ⭐ | 1.4k</div>
          <div className={styles["company_name"]}>Tata Motors</div>
          <div className={styles["item_name"]}>Tata Nexon</div>
          <div className={styles["price"]}>
            <span className={styles["current_price"]}>Rs 12 lack</span>
            <span className={styles["original_price"]}>Rs 14 lack</span>
            <span className={styles["discount"]}>(42% OFF)</span>
          </div>
          <button className={styles["btn-add-bag"]}>Checkout</button>
        </div>
        <div className={styles["vehicle_container"]}>
          <img
            className={styles["item-image"]}
            src="cars_ Carousel_1/car1.jpg"
            alt="Vehicle no 1 photo"
          />
          <div className={styles["rating"]}>4.5 ⭐ | 1.4k</div>
          <div className={styles["company_name"]}>Tata Motors</div>
          <div className={styles["item_name"]}>Tata Nexon</div>
          <div className={styles["price"]}>
            <span className={styles["current_price"]}>Rs 12 lack</span>
            <span className={styles["original_price"]}>Rs 14 lack</span>
            <span className={styles["discount"]}>(42% OFF)</span>
          </div>
          <button className={styles["btn-add-bag"]}>Checkout</button>
        </div>
      </div>
    </>
  );
};

export default Vehicles;
