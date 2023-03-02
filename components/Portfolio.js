import React, { useEffect, useState } from "react";
import styles from "../styles/portfolio.module.sass";
import Button from "./Button";
import { setActiveItem } from "../store/header/actions";
import { useDispatch } from "react-redux";
import { Transition } from "react-transition-group";
import useIfViewedOnce from "../utils/useIfViewedOnce";
import classNames from "classnames";

const Portfolio = ({ id, inView, entry }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    entry?.isIntersecting && dispatch(setActiveItem("PORTFOLIO"));
  }, [inView]);
  const [visible, setVisible] = useState(false);

  useIfViewedOnce({ inView, setVisible });

  return (
    <>
      <Transition in={visible} timeout={500}>
        {(state) => (
          <div id={id} className={classNames(state, styles.root)}>
            <div className={styles.col1}>
              <p className="sectionName">PORTFOLIO</p>
              <h2>We Work to Craft Solid Products and Services For You</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <div className={styles.btnWrapper}>
                <Button
                  inView={inView}
                  className={styles.button}
                  type="primary"
                >
                  VIEW ALL PORTFOLIO
                </Button>
              </div>
            </div>
            <div className={styles.col2}>
              <div>
                <span className={styles.num}>01/</span>
                <span className={styles.title}>Digital Agency </span>
                <span className={styles.text}>/ Brand - Consultation</span>
              </div>
              <div>
                <span className={styles.num}>02/</span>
                <span className={styles.title}>Business Idea </span>
                <span className={styles.text}>/ Consultation - Idea</span>
              </div>
              <div>
                <span className={styles.num}>03/</span>
                <span className={styles.title}>Marketing Analysis </span>
                <span className={styles.text}>/ Design - Brand</span>
              </div>
              <div>
                <span className={styles.num}>04/</span>
                <span className={styles.title}>Bisnext Business </span>
                <span className={styles.text}>/ Agency - Business</span>
              </div>
            </div>
          </div>
        )}
      </Transition>
    </>
  );
};

export default Portfolio;
