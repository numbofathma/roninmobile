import Router from 'next/router';
import * as React from 'react';
import {
  Col, Container, Row, Button,
} from 'reactstrap';
import { ProjectDetailsWrapper } from './style';
import { SlideHeader } from '../common/Style/style';
import { Project } from '../../redux/state';
import { StaticLogo } from '../common/Logo';
import ProjectLink from '../ProjectLink';
import Carousel from '../common/Carousel/Carousel';

interface ProjectDetailsProps {
  isMobile: boolean;
  isAndroid: boolean;
  isiOS: boolean;
  project: Project;
}

const ProjectDetails = (props: ProjectDetailsProps) => (
  <ProjectDetailsWrapper>
    <Container>
      <Row>
        <Col>
          <SlideHeader position="left">
            &nbsp;<Button onClick={() => Router.push('/')} size="lg">&larr;</Button> &nbsp;{props.project.title}
          </SlideHeader>
        </Col>
      </Row>
      <Row>
        <Col>
          <Carousel
            images={props.project.portfolio}
            settings={props.project.portfolioSettings}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <p>{props.project.description}</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <br /><br /><br /><br />
          <ProjectLink
            isAndroid={props.isAndroid}
            isiOS={props.isiOS}
            title={props.project.title}
            links={props.project.links}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <br /><br />
          <StaticLogo />
          <br />
          <div className="small text-center">
            Copyright &copy; Ronin Mobile
          </div>
          <br />
        </Col>
      </Row>
    </Container>

  </ProjectDetailsWrapper>
);

export default ProjectDetails;
