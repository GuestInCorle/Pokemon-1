import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { PokemonList } from './screen/PokemonList';
import { Pokemon } from './screen/Pokemon';

const Stack = createStackNavigator();

const App = () => {
  return (
    <>
      <StatusBar translucent={true} backgroundColor={"transparent"} />
      <NavigationContainer>
        <Stack.Navigator headerMode={'screen'} >
          <Stack.Screen name='PokemonList' component={PokemonList} options={{ headerShown: false }} />
          <Stack.Screen name='Pokemon' component={Pokemon} options={{
            headerTransparent: true,
            headerStatusBarHeight: 10,
          }} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};


export default App;
