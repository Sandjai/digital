import React, { useEffect, useState } from "react";
import styles from "../styles/partners.module.sass";
import Image from "next/image";
import partner1 from "../public/assets/icons/partners/1.png";
import partner2 from "../public/assets/icons/partners/2.png";
import partner3 from "../public/assets/icons/partners/3.png";
import partner4 from "../public/assets/icons/partners/4.png";
import partner5 from "../public/assets/icons/partners/5.png";
import { Transition } from "react-transition-group";
import classNames from "classnames";
import { useDispatch } from "react-redux";
import { HEADER_ACTIONS, setActiveItem } from "../store/header/actions";
import useIfViewedOnce from "../utils/useIfViewedOnce";

const Partners = ({ inView, entry }) => {
  const [visible, setVisible] = useState(false);

  useIfViewedOnce({ inView, setVisible });

  return (
    <>
      <Transition in={visible} timeout={500}>
        {(state) => (
          <div className={styles.root}>
            <div className={styles.allocated}>
              <div className={classNames(state, styles.textWrapper)}>
                <p>OVER 2K+ SOFTWARE BUSINESSE GROWING WITH OUR BUSINESS</p>
              </div>
            </div>
            <div className={styles.icons}>
              <Image
                className={classNames(styles.images, state)}
                src={partner1}
                width="72px"
                height="50px"
                alt="Partner of the company"
              ></Image>

              <Image
                src={partner2}
                className={classNames(styles.images, state)}
                width="97px"
                height="50px"
                alt="Partner of the company"
              ></Image>

              <Image
                src={partner3}
                className={classNames(styles.images, state)}
                width="61px"
                height="48px"
                alt="Partner of the company"
              ></Image>

              <Image
                src={partner4}
                className={classNames(styles.images, state)}
                width="128px"
                height="50px"
                alt="Partner of the company"
              ></Image>

              <Image
                src={partner5}
                className={classNames(styles.images, state)}
                width="108px"
                height="60px"
                alt="Partner of the company"
              ></Image>
            </div>
          </div>
        )}
      </Transition>
    </>
  );
};

export default Partners;
