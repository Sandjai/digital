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
import { useEffect, useRef } from "react";

const Index = () => {
  let pos = 0;
  let partners = useRef(null);
  let hero = useRef(null);

  const onScroll = (e) => {
    const value = scrollY;

    let posNow = window.document.documentElement.scrollTop;

    if (value < 2) {
      if (posNow > pos) {
        window.scrollBy(0, document.documentElement.clientHeight);
      }
    }

    pos = posNow;
  };

  useEffect(() => {
    document.addEventListener("scroll", onScroll);

    return () => {
      document.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <MainContainer title="Digital Agency" keywords="digital, agency">
      <SlideContainer>
        <section ref={hero}>
          <Hero onClick={(e) => partners.current.scrollIntoView()} />
        </section>
      </SlideContainer>

      <PageContent>
        <section className={styles.partners} ref={partners} id="partners">
          <Partners />
        </section>

        <section id="info">
          <Info></Info>
        </section>
        <section id="infoDetails">
          <InfoDetails />
        </section>

        <section id="about">
          <About />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="portfolio">
          <Portfolio />
        </section>
        <section id="reviews">
          <Reviews />
        </section>
        <section className={styles.contact} id="contact">
          <FormBlock />
        </section>
      </PageContent>
    </MainContainer>
  );
};

export default Index;
