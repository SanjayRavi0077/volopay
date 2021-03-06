import React, {useEffect, useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import home from '../screens/home';
import search from '../screens/search';
import colors from '../assets/colors';
import detail from '../screens/gifDetail';

const Stack = createNativeStackNavigator();

const Router = () => {
  const onHandleText = () => {};
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={'Home'}
        screenOptions={{
          headerShadowVisible: false,
          headerStyle: {backgroundColor: colors.black},
          headerTintColor: colors.white,
          headerTitleStyle: {fontFamily: 'Poppins-Black', fontSize: 20},
        }}>
        <Stack.Screen
          name="Home"
          component={home}
          options={{
            headerTitle: 'GIPHY',
          }}
        />
        <Stack.Screen
          name="Search"
          component={search}
          options={{
            headerShown: false,
            animation: 'slide_from_right',
          }}
        />
        <Stack.Screen
          name="Details"
          component={detail}
          options={{
            headerShown: true,
            headerTitle: '',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
