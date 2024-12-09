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
        <div className="search_bar">Search</div>
        <div className={styles["actions"]}>Actions</div>
      </header>
    </>
  );
};

export default Header;
