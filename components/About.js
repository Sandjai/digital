import React from "react";
import styles from "../styles/about.module.sass";

import ManIsWriting from "../public/assets/images/ManIsWriting.jpg";
import PeopleSmiling from "../public/assets/images/PeopleSmiling.jpg";
import Image from "next/image";

const About = ({ id }) => {
  return (
    <div id={id} className={styles.root}>
      <div className={styles.col1}>
        <div className={styles.imageWrap}>
          <Image
            className={styles.image}
            src={PeopleSmiling}
            alt="People are smiling"
            width="570px"
            height="600px"
          ></Image>
        </div>
      </div>
      <div className={styles.col2}>
        <div>
          <p className="sectionName">ABOUT US</p>
          <h2>We Are Creative Digital Marketing Agency</h2>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </p>
        <ul className={styles.custUl}>
          <li>Sed ut perspiciatis unde omnis iste natus error</li>
          <li>Totam rem aperiam, eaque ipsa quae ab illo</li>
          <li>But I must explain to you how all this mistaken idea</li>
          <li>At vero eos et accusamus et iusto odio dignissimos</li>
        </ul>
      </div>

      <div className={styles.col3}>
        <div className={styles.kpis}>
          <div className={styles.kpi}>
            <p className={styles.num}>120%</p>
            <p className={styles.title}>Increase in sales</p>
          </div>
          <div className={styles.kpi}>
            <p className={styles.num}>250%</p>
            <p className={styles.title}>Customer Engagement</p>
          </div>
          <div className={styles.kpi}>
            <p className={styles.num}>100%</p>
            <p className={styles.title}>Customer Support</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
