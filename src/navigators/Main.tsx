import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Screen from './ScreenConfig';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store.types';

const { LOGIN, HOME, EXAMPLE } = Screen;

const Stack: any = createStackNavigator();

const _renderNoAuthScreen = (): JSX.Element => (
  <React.Fragment>
    <Stack.Screen name={EXAMPLE.NAME} component={EXAMPLE.COMPONENT} />
    <Stack.Screen name={LOGIN.NAME} component={LOGIN.COMPONENT} />
  </React.Fragment>
);

const _renderWithAuthScreen = (): JSX.Element => (
  <React.Fragment>
    <Stack.Screen name={HOME.NAME} component={HOME.COMPONENT} />
  </React.Fragment>
);

// @refresh reset
const MainNavigator = () => {
  const authSelector = useSelector((state: RootState) => state.auth);
  const isSignedIn = authSelector.token && authSelector.user;

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      { isSignedIn ? _renderWithAuthScreen() : _renderNoAuthScreen()}
    </Stack.Navigator>
  );
};

export default MainNavigator;
