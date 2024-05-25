import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Tela4 from '../tela4/Tela4';
import Tela2 from '../tela2/Tela2';

const Stack = createStackNavigator();

function NavegacaoStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Tela2">
        <Stack.Screen name="Tela2" component={Tela2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default NavegacaoStack();