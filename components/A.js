import Link from "next/link";
import React from "react";
import styles from "../styles/A.module.sass";
import classNames from "classnames";

const A = ({ href, children, className, isActive, onClick }) => {
  return (
    //shallow true if I don't want rerunning getStaticProps, getServerSideProps or getInitialProps
    <Link
      onClick={onClick}
      className={classNames(styles.link, className, {
        [styles.active]: isActive,
      })}
      href={href}
    >
      {children}
    </Link>
  );
};

export default A;
