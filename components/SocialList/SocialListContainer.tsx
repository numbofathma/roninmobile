import * as React from 'react';
import {SocialItem, State} from '../../redux/state';
import {connect} from 'react-redux';
import SocialList from './SocialList';

interface SocialListContainerProps {
    socials: SocialItem[];
}

class SocialListContainer extends React.Component<SocialListContainerProps> {
    public render() {
        return (
           <SocialList
               socials={this.props.socials}
           />
        );
    }
}


const mapStateToProps = (state: State) => ({
    socials: state.socials
});

const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(SocialListContainer);
