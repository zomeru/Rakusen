import React, {useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';

import AuthNavigator from './AuthNavigator';
import DrawerNavigator from './DrawerNavigator';
import {GlobalContext} from '../context/Provider';

const AppNavContainer = () => {
  const {
    authState: {isLoggedIn},
  } = useContext(GlobalContext);

  console.log('Staete', isLoggedIn);

  return (
    <NavigationContainer>
      {isLoggedIn ? <DrawerNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};

// Screens > Home > Drawer
// Screens > Auth

export default AppNavContainer;
