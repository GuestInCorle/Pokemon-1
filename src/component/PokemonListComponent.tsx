import { useNavigation } from '@react-navigation/native'
import { observer } from 'mobx-react'
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { StyleProp, ViewStyle, View, Text, Image, TouchableOpacity, FlatList, StyleSheet } from 'react-native'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/FontAwesome'
import { Pokemon } from '../store/Pokemon'
import { pokemonStore } from '../store/pokemonStore'
import { FavoriteIconComponent } from './FavoriteIconComponent'

interface FlatlistPokemonProps {
    style?: StyleProp<ViewStyle>
    data: Pokemon[]
}

export const PokemonListComponent: React.FC<FlatlistPokemonProps> = observer(props => {
    const { style, data } = props
    let refIcon = useRef<Icon>(null)
    const navigation = useNavigation()
    const [isFavorite, setFavorite] = useState(0)
    useEffect(() => {
        setFavorite(r => r + 1)
    }, [pokemonStore.favoritePokemon])

    const renderItem = useCallback(({ item, index }) => {


        const image = 'https://gabbyapp.com/' + item.picture
        return (
            <View>
                <TouchableOpacity onPress={() => {
                    pokemonStore.setKeyPokemon(index)
                    navigation.navigate('Pokemon')
                }}>

                    <View style={styles.conteiner}>
                        <TouchableOpacity
                            style={styles.buttonFavorites}
                            onPress={() => {
                                pokemonStore.favorite(item) ? pokemonStore.removeFavoritePokemon(item) : pokemonStore.addFavoritePokemon(item)
                                console.log('favorite', pokemonStore.favoritePokemon)
                            }}
                        >
                            <FavoriteIconComponent item={pokemonStore.favorite(item)}/>
                            {/* <Icon name={pokemonStore.favorite(item) ? 'star' : 'star-o'} size={25} color='#065' /> */}

                        </TouchableOpacity>
                        <Image
                            source={{ uri: image }}
                            resizeMode={"center"}
                            resizeMethod={'scale'}
                            style={styles.containerImage}
                        />
                        <Text style={styles.title}>{item.name}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }, [])

    return <View style={{ paddingTop: 30 }}>
        <FlatList
            showsVerticalScrollIndicator={false}
            data={data}
            renderItem={renderItem}
        />
    </View>
})

const styles = StyleSheet.create({
    conteiner: {
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
    }
})