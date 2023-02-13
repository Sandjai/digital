import React from "react";
import styles from "../styles/footer.module.sass";
import logo from "../public/assets/images/logo.png";
import Image from "next/image";

const Footer = () => {
  return (
    <div className={styles.root}>
      <div className={styles.logo}>
        <Image src={logo} alt="logo"></Image>
      </div>
      <div className={styles.desc}>
        <p>
          Lorem ipsum dolor sit amet consecte tur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua tepo the.
        </p>
        <div className={styles.btn}>
          <a href="tel:+79730682300">(973) 068 2300</a>
        </div>
      </div>
      <div className={styles.title}>
        <h3>Quick Links</h3>
      </div>
      <div className={styles.linksList1}>
        <uk>
          <li>About Us</li>
          <li>Pricing Table</li>
          <li>Contact Us</li>
          <li>Meet Our Team</li>
          <li>Latest News</li>
        </uk>
      </div>
      <div className={styles.linksList2}>
        <ul>
          <li>Case Studies</li>
          <li>FAQ’s</li>
          <li>Services</li>
          <li>Customer Support</li>
        </ul>
      </div>
      <div className={styles.col2}>
        <p>Facebook | Twitter | Dribbble | Instagram</p>

        <h3>
          Let's work together. <br></br>Just drop me a line - info@mail.com
        </h3>
      </div>
    </div>
  );
};

export default Footer;
