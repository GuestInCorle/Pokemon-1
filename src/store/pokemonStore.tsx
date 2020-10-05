import React, { SetStateAction } from 'react'
import { StyleProp, ViewStyle, View } from 'react-native'

interface pokemonStoreProps {
    style?: StyleProp<ViewStyle>
}

export const getPokemon = (setState: SetStateAction<[]>) => {
    fetch('https://gabbyapp.com/pockemons/data.json')
        .then((response) => response.json())
        .then((json) => { return setState((json))})
        .catch((error) => console.error())
}