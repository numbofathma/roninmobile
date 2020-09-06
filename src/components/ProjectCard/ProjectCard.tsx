import * as React from 'react';
import Link from 'next/link';
import RoundImage from '@components/common/RoundImage';
import ProjectLink from '@components/ProjectLink';
import { Project } from '@redux/state';
import Flippy, { FrontSide, BackSide } from '../Flippy';
import { ProjectCardSecondaryHeader, ProjectCardWrapper } from './style';

interface ProjectCardProps {
  isAndroid: boolean;
  isiOS: boolean;
  project: Project;
  colorFront: string;
  colorBack: string;
}

const ProjectCard = (props: ProjectCardProps) => (
  <ProjectCardWrapper>
    <Flippy
      flipOnHover={false} // default false
      flipOnClick={true} // default false
      flipDirection="horizontal" // horizontal or vertical
      style={{}}
    >
      <FrontSide
        style={{
          backgroundColor: props.colorFront,
          textAlign: 'center',
          cursor: 'pointer',
        }}
        animationDuration={600}
      >
        <RoundImage
          src={props.project.image}
          title={props.project.title}
        />
      </FrontSide>
      <BackSide
        style={{
          backgroundColor: props.colorBack,
        }}
        animationDuration={600}
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

        <br /><br />

        <Link
          as={`/project/${props.project.slug}`}
          href="/project/[slug]"
        >
          <a>&laquo; See More &raquo;</a>
        </Link>

        <ProjectLink
          isAndroid={props.isAndroid}
          isiOS={props.isiOS}
          title={props.project.title}
          links={props.project.links}
        />
      </BackSide>
    </Flippy>
  </ProjectCardWrapper>
);

export default ProjectCard;
