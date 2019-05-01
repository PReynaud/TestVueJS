<template>
  <div>
    <div class="row">
      <input v-model="searchTerm">
      <a class="button" v-on:click="search">Search</a>
    </div>

    <div class="row">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Image</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="pokemon in pokemonList" v-bind:key="pokemon.number">
            <th scope="row" class="tabCell">
              <router-link
                v-bind:to="{ name: 'Detail', params: { id: pokemon.id }}"
              >{{ pokemon.number }}</router-link>
            </th>
            <th class="tabCell">{{ pokemon.name }}</th>
            <th class="tabCell">
              <img class="tabImage" v-bind:src="pokemon.image">
            </th>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import PokemonService from '../service/pokemon.service';
import Pokemon from '../class/Pokemon';

@Component
export default class CompleteTable extends Vue {
  data() {
    return {
      pokemonList: [],
      pokemonService: new PokemonService(),
      searchTerm: ''
    };
  }

  search() {
    if (this.searchTerm) {
      this.pokemonService
        .fetchPokemonFromName(this.searchTerm)
        .then((response: Pokemon) => {
          this.pokemonList = [response];
          this.searchTerm = '';
        });
    } else {
      this.loadAllPokemons();
    }
  }

  loadAllPokemons() {
    this.pokemonService.fetchAllPokemon().then((result: Pokemon[]) => {
      this.pokemonList = result;
    });
  }

  mounted() {
    this.loadAllPokemons();
  }
}
</script>

<style>
.tabCell {
  width: 200px;
}

.tabImage {
  max-height: 100px;
}

.button {
  background-color: #4caf50; /* Green */
  border: none;
  color: white;
  padding: 15px 22px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
}
</style>

