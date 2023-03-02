import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

import heroBanner from "../public/assets/images/Hero.jpg";
import conversationImg from "../public/assets/images/Conversation.jpg";
import styles from "../styles/hero.module.sass";
import Button from "./Button";
import { Transition } from "react-transition-group";
import classNames from "classnames";
import { useDispatch } from "react-redux";
import { setActiveItem } from "../store/header/actions";

const Hero = ({ onClick, inView, entry }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    entry?.isIntersecting && dispatch(setActiveItem("HOME"));
  }, [inView]);

  return (
    <div className={styles.root}>
      <Image
        fill
        style={{ objectFit: "cover", zIndex: -1 }}
        src={heroBanner}
        alt="Man is writing"
        placeholder="blur"
      ></Image>
      <div className={styles.heroTxt}>
        <h1>
          Business Solution <br></br>by Digital<br></br>
        </h1>
      </div>
      <div className={styles.heroTxt_stroke}>
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

      <Transition in={inView} timeout={2000} mountOnEnter unmountOnExit>
        {(state) => (
          <div className={classNames(styles[state], styles.imageBlock)}>
            <Image
              width="470px"
              height="230px"
              src={conversationImg}
              alt="People are talking in the office"
              priority={true}
              placeholder="blur"
            ></Image>
          </div>
        )}
      </Transition>

      <div className={styles.ctaWrapper}>
        <Button inView={inView} className={styles.button} type="secondary">
          GET IN TOUCH
        </Button>
      </div>

      <div className={styles.ctaWrapper2} onClick={onClick}>
        <div className={styles.cta2}>
          <p>SCROLL</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
