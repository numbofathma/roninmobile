import React from 'react';
import WeAre from '../components/WeAre';
import Contact from '../components/Contact';
import scrollToElement from 'scroll-to-element';
import OurWorkContainer from '../components/OurWork';
import Head from 'next-server/head';

interface HomePageProps {
    isMobile: boolean;
    isAndroid: boolean;
    isiOS: boolean;
}

class HomePage extends React.Component<HomePageProps> {
    render() {
        return (
            <React.Fragment>
                <Head><title>We are Ronin Mobile</title></Head>
                <WeAre
                    isMobile={this.props.isMobile}
                    onClick={() => {
                        scrollToElement('#our-work', {
                            offset: 0,
                            duration: 500
                        });
                    }} />
                <OurWorkContainer
                    isMobile={this.props.isMobile}
                    isAndroid={this.props.isAndroid}
                    isiOS={this.props.isiOS}
                    onClick={() => {
                        scrollToElement('#contact-us', {
                            offset: 0,
                            duration: 500
                        });
                    }} />
                <Contact />
            </React.Fragment>
        );
    }
}

export default HomePage;
