import * as React from 'react';
import { ProjectDetailsWrapper } from './style';
import {Col, Container, Row} from 'reactstrap';
import {SlideHeader} from '../common/Style/style';
import {Project} from '../../redux/state';
import {StaticLogo} from '../common/Logo';
import ProjectLink from '../ProjectLink';
import Carousel from '../common/Carousel/Carousel';

interface ProjectDetailsProps {
    project: Project;
}

const ProjectDetails = (props: ProjectDetailsProps) => (
    <ProjectDetailsWrapper>
        <Container>
            <Row>
                <Col>
                    <SlideHeader>{props.project.title}</SlideHeader>
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
                    <br /><br />
                    <p>{props.project.description}</p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <br /><br /><br /><br />
                    <ProjectLink
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
                    <div className={'small text-center'}>
                        Copyright &copy; Ronin Mobile
                    </div>
                    <br />
                </Col>
            </Row>
        </Container>

    </ProjectDetailsWrapper>
);

export default ProjectDetails;
