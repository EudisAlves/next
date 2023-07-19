import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import HomeScreen from '../HomeScren';
import ProfileScreen from '../ProfileScreen';
import CaldosScreen from '../CaldosScreen';
import { View } from 'react-native';
import styles from './style';



const Tab = createBottomTabNavigator();

const AppNavigator = () => (
  <View style={styles.box}>
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Espetos"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="fire" color={color} size={size} />
            ),
            tabBarLabelStyle: { fontSize: 15 },

          }}
        />
        <Tab.Screen
          name="Completo"
          component={ProfileScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="cutlery" color={color} size={size} />
            ),
            tabBarLabel: 'Completo',
            tabBarLabelStyle: { fontSize: 15 },
          }}
        />
        <Tab.Screen
          name="Caldos"
          component={CaldosScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="spoon" color={color} size={size} />
            ),
            tabBarLabelStyle: { fontSize: 15 },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  </View>
);

export default AppNavigator;
