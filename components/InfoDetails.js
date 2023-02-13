import React from "react";
import DigitalAgency from "../public/assets/images/DigitalAgency.jpg";
import WebDevelopment from "../public/assets/images/WebDevelopment.jpg";
import CustomSolutions from "../public/assets/images/CustomSolutions.jpg";
import styles from "../styles/infoDetails.module.sass";
import Image from "next/image";

const InfoDetails = () => {
  return (
    <div className={styles.root}>
      <div className={styles.col1}>
        <Image
          src={DigitalAgency}
          alt="Digital Agency"
          width="350px"
          height="380px"
        ></Image>
        <figcaption className={styles.title}>Digital Agency</figcaption>
      </div>
      <div className={styles.col2}>
        <Image
          src={WebDevelopment}
          alt="Web Development"
          width="350px"
          height="380px"
        ></Image>
        <figcaption className={styles.title}>Web Development</figcaption>
      </div>
      <div className={styles.col3}>
        <Image
          src={CustomSolutions}
          alt="Custom Solutions"
          width="350px"
          height="380px"
        ></Image>
        <figcaption className={styles.title}>Custom Solutions</figcaption>
      </div>
    </div>
  );
};

export default InfoDetails;
