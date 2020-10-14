import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {AuthFlow} from './navigation';

const Stack = createStackNavigator();
const NavigationOptions = {headerShown: false};

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="AuthFlow"
          component={AuthFlow}
          options={NavigationOptions}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
