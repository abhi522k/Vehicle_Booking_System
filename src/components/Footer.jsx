import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <>
      <div className={styles["Footer_Container"]}>
        <div className={styles["Footer_Column"]}>
          <h3>Quick Links:</h3>
          <a href="#">Home</a>
          <a href="#">Vehicle</a>
          <a href="#">Bookings</a>
          <a href="#">About Us</a>
          <a href="#">Contact</a>
        </div>
        <div className={styles["Footer_Column"]}>
          <h3>Customer Support:</h3>
          <a href="#">FAQs</a>
          <a href="#">Help Center</a>
          <a href="#">Support Email/Phone Number</a>
        </div>
        <div className={styles["Footer_Column"]}>
          <h3>Social Media Links:</h3>
          <a href="#">Facebook</a>
          <a href="#">Twitter</a>
          <a href="#">Instagram</a>
          <a href="#">LinkedIn</a>
        </div>
      </div>
      <hr />
      <div className={styles["copyright"]}>
        © 2024 Vehicle Booking System. All rights reserved.
      </div>
    </>
  );
};

export default Footer;
