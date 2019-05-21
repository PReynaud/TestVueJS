<template>
  <div>
    <div class="card" v-if="currentPokemon">
      <img class="card-img-top" v-bind:src="currentPokemon.image">
      <div class="card-body">
        <h5 class="card-title">{{ currentPokemon.name }}</h5>
        <p class="card-text">Pokemon detail</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import PokemonService from '../service/pokemon.service';
import Pokemon from '../class/Pokemon';

@Component
export default class Detail extends Vue {
  @Prop(String)
  id: string;

  pokemonService: PokemonService = new PokemonService();

  currentPokemon: Pokemon = null;

  mounted() {
    this.pokemonService.fetchPokemonFromId(this.id).then(response => {
      this.currentPokemon = response;
      console.log('current pokemon', this.currentPokemon);
    });
  }
}
</script>

<style>
.card-img-top {
  object-fit: scale-down;
}
</style>

