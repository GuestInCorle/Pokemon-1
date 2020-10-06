import { action, makeObservable, observable } from 'mobx'
import { StyleProp, ViewStyle, View } from 'react-native'
import { Pokemon } from './Pokemon'


class PokemonStore {
    keyPokemon: number = 0
    dataPokemon: Pokemon[] = []
    favoritePokemon: Pokemon[] = []

    setKeyPokemon = (index: number) => {
        this.keyPokemon = index
    }
    refresh = async () => {
        const result = await fetchPokemon()
        this.dataPokemon = result
    }
    addFavoritePokemon = (item: Pokemon) => {
        this.favoritePokemon.push(item)
    }
    removeFavoritePokemon = (item: Pokemon) => {
        this.favoritePokemon = this.favoritePokemon.filter((namePokemon) => {
            return namePokemon.name !== item.name
        })
    }
    constructor() {
        makeObservable(this, {
            dataPokemon: observable,
            keyPokemon: observable,
            setKeyPokemon: action,
            refresh: action,
            favoritePokemon: observable,
            addFavoritePokemon: action,
            removeFavoritePokemon: action

        })
    }
}
export const pokemonStore = new PokemonStore()

export const fetchPokemon = async (): Promise<Pokemon[]> => {
    try {
        const response = await fetch('https://gabbyapp.com/pockemons/data.json')
        const json = await response.json()
        return json
    } catch (error) {
        console.error(error)
        return []
    }
}