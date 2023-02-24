import React from "react";
import styles from "../styles/hamburger.module.sass";
import classNames from "classnames";

const Hamburger = ({ onClick, menuShown }) => {
  return (
    <div className={styles.root} onClick={onClick}>
      <div className={styles.hamburger}>
        <div
          className={classNames(styles.hamburger__top, {
            [styles.hamburger__top_open]: menuShown,
          })}
        ></div>
        <div
          className={classNames(styles.hamburger__middle, {
            [styles.hamburger__middle_open]: menuShown,
          })}
        ></div>
        <div
          className={classNames(styles.hamburger__bottom, {
            [styles.hamburger__bottom_open]: menuShown,
          })}
        ></div>
      </div>
    </div>
  );
};

export default Hamburger;
