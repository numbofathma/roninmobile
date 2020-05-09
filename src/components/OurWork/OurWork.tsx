import * as React from 'react';
import { Col, Container, Row } from 'reactstrap';
import { OurWorkWrapper } from './style';
import ProjectCard from '../ProjectCard';
import { SlideButton, SlideHeader } from '../common/Style/style';
import { Project } from '../../redux/state';

interface OurWorkProps {
  isMobile: boolean;
  isAndroid: boolean;
  isiOS: boolean;
  onClick: () => void;
  projects: Project[];
}

const OurWork = (props: OurWorkProps) => (
  <OurWorkWrapper>
    <Container>
      <Row>
        <Col>
          <SlideHeader>OUR WORK</SlideHeader>
        </Col>
      </Row>
      <Row>
        <Col>
          <p>These are some of our applications we done so far. Check them out and let us know what you think via the reviews.</p>
        </Col>
      </Row>
      <Row>
        {props.projects.map((project, id) => (
          <Col key={id} xs="12" sm="12" md="6" xl="4">
            <ProjectCard
              isMobile={props.isMobile}
              isAndroid={props.isAndroid}
              isiOS={props.isiOS}
              project={project}
              colorFront="#FFFFFF"
              colorBack="#FFFFFF"
            />
          </Col>
        ))}
      </Row>
      <Row>
        <Col>
          <br /><br /><br />
          <SlideButton size="lg" onClick={props.onClick}>CONTACT US</SlideButton>
        </Col>
      </Row>
    </Container>
  </OurWorkWrapper>
);

export default OurWork;
