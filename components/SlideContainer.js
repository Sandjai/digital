import styles from "../styles/slideContainer.module.sass";
import React from "react";

const SlideContainer = ({ children }) => {
  return <div className={styles.slide}>{children}</div>;
};

export default SlideContainer;
