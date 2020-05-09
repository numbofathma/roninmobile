import * as React from 'react';
import { connect } from 'react-redux';
import OurWork from './OurWork';
import { State, Project } from '../../redux/state';

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

const OurWorkContainer = (props: OurWorkContainerProps) => (
  <OurWork
    isMobile={props.isMobile}
    isAndroid={props.isAndroid}
    isiOS={props.isiOS}
    onClick={props.onClick}
    projects={props.projects}
  />
);

const mapStateToProps = (state: State) => ({
  projects: state.projects,
});

export default connect(mapStateToProps)(OurWorkContainer);
