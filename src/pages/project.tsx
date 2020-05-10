import * as React from 'react';
import { connect } from 'react-redux';
import Head from 'next/head';
import { useRouter, NextRouter } from 'next/router';
import { State, Project } from '../redux/state';
import ProjectDetails from '../components/ProjectDetails';
import NotFound from '../components/NotFound';

interface ComponentProps {
  isMobile: boolean;
  isAndroid: boolean;
  isiOS: boolean;
}

interface StoreProps {
  projects: Project[];
}

type ProjectPageProps = ComponentProps & StoreProps;

const ProjectPage = (props: ProjectPageProps) => {
  const router: NextRouter = useRouter();
  const { slug } = router.query;
  const {
    projects, isMobile, isAndroid, isiOS,
  } = props;

  const currentProject = projects.find((project: Project) => project.slug === slug);

  if (!currentProject) {
    return <NotFound />;
  }

  return (
    <>
      <Head><title>Ronin Mobile - {currentProject.title}</title></Head>
      <ProjectDetails
        isMobile={isMobile}
        isAndroid={isAndroid}
        isiOS={isiOS}
        project={currentProject}
      />
    </>
  );
};

const mapStateToProps = (state: State) => ({
  projects: state.projects,
});

export default connect(mapStateToProps)(ProjectPage);
