import React from 'react';
import scrollToElement from 'scroll-to-element';
import Head from 'next/head';
import WeAre from '../components/WeAre';
import Contact from '../components/Contact';
import OurWorkContainer from '../components/OurWork';
import Starfield from '../components/common/Starfield';

interface HomePageProps {
  isMobile: boolean;
  isAndroid: boolean;
  isiOS: boolean;
}

const HomePage = (props: HomePageProps) => (
  <>
    <Head><title>We are Ronin Mobile</title></Head>
    <Starfield />
    <WeAre
      isMobile={props.isMobile}
      onClick={() => {
        scrollToElement('#our-work', {
          offset: 0,
          duration: 500,
        });
      }}
    />
    <OurWorkContainer
      isMobile={props.isMobile}
      isAndroid={props.isAndroid}
      isiOS={props.isiOS}
      onClick={() => {
        scrollToElement('#contact-us', {
          offset: 0,
          duration: 500,
        });
      }}
    />
    <Contact />
  </>
);

export default HomePage;
