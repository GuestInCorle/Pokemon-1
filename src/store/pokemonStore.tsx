import { action, computed, makeObservable, observable } from 'mobx'
import { StyleProp, ViewStyle, View } from 'react-native'
import { Pokemon } from './Pokemon'


class PokemonStore {
    keyPokemon: number = 0
    dataPokemon: Pokemon[] = []

    favoritePokemon: Record<string, boolean> = {}

    get favoritePokemonList() {
        return this.dataPokemon.filter(pokemon => this.isFavorite(pokemon))
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
    isFavorite = (item: Pokemon) => {
        return this.favoritePokemon[item.name]
    }
    changeFavoritePokemon = (item: Pokemon) => {
        this.favoritePokemon[item.name] = !this.favoritePokemon[item.name]
    }
    constructor() {
        makeObservable(this, {
            dataPokemon: observable,
            keyPokemon: observable,
            setKeyPokemon: action,
            refresh: action,
            favoritePokemon: observable,
            changeFavoritePokemon: action,
            isFavorite: action,
            favoritePokemonList: computed,
            favoriteCount: computed
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