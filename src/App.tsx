import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { PokemonListScreen } from './screen/PokemonListScreen';
import { PokemonScreen } from './screen/PokemonScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <>
      <StatusBar translucent={true} backgroundColor={"transparent"} />
      <NavigationContainer>
        <Stack.Navigator headerMode={'screen'} >
          <Stack.Screen name='PokemonList' component={PokemonListScreen} options={{ headerShown: false }} />
          <Stack.Screen name='Pokemon' component={PokemonScreen} options={{
            headerTransparent: true,
            headerStatusBarHeight: 10,
          }} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};


export default App;
