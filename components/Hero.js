import React from "react";
import Image from "next/image";

import heroBanner from "../public/assets/images/Hero.jpg";
import conversationImg from "../public/assets/images/Conversation.jpg";
import styles from "../styles/hero.module.sass";

const Hero = () => {
  return (
    <>
      <Image
        fill
        style={{ objectFit: "cover" }}
        src={heroBanner}
        alt="Man is writing"
        placeholder="blur"
      ></Image>
      <div className={styles.heroTxt}>
        <h1>
          Business Solution <br></br>by Digital<br></br>
        </h1>
        <h2>
          <span className={styles.strokeTxt}> Agency</span>
        </h2>
      </div>
      <div className={styles.allocated}>
        <div className={styles.textWrapper}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna.
          </p>
        </div>
      </div>
      <div className={styles.imageBlock}>
        <div className={styles.imageWrapper}>
          <Image
            width="470px"
            height="230px"
            src={conversationImg}
            alt="People are talking in the office"
            priority={true}
          ></Image>
        </div>
      </div>

      <div className={styles.ctaWrapper}>
        <div className={styles.cta1}>
          <p>GET IN TOUCH</p>
        </div>
      </div>

      <div className={styles.ctaWrapper2}>
        <div className={styles.cta2}>
          <p>SCROLL</p>
        </div>
      </div>
    </>
  );
};

export default Hero;
