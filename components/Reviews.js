import React, { useEffect, useState } from "react";
import styles from "../styles/reviews.module.sass";
import Image from "next/image";
import picture1 from "../public/assets/images/WomanIsWriting.jpg";
import arrowLeft from "../public/assets/images/arrowL.png";
import arrowRight from "../public/assets/images/arrowR.png";
import classNames from "classnames";
import { useDispatch } from "react-redux";
import { setActiveItem } from "../store/header/actions";
import { Transition } from "react-transition-group";
import useIfViewedOnce from "../utils/useIfViewedOnce";

const Reviews = ({ reviews, inView, entry }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    entry?.isIntersecting && dispatch(setActiveItem("REVIEWS"));
  }, [inView]);
  const [visible, setVisible] = useState(false);

  useIfViewedOnce({ inView, setVisible });

  const [review, setReview] = useState(0);

  function showReview(par) {
    par === "prev" && review !== 0 && setReview(review - 1);
    par === "next" && review < reviews.length - 1 && setReview(review + 1);
  }
  return (
    <>
      <Transition in={visible} timeout={500}>
        {(state) => (
          <div className={classNames(state, styles.root)}>
            <div className={styles.col1}>
              <div className={styles.imageWrapper}>
                <Image src={picture1} alt="Woman is Writing"></Image>
              </div>
            </div>
            <div className={styles.col2}>
              <div className={styles.quote}>
                <div>
                  <p>{reviews[review].body}</p>
                </div>
              </div>
              <div className={styles.arrows}>
                <div
                  onClick={() => showReview("prev")}
                  className={classNames(styles.arrow, {
                    [styles.active]: review !== 0,
                  })}
                >
                  <Image
                    src={arrowLeft}
                    alt="Arrow Left"
                    width="14px"
                    height="12px"
                  ></Image>
                </div>
                <div
                  onClick={() => showReview("next")}
                  className={classNames(styles.arrow, {
                    [styles.active]: review < reviews.length - 1,
                  })}
                >
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
        )}
      </Transition>
    </>
  );
};

export default Reviews;
