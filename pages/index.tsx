import React from 'react';
import WeAre from '../components/WeAre';
import Contact from '../components/Contact';
import scrollToElement from 'scroll-to-element';
import OurWorkContainer from '../components/OurWork';

const FullpageWrapper = () => (
    <React.Fragment>
        <WeAre onClick={() => {
            scrollToElement('#our-work', {
                offset: 0,
                duration: 500
            });
        }} />
        <OurWorkContainer onClick={() => {
            scrollToElement('#contact-us', {
                offset: 0,
                duration: 500
            });
        }} />
        <Contact />
    </React.Fragment>
);

class HomePage extends React.Component {
    render() {
        return (
            <FullpageWrapper />
        );
    }
}

export default HomePage;
