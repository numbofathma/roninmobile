import * as React from 'react';
import { ProjectDetailsWrapper, SliderWrapper} from './style';
import {Col, Container, Row} from 'reactstrap';
import {SlideHeader} from '../common/Style/style';
import {Project} from '../../redux/state';
import {StaticLogo} from '../common/Logo';
import ProjectLink from '../ProjectLink';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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
                    <SliderWrapper>
                        <Slider {...props.project.portfolioSettings}>
                            {props.project.portfolio.map( (src, index ) => (
                                <img key={index} src={src} title={props.project.title} />
                            ))}
                        </Slider>
                    </SliderWrapper>
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
