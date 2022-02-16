import {IContactsState} from '../types/contactsTypes';

export const contactsInitialState: IContactsState = {
  getContacts: {
    data: {},
    error: null,
    loading: false,
  },
  createContacts: {
    data: {},
    error: null,
    loading: false,
  },
  deleteContacts: {
    data: {},
    error: null,
    loading: false,
  },
};
