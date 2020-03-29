import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Login from './src/Screens/Login';
import Register from './src/Screens/Register';
import Home from './src/Screens/Home';
import History from './src/Screens/History';
import Rent from './src/Screens/Rent';
import HomeBottomNavbar from './src/Components/NavbarSystem/HomeBottomNavbar';
import Profile from './src/Screens/Profile';

import {Provider} from 'react-redux';
import store from './src/Redux/store';

const Stack = createStackNavigator();

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
              component={HomeBottomNavbar}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Rent"
              component={Rent}
              options={{headerShown: false}}
            />
            <Stack.Screen name="History" component={History} />
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
