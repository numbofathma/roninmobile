import * as React from 'react';
import {connect} from 'react-redux';
import OurWork from './OurWork';
import {State, Project} from '../../redux/state';

interface ComponentProps {
    isMobile: boolean;
    isAndroid: boolean;
    isiOS: boolean;
    onClick: () => void;
}

interface StoreProps {
    projects: Project[];
}

type OurWorkContainerProps = ComponentProps & StoreProps;

class OurWorkContainer extends React.Component<OurWorkContainerProps> {
    public render() {
        return (
            <OurWork
                isMobile={this.props.isMobile}
                isAndroid={this.props.isAndroid}
                isiOS={this.props.isiOS}
                onClick={this.props.onClick}
                projects={this.props.projects}
            />
        );
    }
}

const mapStateToProps = (state: State) => ({
    projects: state.projects
});

const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(OurWorkContainer);
