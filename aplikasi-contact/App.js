import React, { useState } from 'react';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/Ionicons';

import Home from './components/home';
import Detail from './components/about';

const Stack = createNativeStackNavigator();

const CustomLightTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#ffffff',
    text: '#000000',
  },
};

const CustomDarkTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    background: '#000000',
    text: '#ffffff',
  },
};

export default function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <NavigationContainer
      theme={isDarkTheme ? CustomDarkTheme : CustomLightTheme}>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          initialParams={{ toggleTheme, isDarkTheme }}
          options={{
            title: 'Contact List',
            headerRight: () => (
              <Icon
                name={isDarkTheme ? 'md-sunny' : 'md-moon'}
                size={24}
                color={isDarkTheme ? 'yellow' : 'gray'}
                onPress={toggleTheme}
                style={{ marginRight: 10 }}
              />
            ),
          }}
        />
        <Stack.Screen name="Detail" component={Detail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
