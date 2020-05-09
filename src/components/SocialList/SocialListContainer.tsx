import * as React from 'react';
import { connect } from 'react-redux';
import { SocialItem, State } from '../../redux/state';
import SocialList from './SocialList';

interface SocialListContainerProps {
  socials: SocialItem[];
}

const SocialListContainer = (props: SocialListContainerProps) => (
  <SocialList
    socials={props.socials}
  />
);

const mapStateToProps = (state: State) => ({
  socials: state.socials,
});

export default connect(mapStateToProps)(SocialListContainer);
