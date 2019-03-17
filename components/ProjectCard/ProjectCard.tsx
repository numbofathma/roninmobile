import * as React from 'react';
import RoundImage from '../common/RoundImage';
import Flippy, {BackSide, FrontSide} from 'react-flippy';
import {ProjectCardSecondaryHeader, ProjectCardWrapper} from './style';
import ProjectLink from '../ProjectLink';
import Link from 'next/link';
import {Project} from '../../redux/state';

interface ProjectCardProps {
    project: Project;
    colorFront: string;
    colorBack: string;
}

const ProjectCard = (props: ProjectCardProps) => (
    <ProjectCardWrapper>
        <Flippy
            flipOnHover={true} // default false
            flipOnClick={false} // default false
            flipDirection='horizontal' // horizontal or vertical
            style={{
                height: '365px'
            }}
        >
            <FrontSide
                style={{
                    backgroundColor: props.colorFront,
                    textAlign: 'center',
                    cursor: 'pointer',
                    height: 'auto',
                    minHeight: '365px',
                    paddingTop: '25px'
                }}
            >
                <RoundImage
                    src={props.project.image}
                    title={props.project.title}
                />
            </FrontSide>
            <BackSide
                style={{
                    backgroundColor: props.colorBack,
                    height: 'auto',
                    minHeight: '365px',
                    paddingTop: '25px',
                }}
            >
                <RoundImage
                    src={props.project.image}
                    title={props.project.title}
                    width={75}
                    height={75}
                />

                <ProjectCardSecondaryHeader>
                    {props.project.title}
                </ProjectCardSecondaryHeader>

                <br />
                <Link
                    href={`/project/?slug=${props.project.slug}`}
                    as={`/project/${props.project.slug}`}
                >
                    <a>details &raquo;</a>
                </Link>

                <ProjectLink
                    title={props.project.title}
                    links={props.project.links}
                />
            </BackSide>
        </Flippy>
    </ProjectCardWrapper>
);

export default ProjectCard;
