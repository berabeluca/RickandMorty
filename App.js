import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CharacterList from './screens/CharacterList';
import CharacterDetails from './screens/CharacterDetails';
import { ExpoRoot } from 'expo-router';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Personagens" component={CharacterList} />
            <Stack.Screen name="Detalhes" component={CharacterDetails} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}