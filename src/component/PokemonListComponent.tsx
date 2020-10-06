import {useNavigation} from '@react-navigation/native';
import {observer} from 'mobx-react';
import React from 'react';
import {
  StyleProp,
  ViewStyle,
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from 'react-native';
import {Pokemon} from '../store/Pokemon';
import {pokemonStore} from '../store/pokemonStore';
import {FavoriteIconComponent} from './FavoriteIconComponent';

interface FlatListPokemonProps {
  style?: StyleProp<ViewStyle>;
  data: Pokemon[];
}

export type PokemonViewProps = {
  item: Pokemon;
  index: number;
};

export const PokemonView: React.FC<PokemonViewProps> = observer(
  ({item, index}) => {
    const navigation = useNavigation();
    const image = 'https://gabbyapp.com/' + item.picture;
    return (
      <View>
        <TouchableOpacity
          onPress={() => {
            pokemonStore.setKeyPokemon(index);
            navigation.navigate('Pokemon');
          }}>
          <View style={styles.container}>
            <View style={styles.buttonFavorites}>
              <FavoriteIconComponent item={item} />
            </View>
            <Image
              source={{uri: image}}
              resizeMode="center"
              resizeMethod="scale"
              style={styles.containerImage}
            />
            <Text style={styles.title}>{item.name}</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  },
);

export const PokemonListComponent: React.FC<FlatListPokemonProps> = observer(
  (props) => {
    const {data} = props;

    return (
      <View style={styles.gutterTop}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={data}
          keyExtractor={(item, index) => String(index)}
          renderItem={({item, index}) => (
            <PokemonView index={index} item={item} />
          )}
        />
      </View>
    );
  },
);

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(128,128,128,0.2)',
    borderRadius: 15,
    marginTop: 2,
    marginBottom: 10,
    marginHorizontal: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  containerImage: {
    width: 200,
    height: 200,
  },
  buttonFavorites: {
    justifyContent: 'flex-end',
    alignSelf: 'flex-end',
    paddingTop: 15,
    marginRight: 20,
    zIndex: 1,
  },
  gutterTop: {
    paddingTop: 15,
  },
});
