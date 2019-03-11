import * as React from 'react';
import {connect} from 'react-redux';
import {State, Project} from '../redux/state';
import ProjectDetails from '../components/ProjectDetails';

interface StoreProps {
    projects: Project[];
    query: any;
}

type ProjectPageProps = StoreProps;

class ProjectPage extends React.Component<ProjectPageProps> {
    static async getInitialProps ({ query }) {
        return { query };
    }

    render () {
        const { projects, query} = this.props;
        const project = projects.find(project => project.slug === query.slug);

        if (!project) {
            return <h1>404</h1>;
        }

        return <ProjectDetails project={project} />;
    }
}

const mapStateToProps = (state: State) => ({
    projects: state.projects
});

const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(ProjectPage);
