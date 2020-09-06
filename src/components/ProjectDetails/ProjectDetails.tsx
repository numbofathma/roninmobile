import Router from 'next/router';
import * as React from 'react';
import {
  Col, Container, Row,
} from 'reactstrap';
import { SlideHeader, SlideButton } from '@components/common/Style/style';
import { Project } from '@redux/state';
import { StaticLogo } from '@components/common/Logo';
import ProjectLink from '@components/ProjectLink';
import Carousel from '@components/common/Carousel/Carousel';
import { ProjectDetailsWrapper } from './style';

interface ProjectDetailsProps {
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
            &nbsp;<SlideButton onClick={() => Router.push('/')} size="lg">&larr;</SlideButton> &nbsp;{props.project.title}
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
      {
        props.project.featured.length > 0
        && (
        <Row>
          <Col>
            This game has been featured here:<br />
            {
              props.project.featured.map(
                (featuredLink, key) => (
                  <a
                    key={key}
                    href={featuredLink.url}
                    title={featuredLink.title}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {featuredLink.title}
                  </a>
                ),
              )
              }
          </Col>
        </Row>
        )
      }
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
