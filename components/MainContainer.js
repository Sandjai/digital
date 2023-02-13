import Header from "./Header";
import styles from "../styles/mainContainer.module.sass";

const MainContainer = ({ children, keywords, title }) => {
  return (
    <>
      <Header keywords={keywords} title={title}></Header>
      {children}
      <footer></footer>
    </>
  );
};

export default MainContainer;
