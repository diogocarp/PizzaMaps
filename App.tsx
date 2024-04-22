import React from 'react';
import { Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';


import HomeScreen from './screens/HomeScreen';
import SettingScreen from './screens/SettingScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            borderBottomWidth: 2, 
            borderBottomColor: 'rgb(216, 216, 216)',
          },
          headerTitleAlign: 'center', 
          headerTitle: props => (
            <View>
              <Text>PizzaMaps</Text>
            </View>
          ),
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
        />
         <Stack.Screen
          name="Setting"
          component={SettingScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
