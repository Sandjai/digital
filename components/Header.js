import React, { useState } from "react";
import Head from "next/head";
import A from "../components/A";
import styles from "../styles/header.module.sass";
import Image from "next/image";
import logo from "../public/assets/images/logo.png";

const Header = ({ keywords, title }) => {
  return (
    <div className={styles.root}>
      <Head>
        <meta keywords={`test + ${keywords}`}></meta>
        <title>{title}</title>
      </Head>
      <Image src={logo} alt="logo"></Image>
      <div className={styles.navbar}>
        <A className={styles.link} href="/">
          HOME
        </A>
        <A className={styles.link} href="/portfolio">
          PORTFOLIO
        </A>
        <A className={styles.link} href="/about">
          ABOUT
        </A>
        <A className={styles.link} href="#contact">
          CONTACT
        </A>
      </div>
    </div>
  );
};

export default Header;
