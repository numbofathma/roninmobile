import * as React from 'react';
import {connect} from 'react-redux';
import Head from 'next-server/head';
import {State, Project} from '../redux/state';
import ProjectDetails from '../components/ProjectDetails';
import NotFound from '../components/NotFound';

interface ComponentProps {
    isMobile: boolean;
    isAndroid: boolean;
    isiOS: boolean;
}

interface StoreProps {
    projects: Project[];
    query: any;
}

type ProjectPageProps = ComponentProps & StoreProps;

class ProjectPage extends React.Component<ProjectPageProps> {
    static async getInitialProps ({ query }: any) {
        return { query };
    }

    render () {
        const { projects, query, isMobile, isAndroid, isiOS} = this.props;
        const project = projects.find(project => project.slug === query.slug);

        if (!project) {
            return <NotFound />;
        }

        return (
            <React.Fragment>
                <Head><title>Ronin Mobile - {project.title}</title></Head>
                <ProjectDetails
                    isMobile={isMobile}
                    isAndroid={isAndroid}
                    isiOS={isiOS}
                    project={project}
                />
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state: State) => ({
    projects: state.projects
});

const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(ProjectPage);
