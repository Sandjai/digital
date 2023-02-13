import React from "react";
import styles from "../styles/reviews.module.sass";
import Image from "next/image";
import picture1 from "../public/assets/images/WomanIsWriting.jpg";
import arrowLeft from "../public/assets/images/arrowL.png";
import arrowRight from "../public/assets/images/arrowR.png";
import classNames from "classnames";
const Reviews = () => {
  return (
    <div className={styles.root}>
      <div className={styles.col1}>
        <Image
          src={picture1}
          alt="Woman is Writing"
          width="370px"
          height="430px"
        ></Image>
      </div>
      <div className={styles.col2}>
        <div className={styles.quote}>
          <p>
            "But I must explain to you how all this mistaken idea of denouncing
            pleasure and praising pain was born and I will give you a complete
            account of the system, and expound the actual teachings of the great
            explorer of the truth human happiness. No one rejects."
          </p>
        </div>
        <div className={styles.arrows}>
          <div className={styles.arrow}>
            <Image
              src={arrowLeft}
              alt="Arrow Left"
              width="14px"
              height="12px"
            ></Image>
          </div>
          <div className={classNames(styles.arrow, styles.active)}>
            <Image
              src={arrowRight}
              alt="Arrow Right"
              width="14px"
              height="12px"
            ></Image>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
