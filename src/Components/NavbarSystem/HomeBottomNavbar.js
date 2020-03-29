import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {StyleSheet} from 'react-native';

import Home from '../../Screens/Home';
import History from '../../Screens/History';

const Tab = createBottomTabNavigator();
const HomeBottomNavbar = props => {
  return (
    <Tab.Navigator style={styles.bottomNavbarContainer}>
      <Tab.Screen
        options={{
          tabBarLabel: () => {
            return null;
          },
          tabBarIcon: () => <Icon name="home" size={23} color={'#3c3c3c'} />,
        }}
        name="Home"
        component={Home}
      />
      <Tab.Screen
        options={{
          tabBarLabel: () => {
            return null;
          },
          tabBarIcon: () => <Icon name="history" size={23} color={'#3c3c3c'} />,
        }}
        name="History"
        component={History}
      />
    </Tab.Navigator>
  );
};

export default HomeBottomNavbar;

const styles = StyleSheet.create({
  bottomNavbarContainer: {},
});
