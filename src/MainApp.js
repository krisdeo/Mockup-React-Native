import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

import HomePage from './HomePage';
import App from './App';
import HistoryPenjualan from './HistoryPenjualan';
import History from './History';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const MainApp = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="App"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="App" component={App} />
        <Stack.Screen name="HomePage" component={DrawerHome} />
        <Stack.Screen name="HistoryPenjualan" component={HistoryPenjualan} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const DrawerHome = () => {
  return (
    <Drawer.Navigator screenOptions={{headerShown: false}}>
      <Drawer.Screen name="Home" component={HomePage} />
      <Drawer.Screen name="Login" component={App} />
      <Drawer.Screen name="History" component={History} />
      <Drawer.Screen name="History Penjualan" component={HistoryPenjualan} />
    </Drawer.Navigator>
  );
};

export default MainApp;
