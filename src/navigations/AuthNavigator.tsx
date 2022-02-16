import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {LOGIN, SIGNUP} from '../constants/routeNames';
import {Login, SignUp} from '../screens/';

const AuthNavigator = () => {
  const AuthStack = createStackNavigator();
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen name={LOGIN} component={Login} />
      <AuthStack.Screen name={SIGNUP} component={SignUp} />
    </AuthStack.Navigator>
  );
};

// Screens > Home > Drawer
// Screens > Auth

export default AuthNavigator;
