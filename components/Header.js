import React, { useEffect, useRef, useState } from "react";
import Head from "next/head";
import A from "../components/A";
import styles from "../styles/header.module.sass";
import Image from "next/image";
import logo from "../public/assets/images/logo.png";
//import { menuItems } from "../constants/fixtures.js";
import Hamburger from "./Hamburger";
import classNames from "classnames";
import { getIsSsrMobile, useIsMobile } from "../utils/ifMobileIsChecking";
import { GetServerSidePropsContext } from "next";
import { useDispatch, useSelector } from "react-redux";
import {
  selectMenuItems,
  selectActiveMenuItem,
} from "./../store/header/selectors";
import { setActiveItem } from "../store/header/actions";
const Header = ({ keywords, title, isSsrMobile }) => {
  const [toListen, setToListen] = useState(true);
  const ref = useRef();
  const menuItems = useSelector(selectMenuItems);
  const activeSection = useSelector(selectActiveMenuItem);

  useEffect(() => {
    const value = scrollY / 4000;
    ref.current.style.backgroundColor = `rgba(17,17,17,${value})`;
  }, [activeSection]);

  const [menuShown, setShownMenu] = useState(false);

  function showMenu() {
    isMobile && setShownMenu(!menuShown);
  }

  const isMobile = useIsMobile();
  const dispatch = useDispatch();
  return (
    <div className={styles.root} ref={ref}>
      <Head>
        <meta keywords={`${keywords}`}></meta>
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
              <A
                key={item.text}
                isActive={activeSection === item.text}
                className={styles.link}
                href={item.link}
                onClick={() => dispatch(setActiveItem(item.text))}
              >
                {item.text}
              </A>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Header;

export async function getServerSideProps(context) {
  return {
    props: {
      isSsrMobile: getIsSsrMobile(context),
    },
  };
}
