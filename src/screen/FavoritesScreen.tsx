import { observer } from 'mobx-react'
import React, { useEffect, useState } from 'react'
import { StyleProp, ViewStyle, View } from 'react-native'
import { PokemonListComponent } from '../component/PokemonListComponent'
import { pokemonStore } from '../store/pokemonStore'

interface FavoritesScreenProps {
    style?: StyleProp<ViewStyle>
}

export const FavoritesScreen: React.FC<FavoritesScreenProps> = observer(props => {
    const { style } = props
    console.log(pokemonStore.favoritePokemonList, 'pokemonStore.favoritePokemonList')
    return <View style={style}>
        <PokemonListComponent data={pokemonStore.favoritePokemonList} />
    </View>
})