import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5';

import Home from '../../Screens/Home';

const Tab = createBottomTabNavigator();
const HomeBottomNavbar = props => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        options={{
          tabBarLabel: () => {
            return null;
          },
          tabBarIcon: () => <Icon name="home" size={30} color={'#3c3c3c'} />,
        }}
        name="Home"
        component={Home}
      />
    </Tab.Navigator>
  );
};

export default HomeBottomNavbar;
