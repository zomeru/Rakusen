import React, {createContext, useReducer} from 'react';

import {authInitialState, contactsInitialState} from './initialStates';
import {contactsReducer, authReducer} from './reducers';
import {IAuthState, IContactsState} from './types';

export interface GlobalContextProps {
  authState: IAuthState;
  contactsState: IContactsState;
  authDispatch: any;
  contactsDispatch: any;
}

export const GlobalContext = createContext<GlobalContextProps>(
  {} as GlobalContextProps,
);

const GlobalProvider: React.FC = ({children}) => {
  const [authState, authDispatch] = useReducer(authReducer, authInitialState);
  const [contactsState, contactsDispatch] = useReducer(
    contactsReducer,
    contactsInitialState,
  );

  const value = {
    authState,
    authDispatch,
    contactsState,
    contactsDispatch,
  };

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};

export default GlobalProvider;
