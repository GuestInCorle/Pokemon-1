import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {PokemonListScreen} from './screen/PokemonListScreen';
import {PokemonScreen} from './screen/PokemonScreen';
import {FavoritesScreen} from './screen/FavoritesScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <>
      <StatusBar translucent backgroundColor="transparent" />
      <NavigationContainer>
        <Stack.Navigator headerMode="screen">
          <Stack.Screen
            name="PokemonList"
            component={PokemonListScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Pokemon"
            component={PokemonScreen}
            options={{headerStatusBarHeight: 10}}
          />
          <Stack.Screen
            name="Favorites"
            component={FavoritesScreen}
            options={{headerStatusBarHeight: 10}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
