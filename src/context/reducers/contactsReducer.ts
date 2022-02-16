import {contactsInitialState} from '../initialStates';

export const contactsReducer = (
  state = contactsInitialState,
  {type, payload},
) => {
  switch (type) {
    case 'GET_CONTACTS':
      return state;

    default:
      return state;
  }
};
