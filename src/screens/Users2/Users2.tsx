import { NestedStack } from '../types/types';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { Main2 } from './Main/Main2';
import { MainDetails } from './MainDetals/MainDetails';

const Stack = createNativeStackNavigator<NestedStack>();

export function Users2() {

  return (
    <Stack.Navigator initialRouteName="Main2">
    <Stack.Screen name={'MainDetails'} component={MainDetails} />
    <Stack.Screen name={'Main2'} component={Main2} />
  </Stack.Navigator>
  );
}
