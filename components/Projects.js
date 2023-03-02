import React, { useState } from "react";
import styles from "../styles/projects.module.sass";
import Button from "./Button";
import { Transition } from "react-transition-group";
import useIfViewedOnce from "../utils/useIfViewedOnce";
import classNames from "classnames";
import Counter from "./Counter";

const Projects = ({ id, inView }) => {
  const [visible, setVisible] = useState(false);

  useIfViewedOnce({ inView, setVisible });

  return (
    <>
      <Transition in={visible} timeout={500}>
        {(state) => (
          <div id={id} className={classNames(state, styles.root)}>
            <div className={styles.col1}>
              <div>
                <p className={styles.num}>
                  {" "}
                  <Counter
                    visible={visible}
                    end={100}
                    speed="fast"
                    symb="+"
                  ></Counter>
                </p>
              </div>
              <div>
                <h3>Project Complete</h3>
                <p>
                  On the other hand, we denounce with righteous indignation and
                  dislike men who
                </p>
              </div>
              <div>
                <p className={styles.num}>
                  {" "}
                  <Counter
                    visible={visible}
                    end={3290}
                    speed="fast"
                    symb=" "
                    per={30}
                  ></Counter>
                </p>
              </div>
              <div>
                <h3>Creative Ideas</h3>
                <p>
                  On the other hand, we denounce with righteous indignation and
                  dislike men who
                </p>
              </div>
            </div>
            <div className={styles.col2}>
              <p className="sectionName">OUR VALUE</p>
              <h2>Successful Experience Project Matters</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam
              </p>
              <Button className={styles.button} inView={inView} type="primary">
                VIEW ALL VALUE
              </Button>
            </div>
          </div>
        )}
      </Transition>
    </>
  );
};

export default Projects;
