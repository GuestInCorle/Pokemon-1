import React from 'react'
import { StyleProp, ViewStyle, View } from 'react-native'

interface PokemonListProps {
    style?: StyleProp<ViewStyle>
}

const getPokemon = async () => {
    try {
        const response = await fetch('https://gabbyapp.com/pockemons/data.json', {
            method: 'GET'
        })
        const json = await response.json()
        return (json)
    } catch (error) {
        console.error()
    }
}

export const PokemonList: React.FC<PokemonListProps> = props => {
    const { style } = props
    getPokemon()
    return <View style={style}></View>
}
