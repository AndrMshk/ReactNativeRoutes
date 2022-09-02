import React, { FC } from 'react';
import { StyleSheet, View } from 'react-native';
import { Users } from './screens/Users/Users';
import { Users2 } from './screens/Users2/Users2';
import { Home } from './screens/Home/Home';
import { RootStackParamList } from './screens/types/types';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

type MainPropsType = {}

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<RootStackParamList>();
const Drawer = createDrawerNavigator<RootStackParamList>();

export const Main: FC<MainPropsType> = ({}) => {

  return (
    <View style={styles.container}>
      {/*<Stack.Navigator initialRouteName="Users">*/}
      {/*  <Stack.Screen name={'Home'} component={Home} />*/}
      {/*  <Stack.Screen name={'Users'} component={Users} />*/}
      {/*  <Stack.Screen name={'Users2'} component={Users2} />*/}
      {/*</Stack.Navigator>      */}
      <Tab.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
        <Tab.Screen  name={'Home'} component={Home} />
        <Tab.Screen name={'Users'} component={Users} />
        <Tab.Screen name={'Users2'} component={Users2} />
      </Tab.Navigator>
      {/*<Drawer.Navigator initialRouteName="Home">*/}
      {/*  <Drawer.Screen  name={'Home'} component={Home} />*/}
      {/*  <Drawer.Screen name={'Users'} component={Users} />*/}
      {/*  <Drawer.Screen name={'Users2'} component={Users2} />*/}
      {/*</Drawer.Navigator>*/}
    </View>
  );
};

const styles = StyleSheet.create({ container: { flex: 1 } });
