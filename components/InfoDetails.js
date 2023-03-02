import React, { useState } from "react";
import DigitalAgency from "../public/assets/images/DigitalAgency.jpg";
import WebDevelopment from "../public/assets/images/WebDevelopment.jpg";
import CustomSolutions from "../public/assets/images/CustomSolutions.jpg";
import styles from "../styles/infoDetails.module.sass";
import Image from "next/image";
import classNames from "classnames";
import { Transition } from "react-transition-group";
import useIfViewedOnce from "../utils/useIfViewedOnce";

const InfoDetails = ({ inView }) => {
  const [visible, setVisible] = useState(false);

  useIfViewedOnce({ inView, setVisible });
  return (
    <>
      <Transition in={visible} timeout={500}>
        {(state) => (
          <div className={styles.root}>
            <div className={classNames(state, styles.col1)}>
              <Image
                className={styles.images}
                src={DigitalAgency}
                alt="Digital Agency"
                width="350px"
                height="380px"
                placeholder="blur"
              ></Image>
              <figcaption className={styles.title}>Digital Agency</figcaption>
            </div>
            <div className={classNames(state, styles.col2)}>
              <Image
                className={styles.images}
                src={WebDevelopment}
                alt="Web Development"
                width="350px"
                height="380px"
                placeholder="blur"
              ></Image>
              <figcaption className={styles.title}>Web Development</figcaption>
            </div>
            <div className={classNames(state, styles.col3)}>
              <Image
                className={styles.images}
                src={CustomSolutions}
                alt="Custom Solutions"
                width="350px"
                height="380px"
                placeholder="blur"
              ></Image>
              <figcaption className={styles.title}>Custom Solutions</figcaption>
            </div>
          </div>
        )}
      </Transition>
    </>
  );
};

export default InfoDetails;
