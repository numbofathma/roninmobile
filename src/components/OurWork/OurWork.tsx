import * as React from 'react';
import { Col, Container, Row } from 'reactstrap';
import ProjectCard from '@components/ProjectCard';
import { SlideButton, SlideHeader } from '@components/common/Style/style';
import { Project } from '@redux/state';
import { OurWorkWrapper } from './style';

interface OurWorkProps {
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
        <Col className="text-center">
          <br /><br /><br />
          <SlideButton
            className="my-5"
            size="lg"
            onClick={props.onClick}
          >
            CONTACT US
          </SlideButton>
        </Col>
      </Row>
    </Container>
  </OurWorkWrapper>
);

export default OurWork;
