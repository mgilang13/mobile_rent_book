import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Login from './src/Screens/Login';
import Register from './src/Screens/Register';
import Home from './src/Screens/Home';

import {Provider} from 'react-redux';
import store from './src/Redux/store';

import Profile from './src/Screens/Profile';

const Stack = createStackNavigator();

import HomeNavbar from './src/Components/BottomNavbar/BottomNavbar';

class Navigator extends Component {
  render() {
    return (
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Login">
            <Stack.Screen
              name="Login"
              component={Login}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Register"
              component={Register}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Home"
              component={HomeNavbar}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Profile"
              component={Profile}
              // options={{headerShown: false}}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    );
  }
}

export default Navigator;
