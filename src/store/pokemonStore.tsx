import { action, computed, makeObservable, observable } from 'mobx'
import { StyleProp, ViewStyle, View } from 'react-native'
import { Pokemon } from './Pokemon'


class PokemonStore {
    constructor() {
        makeObservable(this, {
            dataPokemon: observable,
            keyPokemon: observable,
            setKeyPokemon: action,
            refresh: action,
            favoritePokemon: observable,
            changeFavoritePokemon: action,
            favoritePokemonList: computed,
            favoriteCount: computed
        })
    }
    keyPokemon: number = 0
    dataPokemon: Pokemon[] = []

    favoritePokemon: Record<string, boolean> = {}

    get favoritePokemonList() {
        return this.dataPokemon.filter(pokemon => this.favoritePokemon[pokemon.name])
    }

    get favoriteCount() {
        return this.favoritePokemonList.length
    }

    setKeyPokemon = (index: number) => {
        this.keyPokemon = index
    }
    refresh = async () => {
        const result = await fetchPokemon()
        this.dataPokemon = result
    }

    changeFavoritePokemon = (item: Pokemon) => {
        this.favoritePokemon[item.name] = !this.favoritePokemon[item.name]
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