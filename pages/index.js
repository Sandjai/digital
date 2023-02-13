import styles from "../styles/index.module.sass";
import MainContainer from "../components/MainContainer";
import Hero from "../components/Hero";
import Info from "../components/Info";
import SlideContainer from "../components/SlideContainer";
import Partners from "../components/Partners";
import PageContent from "../components/PageContent";
import InfoDetails from "../components/InfoDetails";
import About from "../components/About";
import Projects from "../components/Projects";
import Portfolio from "../components/Portfolio";
import Reviews from "../components/Reviews";
import FormBlock from "../components/FormBlock";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <MainContainer title="Digital Agency" keywords="digital agency">
      <SlideContainer>
        <Hero></Hero>
      </SlideContainer>
      <PageContent>
        <Partners></Partners>

        <Info></Info>

        <InfoDetails></InfoDetails>

        <About></About>

        <Projects></Projects>

        <Portfolio></Portfolio>

        <Reviews></Reviews>

        <FormBlock></FormBlock>

        <Footer></Footer>
      </PageContent>
    </MainContainer>
  );
};

export default Index;
