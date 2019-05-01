<template>
  <div>
    <input v-model="searchTerm">
    <a class="button" @click="search">Search</a>

    <div v-if="pokemon">
      <h1>{{ pokemon.name }}</h1>
      <h2>{{ pokemon.number }}</h2>
      <img v-bind:src="pokemon.image">
    </div>
  </div>
</template>

<script>
import gql from 'graphql-tag';

/* Keep this file to have an example with mutation in Vue component */
const loadMutation = gql`
  query pokemon($search: String) {
    pokemon(name: $search) {
      id
      image
      number
      name
    }
  }
`;

export default {
  data() {
    return {
      pokemon: null,
      searchTerm: 'pikachu',
      toSearch: 'pikachu'
    };
  },

  apollo: {
    pokemon: {
      query: loadMutation,

      variables() {
        return {
          search: this.toSearch
        };
      }
    }
  },

  methods: {
    search() {
      this.toSearch = this.searchTerm;
    }
  }
};
</script>

<style scoped>
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

img {
  width: 200px;
  height: 200px;
}
</style>
