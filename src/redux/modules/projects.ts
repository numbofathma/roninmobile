import { AnyAction } from 'redux';
import initialState from '../initialState';
import { Project } from '../state';

/** Actions */
const GET_PROJECTS = 'app/projects/GET_PROJECTS';

/** Action Creators */
export const getProjects = (): AnyAction => ({
  type: GET_PROJECTS,
});

/** Reducer */
const projects = (state: Project[] = initialState.projects, action: AnyAction) => {
  switch (action.type) {
    case GET_PROJECTS:
      return state;
    default:
      return state;
  }
};

export default projects;
