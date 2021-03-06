import * as React from 'react';
import { connect } from 'react-redux';
import { State, Project } from '@redux/state';
import OurWork from './OurWork';

interface ComponentProps {
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
