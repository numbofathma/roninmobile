import * as React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { WeAreWrapper } from './style';
import { SlideButton } from '../common/Style/style';
import { Logo } from '../common/Logo';
import SocialListContainer from '../SocialList/SocialListContainer';

interface WeAreProps {
  isMobile: boolean;
  onClick: () => void;
}

const WeAre = (props: WeAreProps) => (
  <WeAreWrapper>
    <Container>
      <Row>
        <Col>
          <Logo isMobile={props.isMobile} />
        </Col>
      </Row>
      <Row>
        <Col>
          <br />
          <br />
          <p>Hello, stranger and welcome to the Ronin Mobile website!</p>
          <p>Check our portfolio below!</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <br />
          <br />
          <SocialListContainer />
          <SlideButton
            className="my-5"
            size="lg"
            onClick={props.onClick}
          >
            OUR WORK
          </SlideButton>
        </Col>
      </Row>
    </Container>
  </WeAreWrapper>
);

export default WeAre;
