import { useDispatch } from "react-redux";
import { bagActions } from "../store/bagSlice";
import "./bag.css";

const BagItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleRemoveFromBag = () => {
    dispatch(bagActions.removeFromBag(item.id));
  };
  return (
    <div className="bag-item-container">
      <div className="item-left-part">
        <img className="bag-item-img" src={item.image} />
      </div>
      <div className="item-right-part">
        <div className="company">{item.make}</div>
        <div className="item-name">{item.model}</div>
        <div className="price-container">
          <span className="current-price">Rs {item.price}</span>
          <span className="discount-percentage"> (12% OFF)</span>
        </div>
        <div className="return-period">
          <span className="return-period-days">10 days</span> return available
        </div>
        <div className="delivery-details">
          Delivery by
          <span className="delivery-details-days"> 21 dec</span>
        </div>
      </div>

      <div className="remove-from-cart" onClick={handleRemoveFromBag}>
        X
      </div>
    </div>
  );
};

export default BagItem;
