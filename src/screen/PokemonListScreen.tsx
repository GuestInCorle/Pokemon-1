import { observer } from 'mobx-react'
import React, { useEffect, useState } from 'react'
import { StyleProp, ViewStyle, View } from 'react-native'
import { PokemonListComponent } from '../component/PokemonListComponent'
import { fetchPokemon, pokemonStore } from '../store/pokemonStore'

interface PokemonListProps {
    style?: StyleProp<ViewStyle>
}


export const PokemonListScreen: React.FC<PokemonListProps> = observer(props => {
    const { style } = props

    useEffect(()=>{
        pokemonStore.refresh() 
    },[])

    return <View style={style}>
        <PokemonListComponent data={pokemonStore.dataPokemon} />
    </View>
})
