import React from "react";
import styles from "../styles/partners.module.sass";
import Image from "next/image";
import partner1 from "../public/assets/icons/partners/1.png";
import partner2 from "../public/assets/icons/partners/2.png";
import partner3 from "../public/assets/icons/partners/3.png";
import partner4 from "../public/assets/icons/partners/4.png";
import partner5 from "../public/assets/icons/partners/5.png";

const Partners = () => {
  return (
    <div className={styles.root}>
      <div className={styles.allocated}>
        <div className={styles.textWrapper}>
          <p>OVER 2K+ SOFTWARE BUSINESSE GROWING WITH OUR BUSINESS</p>
        </div>
      </div>
      <div className={styles.icons}>
        <Image
          src={partner1}
          width="72px"
          height="50px"
          alt="Partner of the company"
        ></Image>
        <Image
          src={partner2}
          width="97px"
          height="50px"
          alt="Partner of the company"
        ></Image>
        <Image
          src={partner3}
          width="61px"
          height="48px"
          alt="Partner of the company"
        ></Image>
        <Image
          src={partner4}
          width="128px"
          height="50px"
          alt="Partner of the company"
        ></Image>
        <Image
          src={partner5}
          width="108px"
          height="60px"
          alt="Partner of the company"
        ></Image>
      </div>
    </div>
  );
};

export default Partners;
