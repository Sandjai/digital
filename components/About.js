import React, { useEffect, useRef, useState } from "react";
import styles from "../styles/about.module.sass";

import ManIsWriting from "../public/assets/images/ManIsWriting.jpg";
import PeopleSmiling from "../public/assets/images/PeopleSmiling.jpg";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { setActiveItem } from "../store/header/actions";
import { Transition } from "react-transition-group";
import useIfViewedOnce from "../utils/useIfViewedOnce";
import classNames from "classnames";
import Counter from "./Counter";

const About = ({ id, inView, entry }) => {
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);

  useIfViewedOnce({ inView, setVisible });
  useEffect(() => {
    entry?.isIntersecting && dispatch(setActiveItem("ABOUT"));
  }, [inView]);

  return (
    <>
      <Transition in={visible} timeout={500}>
        {(state) => (
          <div id={id} className={styles.root}>
            <div className={classNames(state, styles.col1)}>
              <div className={styles.imageWrap}>
                <Image
                  className={styles.image_abs}
                  src={ManIsWriting}
                  alt="Man is writing"
                ></Image>
                <Image
                  className={styles.image}
                  src={PeopleSmiling}
                  alt="People are smiling"
                ></Image>
              </div>
            </div>
            <div className={classNames(state, styles.col2)}>
              <div>
                <p className="sectionName">ABOUT US</p>
                <h2>We Are Creative Digital Marketing Agency</h2>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </p>
              <ul className={classNames(state, styles.custUl)}>
                <li>Sed ut perspiciatis unde omnis iste natus error</li>
                <li>Totam rem aperiam, eaque ipsa quae ab illo</li>
                <li>But I must explain to you how all this mistaken idea</li>
                <li>At vero eos et accusamus et iusto odio dignissimos</li>
              </ul>
            </div>

            <div className={styles.col3}>
              <div className={styles.kpis}>
                <div className={classNames(state, styles.kpi)}>
                  <p className={styles.num}>
                    <Counter
                      visible={visible}
                      end={120}
                      speed="med"
                      symb="%"
                    ></Counter>
                  </p>
                  <p className={styles.title}>Increase in sales</p>
                </div>
                <div className={classNames(state, styles.kpi)}>
                  <p className={styles.num}>
                    <Counter
                      visible={visible}
                      end={250}
                      speed="fast"
                      symb="%"
                    ></Counter>
                  </p>
                  <p className={styles.title}>Customer Engagement</p>
                </div>
                <div className={classNames(state, styles.kpi)}>
                  <p className={styles.num}>
                    <Counter
                      visible={visible}
                      end={100}
                      speed="slow"
                      symb="%"
                    ></Counter>
                  </p>
                  <p className={styles.title}>Customer Support</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </Transition>
    </>
  );
};

export default About;
