import * as React from 'react';
import { connect } from 'react-redux';
import Head from 'next/head';
import { NextPageContext } from 'next';
import { ParsedUrlQuery } from 'querystring';
import { State, Project } from '../../redux/state';
import ProjectDetails from '../../components/ProjectDetails';
import NotFound from '../../components/NotFound';

interface ComponentProps {
  isMobile: boolean;
  isAndroid: boolean;
  isiOS: boolean;
}

interface StoreProps {
  projects: Project[];
}

interface RequestProps {
  query: ParsedUrlQuery;
}

type ProjectPageProps = ComponentProps & StoreProps & RequestProps;

class ProjectPage extends React.Component<ProjectPageProps> {
  static getInitialProps({ query }: NextPageContext) {
    return { query };
  }

  render() {
    const {
      projects, query, isAndroid, isiOS,
    } = this.props;

    const currentProject = projects.find((project: Project) => project.slug === query.slug);

    if (!currentProject) {
      return <NotFound />;
    }

    return (
      <>
        <Head><title>Ronin Mobile - {currentProject.title}</title></Head>
        <ProjectDetails
          isAndroid={isAndroid}
          isiOS={isiOS}
          project={currentProject}
        />
      </>
    );
  }
}

const mapStateToProps = (state: State) => ({
  projects: state.projects,
});

export default connect(mapStateToProps)(ProjectPage);
