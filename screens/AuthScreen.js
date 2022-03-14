import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {LoginComponent, SignupComponent} from '../components';

const Tab = createMaterialTopTabNavigator();

const AuthScreen = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Login" component={LoginComponent} />
      <Tab.Screen name="Signup" component={SignupComponent} />
    </Tab.Navigator>
  );
};

export default AuthScreen;
