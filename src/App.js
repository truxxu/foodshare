import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {Home, Profile} from './screens';

const Stack = createStackNavigator();
const NavigationOptions = {headerShown: false};

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={NavigationOptions}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
