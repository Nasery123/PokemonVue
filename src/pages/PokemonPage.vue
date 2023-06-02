<template>
<div class="container-fluid">
    <div class="row">
        <div class="btn btn-primary" @click="change"></div>
        <div v-for="p in pokemon" :key="p.name">
            <p>
                {{ p.name }}
                <PokemonCard :pokProp="p" />
            </p>
        </div>
    </div>
</div>

</template>


<script>
import { onMounted } from 'vue';
import Pop from '../utils/Pop.js';
import {pokemonService} from '../services/PokemonService.js';
import { computed } from '@vue/reactivity';
import { AppState } from '../AppState.js';
import { Pokemon } from '../models/Pokemon.js';

export default {
    // components:{PokemonCard},
    setup(){
        async function getPokemon(){
            try {
                await pokemonService.getPokemon()
            } catch (error) {
                Pop.error(error)
            }
        }
        onMounted(() =>{
            getPokemon()

        })
        return {
            pokemon: computed(() => AppState.pokemon),
            previousPageUrl: computed(() => AppState.previousPageUrl),

        }
    }
}
</script>


<style lang="scss" scoped>

</style>
