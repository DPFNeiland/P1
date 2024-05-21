import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Tela1 from './src/screens/tela1/Tela1';
import Tela2 from './src/screens/tela2/Tela2';
import Tela3 from './src/screens/tela3/Tela3';
const Stack = createStackNavigator();

export default function NavegacaoStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Tela3" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Tela1" component={Tela1} />
        <Stack.Screen name="Tela2" component={Tela2} />
        <Stack.Screen name="Tela3" component={Tela3} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
