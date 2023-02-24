import styles from "../styles/info.module.sass";
import React from "react";
import Button from "./Button";

const Info = () => {
  return (
    <div className={styles.root}>
      <div className={styles.col1}>
        <p className="sectionName">FEATURES</p>
        <h2>Follow These Steps to Expand Your Business</h2>
      </div>
      <div className={styles.col2}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore .
        </p>
        <Button className={styles.button} type="primary">
          VIEW ALL FEATURES
        </Button>
      </div>
    </div>
  );
};

export default Info;
