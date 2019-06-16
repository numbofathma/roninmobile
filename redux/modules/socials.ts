import { AnyAction } from 'redux';
import initialState from '../initialState';
import {SocialItem} from '../state';

/** Actions */
const GET_SOCIALS = 'app/projects/GET_SOCIALS';

/** Action Creators */
export const getSocials = (): AnyAction => ({
    type: GET_SOCIALS
});

/** Reducer */
const socials = (state: SocialItem[] = initialState.socials, action: AnyAction) => {
    switch (action.type) {
        case GET_SOCIALS:
            return state;
        default:
            return state;
    }
};

export default socials;
