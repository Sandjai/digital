import Header from "./Header";
import styles from "../styles/mainContainer.module.sass";
import Footer from "./Footer";

const MainContainer = ({ children, keywords, title, isSsrMobile }) => {
  return (
    <div className={styles.root}>
      <Header
        isSsrMobile={isSsrMobile}
        keywords={keywords}
        title={title}
      ></Header>
      {children}
      <footer className={styles.footer}>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default MainContainer;
