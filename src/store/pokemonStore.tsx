import { action, makeObservable, observable } from 'mobx'
import React, { SetStateAction } from 'react'
import { StyleProp, ViewStyle, View } from 'react-native'

interface pokemonStoreProps {
    style?: StyleProp<ViewStyle>
}



class PokemonStore {
    keyPokemon: [] = []

    changeKeyPokemon = (item: []) => {
        this.keyPokemon = item
    }

    constructor() {
        makeObservable(this, {
            keyPokemon: observable,
            changeKeyPokemon: action
        })
    }

}
export const pokemonStore = new PokemonStore()

class PokemonJson {
    dataPokemon: [] = []

    changeDataPokemon = (data: []) => {
        this.dataPokemon = data
    }
    constructor() {
        makeObservable(this, {
            dataPokemon: observable,
            changeDataPokemon: action
        })
    }
}

export const pokemonJson = new PokemonJson()

export const getPokemon = () => {
    fetch('https://gabbyapp.com/pockemons/data.json')
        .then((response) => response.json())
        .then((json) => {
            return (pokemonJson.changeDataPokemon(json))
        })
        .catch((error) => console.error())
}