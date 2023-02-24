import React from "react";
import styles from "../styles/button.module.sass";
import classNames from "classnames";
const Button = ({ children, type, className }) => {
  return (
    <>
      {type === "primary" && (
        <div className={classNames(className, styles.root)}>
          <div className={classNames(styles.cta, styles.cta_grey)}></div>
          <div className={styles.cta__text}>
            <h5>{children}</h5>
          </div>
        </div>
      )}

      {type === "secondary" && (
        <div className={classNames(className, styles.root)}>
          <div className={classNames(styles.cta, styles.cta_orange)}></div>
          <div className={styles.cta__text}>
            <h5>{children}</h5>
          </div>
        </div>
      )}

      {type === "submit" && (
        <div className={classNames(className, styles.root)}>
          <div className={styles.cta}></div>
          <button type="submit">
            <div className={styles.cta__text}>
              <h5>{children}</h5>
            </div>
          </button>
        </div>
      )}
    </>
  );
};

export default Button;
