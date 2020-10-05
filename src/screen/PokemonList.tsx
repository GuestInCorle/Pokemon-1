import { observer } from 'mobx-react'
import React, { useEffect, useState } from 'react'
import { StyleProp, ViewStyle, View } from 'react-native'
import { FlatlistPokemon } from '../component/FlatlistPokemon'
import { getPokemon, pokemonJson } from '../store/pokemonStore'

interface PokemonListProps {
    style?: StyleProp<ViewStyle>
}


export const PokemonList: React.FC<PokemonListProps> = observer(props => {
    const { style } = props

    useEffect(()=>{
        getPokemon()
    },[])

    return <View style={style}>
        <FlatlistPokemon data={pokemonJson.dataPokemon} />
    </View>
})
