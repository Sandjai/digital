import React, { useEffect, useRef, useState } from "react";
import Head from "next/head";
import A from "../components/A";
import styles from "../styles/header.module.sass";
import Image from "next/image";
import logo from "../public/assets/images/logo.png";
import { menuItems } from "../constants/fixtures.js";
import Hamburger from "./Hamburger";
import classNames from "classnames";

const Header = ({ keywords, title }) => {
  const ref = useRef();

  const onScroll = () => {
    const value = scrollY / 1200;
    ref.current.style.backgroundColor = `rgba(17,17,17,${value})`;
  };

  const [menuShown, setShownMenu] = useState(false);

  function showMenu() {
    setShownMenu(!menuShown);
  }

  useEffect(() => {
    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div className={styles.root} ref={ref}>
      <Head>
        <meta keywords={`test + ${keywords}`}></meta>
        <title>{title}</title>
      </Head>
      <Image className={styles.logo} src={logo} alt="logo"></Image>
      <div
        onClick={showMenu}
        className={classNames(styles.blur, { [styles.blur_open]: menuShown })}
      ></div>
      <div className={styles.navbar}>
        <Hamburger onClick={showMenu} menuShown={menuShown}></Hamburger>
        <div
          onClick={showMenu}
          className={classNames(styles.menuItems, {
            [styles.menuItems_open]: menuShown,
          })}
        >
          {menuItems &&
            menuItems.map((item) => (
              <A key={item.text} className={styles.link} href={item.link}>
                {item.text}
              </A>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
