import styles from "../styles/PageContent.module.sass";
import React from "react";

const PageContent = ({ children }) => {
  return <div className={styles.root}>{children}</div>;
};

export default PageContent;
