import { useDispatch, useSelector } from "react-redux";
import styles from "./Vehicles.module.css";
import { bagActions } from "../store/bagSlice";

const Vehicles = ({ item }) => {
  const dispatch = useDispatch();
  const bagItems = useSelector((store) => store.bag);
  const elementFound = bagItems.indexOf(item.id) >= 0;

  const handleAddToBag = (id) => {
    dispatch(bagActions.addToBag(item.id));
  };

  const handleRemovefromBag = () => {
    dispatch(bagActions.removeFromBag(item.id));
  };

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
      {elementFound ? (
        <button
          type="button"
          onClick={handleRemovefromBag}
          className={`btn ${styles["btn-add-bag"]} btn-danger`}
        >
          Remove from Cart
        </button>
      ) : (
        <button
          onClick={() => handleAddToBag(item.id)}
          type="button"
          className={`btn btn-success ${styles["btn-add-bag"]}`}
        >
          Add to Cart
        </button>
      )}
    </div>
  );
};

export default Vehicles;
