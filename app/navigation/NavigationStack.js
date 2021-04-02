import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useSelector } from 'react-redux';

import { navigationRef } from './NavigationService';

import Login from 'app/screens/Login';
import Home from 'app/screens/Home';
import ContactList from 'app/screens/ContactList';
import ThemeController from '../components/ThemeController';
import { StatusBar } from 'react-native';
import AppStyle from '../config/styles';
import HeaderSearchButton from '../components/HeaderSearchButton';
import Routes from '../config/routes';

const { color } = AppStyle;

const Stack = createStackNavigator();

const homeOptions = {
  title: 'ডেমো অ্যাপ',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
  headerStyle: {
    backgroundColor: color.COLOR_PRIMARY,
  },
  headerTintColor: color.COLOR_WHITE,

  headerRight: () => <HeaderSearchButton />,
};
const contactListOptions = {
  title: 'কন্টাক্টস লিস্ট',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
  headerStyle: {
    backgroundColor: color.COLOR_PRIMARY,
  },
  headerTintColor: color.COLOR_WHITE,

  headerRight: () => <HeaderSearchButton />,
};

function App(props) {
  const { theme } = props;
  const isLoggedIn = useSelector(state => state.loginReducer.isLoggedIn);

  return (
    <NavigationContainer ref={navigationRef} theme={theme}>
      <StatusBar barStyle={theme.dark ? 'light-content' : 'dark-content'} />

      <Stack.Navigator>
        <Stack.Screen
          name={Routes.HOME}
          component={Home}
          options={homeOptions}
        />

        <Stack.Screen
          name={Routes.CONTACT_LIST}
          component={ContactList}
          options={contactListOptions}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
