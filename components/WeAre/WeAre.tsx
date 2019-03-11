import * as React from 'react';
import {WeAreWrapper} from './style';
import { Container, Row, Col } from 'reactstrap';
import {SlideButton, SlideHeader} from '../common/Style/style';
import {Logo} from '../common/Logo';
import SocialListContainer from '../SocialList/SocialListContainer';

interface WeAreProps {
    onClick: () => void;
}

const WeAre = (props: WeAreProps) => (
    <WeAreWrapper>
        <Container>
            <Row>
                <Col>
                    <SlideHeader>WE ARE RONIN!</SlideHeader>
                    <br />
                    <br />
                    <Logo />
                    <br />
                    <br />
                    <SocialListContainer />
                    <SlideButton size='lg' onClick={props.onClick}>OUR WORK</SlideButton>
                </Col>
            </Row>
        </Container>
    </WeAreWrapper>
);

export default WeAre;
