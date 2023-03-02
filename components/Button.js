import React, { useEffect, useState } from "react";
import styles from "../styles/button.module.sass";
import classNames from "classnames";
import { Transition } from "react-transition-group";
import { useDispatch, useSelector } from "react-redux";
import useIfViewedOnce from "../utils/useIfViewedOnce";
const Button = ({ children, type, className, inView }) => {
  const [visible, setVisible] = useState(false);

  useIfViewedOnce({ inView, setVisible });
  return (
    <>
      {(type === "primary" || type === "secondary") && (
        <div className={classNames(className, styles.root)}>
          <Transition in={visible} timeout={2000}>
            {(state) => (
              <div
                className={classNames(
                  styles.animateCTA,
                  {
                    [styles.orange]: type === "secondary",
                    [styles.grey]: type === "primary",
                  },
                  styles[state]
                )}
              ></div>
            )}
          </Transition>
          <Transition in={visible} timeout={2000} t>
            {(state) => (
              <div
                className={classNames(styles[state], styles.cta, {
                  [styles.cta_grey]: type === "primary",
                  [styles.cta_orange]: type === "secondary",
                })}
              ></div>
            )}
          </Transition>
          <Transition in={visible} timeout={2000}>
            {(state) => (
              <div className={classNames(styles[state], styles.cta__text)}>
                <h5>{children}</h5>
              </div>
            )}
          </Transition>
        </div>
      )}

      {type === "submit" && (
        <div className={classNames(className, styles.root)}>
          <Transition in={visible} timeout={2000}>
            {(state) => (
              <div
                className={classNames(
                  styles.animateCTA,
                  styles.grey,
                  styles[state]
                )}
              ></div>
            )}
          </Transition>

          <Transition in={visible} timeout={2000}>
            {(state) => (
              <div
                className={classNames(
                  styles[state],
                  styles.cta,
                  styles.cta_grey
                )}
              ></div>
            )}
          </Transition>

          <button type="submit">
            <Transition in={visible} timeout={2000}>
              {(state) => (
                <div
                  className={classNames(
                    styles[state],

                    styles.cta__text
                  )}
                >
                  <h5>{children}</h5>
                </div>
              )}
            </Transition>
          </button>
        </div>
      )}
    </>
  );
};

export default Button;
