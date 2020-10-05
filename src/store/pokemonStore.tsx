import { action, makeObservable, observable } from 'mobx'
import { StyleProp, ViewStyle, View } from 'react-native'


class PokemonStore {
    keyPokemon: number = 0
    dataPokemon: [] = []

    changeKeyPokemon = (index: number) => {
        this.keyPokemon = index
    }
    changeDataPokemon = (data: []) => {
        this.dataPokemon = data
    }

    refresh = async () => {
        const result = await fetchPokemon()
        this.changeDataPokemon(result)
    }

    constructor() {
        makeObservable(this, {
            dataPokemon: observable,
            keyPokemon: observable,
            changeKeyPokemon: action,
            changeDataPokemon: action,
            refresh: action,
        })
    }
}
export const pokemonStore = new PokemonStore()

export const fetchPokemon = async () => {
    try {
        const response = await fetch('https://gabbyapp.com/pockemons/data.json')
        const json = await response.json()
        return (json)
    } catch (error) {
        return console.error()
    }
}