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
import { Transition } from "react-transition-group";
import { useInView, InView } from "react-intersection-observer";
const Index = ({ reviews, isSsrMobile }) => {
  let pos = 0;
  let partners = useRef(null);
  let hero = useRef(null);

  return (
    <MainContainer
      isSsrMobile={isSsrMobile}
      title="Digital Agency"
      keywords="digital, agency"
    >
      <SlideContainer>
        <InView>
          {({ inView, ref, entry }) => (
            <section ref={ref}>
              <Hero
                inView={inView}
                entry={entry}
                onClick={(e) => partners.current.scrollIntoView()}
              />
            </section>
          )}
        </InView>
      </SlideContainer>

      <PageContent>
        <div ref={partners}></div>
        <InView>
          {({ inView, ref, entry }) => (
            <section ref={ref} className={styles.partners} id="partners">
              <Partners inView={inView} entry={entry} />
            </section>
          )}
        </InView>

        <section id="info">
          <InView>
            {({ inView, ref, entry }) => (
              <section ref={ref} id="info">
                <Info inView={inView} entry={entry}></Info>
              </section>
            )}
          </InView>
        </section>

        <InView>
          {({ inView, ref, entry }) => (
            <section ref={ref} id="infoDetails">
              <InfoDetails inView={inView} entry={entry} />
            </section>
          )}
        </InView>

        <InView>
          {({ inView, ref, entry }) => (
            <section ref={ref} id="about">
              <About inView={inView} entry={entry} />
            </section>
          )}
        </InView>

        <InView>
          {({ inView, ref, entry }) => (
            <section ref={ref} className={styles.projects} id="projects">
              <Projects inView={inView} entry={entry} />
            </section>
          )}
        </InView>

        <InView>
          {({ inView, ref, entry }) => (
            <section ref={ref} id="portfolio">
              <Portfolio inView={inView} entry={entry} />
            </section>
          )}
        </InView>

        <InView>
          {({ inView, ref, entry }) => (
            <section ref={ref} id="reviews">
              <Reviews reviews={reviews} inView={inView} entry={entry} />
            </section>
          )}
        </InView>

        <InView>
          {({ inView, ref, entry }) => (
            <section ref={ref} className={styles.contact} id="contact">
              <FormBlock inView={inView} entry={entry} />
            </section>
          )}
        </InView>
      </PageContent>
    </MainContainer>
  );
};

export default Index;

export async function getStaticProps(context) {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/comments?_end=5"
  );
  const reviews = await response.json();

  return {
    props: { reviews }, // will be passed to the page component as props
  };
}
