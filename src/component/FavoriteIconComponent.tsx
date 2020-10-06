
import React, { RefCallback } from 'react'
import { StyleProp, ViewStyle, View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { Pokemon } from '../store/Pokemon'
import { pokemonStore } from '../store/pokemonStore'
import { observer } from 'mobx-react'

interface FavoriteIconComponentProps {
    style?: StyleProp<ViewStyle>
    item: Pokemon
}

export const FavoriteIconComponent: React.FC<FavoriteIconComponentProps> = observer((props) => {
    const { style, item } = props

    return <View style={style}>
            <Icon name={pokemonStore.favoritePokemon[item.name] ? 'star' : 'star-o'} size={25} color='#065' onPress={() => {
                pokemonStore.changeFavoritePokemon(item)
                console.log('favorite', pokemonStore.favoritePokemon)
            }} />
        </View>
})