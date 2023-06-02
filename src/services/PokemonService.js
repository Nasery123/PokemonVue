import { AppState } from "../AppState.js"
import { Pokemon } from "../models/Pokemon.js"
import { logger } from "../utils/Logger.js"
import { api, pokeApi } from "./AxiosService.js"

class PokemonService {

    async getPokemon() {
        const res = await pokeApi.get()

        console.log('[HERE IS WHAT YOU WANT]', res.data)

        AppState.pokemon = res.data.results
        // logger.log('[HERE IS YOUR POKEMON]', res.data.results)
    }
    async changePage(url) {
        const res = await pokeApi.get(url)
        AppState.pokemon = res.data.results;
        AppState.previousPageUrl = res.data.previous
        AppState.nextPageUrl = res.data.next

    }

}
export const pokemonService = new PokemonService()
