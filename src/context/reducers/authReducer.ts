import {authInitialState} from '../initialStates';

export const authReducer = (state = authInitialState, {type, payload}) => {
  switch (type) {
    case 'LOGIN':
      return state;

    default:
      return state;
  }
};
