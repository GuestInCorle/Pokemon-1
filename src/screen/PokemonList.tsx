import React, { useEffect, useState } from 'react'
import { StyleProp, ViewStyle, View } from 'react-native'
import { FlatlistPokemon } from '../component/FlatlistPokemon'
import { getPokemon } from '../store/pokemonStore'

interface PokemonListProps {
    style?: StyleProp<ViewStyle>
}


export const PokemonList: React.FC<PokemonListProps> = props => {
    const { style } = props
    const [data,setData] = useState([])

    useEffect(()=>{
        getPokemon(setData)
    },[])

    return <View style={style}>
        <FlatlistPokemon data={data} />
    </View>
}
