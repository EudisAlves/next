import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import HomeScreen from '../HomeScren';
import ProfileScreen from '../ProfileScreen';
import CaldosScreen from '../CaldosScreen';


const Tab = createBottomTabNavigator();

const AppNavigator = () => (
    <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen
        name="Espetos"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="skewer" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Completo"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="user" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Caldos"
        component={CaldosScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="user" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  </NavigationContainer>
);

export default AppNavigator;
