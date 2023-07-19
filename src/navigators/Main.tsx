import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Screen from './ScreenConfig';

const { LOGIN, EXAMPLE } = Screen;

const Stack = createStackNavigator();

// @refresh reset
const MainNavigator = () => (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={EXAMPLE.NAME} component={EXAMPLE.COMPONENT} />
      <Stack.Screen name={LOGIN.NAME} component={LOGIN.COMPONENT} />
    </Stack.Navigator>
  );

export default MainNavigator;
