import { FaSearch, FaRegHeart } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { MdOutlineShoppingCartCheckout } from "react-icons/md";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <>
      <header>
        <div className={`${styles["logo_container"]}`}>
          <a href="#">
            <img
              className={styles["logo_image"]}
              src="images/Logo.png"
              alt="Vehicle Booking System Logo"
            />
          </a>
        </div>
        <nav className={styles["navbar"]}>
          <a href="#">Home</a>
          <a href="#">Vehicles</a>
          {/* <a href="#">
            Bookings <sup>5</sup>
          </a> */}
          <a href="#">About Us</a>
          <a href="#">Contact</a>
          {/* <a href="#">Login/Sign Up</a> */}
        </nav>
        <div className={styles["search_bar"]}>
          <span className={styles["search_icon"]}>
            <FaSearch />
          </span>
          <input
            className={styles["search_input"]}
            placeholder="Search for vehicles, brands and more."
          />
        </div>
        <div className={styles["action_bar"]}>
          <div className={styles["action_container"]}>
            <span className="action_icon">
              <CgProfile size="23px" />
            </span>
            <span className="action_name">Profile</span>
          </div>
          <div className={styles["action_container"]}>
            <span className="action_icon">
              <FaRegHeart size="23px" />
            </span>
            <span className="action_name">Wishlist</span>
          </div>
          <div className={styles["action_container"]}>
            <span className="action_icon">
              <MdOutlineShoppingCartCheckout size="23px" />
            </span>
            <span className="action_name">Booking</span>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
