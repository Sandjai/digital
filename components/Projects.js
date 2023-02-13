import React from "react";
import styles from "../styles/projects.module.sass";
import Button from "./Button";

const Projects = () => {
  return (
    <div className={styles.root}>
      <div className={styles.col1}>
        <div>
          <p className={styles.num}>100+</p>
        </div>
        <div>
          <h3>Project Complete</h3>
          <p>
            On the other hand, we denounce with righteous indignation and
            dislike men who
          </p>
        </div>
        <div>
          <p className={styles.num}>3290</p>
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
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam
        </p>
        <Button type="primary">VIEW ALL VALUE</Button>
      </div>
    </div>
  );
};

export default Projects;
