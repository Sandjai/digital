import React, { useState } from "react";
import styles from "../styles/reviews.module.sass";
import Image from "next/image";
import picture1 from "../public/assets/images/WomanIsWriting.jpg";
import arrowLeft from "../public/assets/images/arrowL.png";
import arrowRight from "../public/assets/images/arrowR.png";
import classNames from "classnames";
import { reviews } from "../constants/fixtures.js";
const Reviews = ({ id }) => {
  const [review, setReview] = useState(0);

  function showReview(par) {
    alert(par);
    par === "prev" && review !== 0 && setReview(review - 1);
    par === "next" && review < reviews.length - 1 && setReview(review + 1);
    console.log(review);
  }
  return (
    <div id={id} className={styles.root}>
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
          <div>
            <p>{reviews[review].content}</p>
          </div>
        </div>
        <div className={styles.arrows}>
          <div
            className={classNames(styles.arrow, {
              [styles.active]: review !== 0,
            })}
          >
            <Image
              onClick={() => showReview("prev")}
              src={arrowLeft}
              alt="Arrow Left"
              width="14px"
              height="12px"
            ></Image>
          </div>
          <div
            className={classNames(styles.arrow, {
              [styles.active]: review < reviews.length - 1,
            })}
          >
            <Image
              onClick={() => showReview("next")}
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
