import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import RegisterPage from '../pages/Register';
import LoginPage from '../pages/Login';
import ProductListPage from '../pages/ProductList';

import { Routes } from '../types/routes';

const Stack = createNativeStackNavigator<Routes>();

export default function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginPage} />
        <Stack.Screen  name="Register" component={RegisterPage} />
        <Stack.Screen name="ProductList" component={ProductListPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};