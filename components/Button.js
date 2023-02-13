import React from "react";
import styles from "../styles/button.module.sass";

const Button = ({ children, type }) => {
  return (
    <>
      {type === "primary" && (
        <div className={styles.root}>
          <div className={styles.cta}>
            <h5>{children}</h5>
          </div>
        </div>
      )}

      {type === "submit" && (
        <div className={styles.root}>
          <div className={styles.cta}>
            <button type="submit">
              <h5>{children}</h5>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Button;
