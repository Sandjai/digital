import styles from "../styles/info.module.sass";
import React, { useState } from "react";
import Button from "./Button";
import useIfViewedOnce from "../utils/useIfViewedOnce";
import { Transition } from "react-transition-group";
import classNames from "classnames";

const Info = ({ inView }) => {
  const [visible, setVisible] = useState(false);

  useIfViewedOnce({ inView, setVisible });

  return (
    <Transition in={visible} timeout={1000}>
      {(state) => (
        <div className={styles.root}>
          <div className={classNames(state, styles.col1)}>
            <p className="sectionName">FEATURES</p>
            <h2>Follow These Steps to Expand Your Business</h2>
          </div>
          <div className={styles.col2}>
            <p className={state}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore .
            </p>
            <Button className={styles.button} inView={inView} type="primary">
              VIEW ALL FEATURES
            </Button>
          </div>
        </div>
      )}
    </Transition>
  );
};

export default Info;
