import Link from "next/link";
import React from "react";
import styles from "../styles/A.module.sass";
import classNames from "classnames";

const A = ({ href, children, className }) => {
  return (
    <Link className={classNames(styles.link, className)} href={href}>
      {children}
    </Link>
  );
};

export default A;
