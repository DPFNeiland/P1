import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Tela1 from './src/screens/tela1/Tela1';
import Tela2 from './src/screens/tela2/Tela2';
import Tela3 from './src/screens/tela3/Tela3';
import Tela4 from './src/screens/tela4/Tela4';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function NavegacaoStack({}) {
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName="Tela1"
                screenOptions={({ route }) => ({
                    tabBarActiveTintColor: '#810AD0', // Cor do ícone ativo
                    tabBarInactiveTintColor: 'black', // Cor do ícone inativo
                    tabBarInactiveBackgroundColor: '#F6F5FA',
                    
                    headerShown: false,
                    tabBarLabelStyle: { display: 'none' }, 
                    tabBarIcon: ({ color }) => {
                        if (route.name === 'Tela1') {
                            return <MaterialCommunityIcons name="swap-vertical" size={24} color={color} />;
                        } else if (route.name === 'Tela2') {
                            return <FontAwesome name="dollar" size={24} color={color} />;
                        } else if (route.name === 'Tela3') {
                            return <Ionicons name="bag-outline" size={24} color={color} />;
                        }
                    },
                })}
            >
                <Tab.Screen name="Tela1" component={Tela1} />
                <Tab.Screen name="Tela2" component={Tela2} />
                <Tab.Screen name="Tela3" component={Tela3} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}
