<template>
  <div class="hello">
    <h1 v-if="pikachu">{{ pikachu.name }}</h1>
  </div>
</template>

<script lang="ts">
// import { Vue, Component } from 'vue-property-decorator';
// import gql from 'graphql-tag';

// @Component
// export default class App extends Vue {
//   msg = 'Coucou Pierre';
//   loading = false;
//   pokemonList: Array<String> = [];

//   graphQlQuery = gql`
//         query alligatorQuery($input: String!) {
//           getAlligator(uuid: $input) {
//             name
//           }
//         }
//       `;

//   apollo: {
//     posts: {
//       query: this.graphQlQuery,
//     }
//   }
// }
import gql from 'graphql-tag';

export default {
  data() {
    return {
      pikachu: null,
      loading: false
    };
  },

  apollo: {
    pikachu: {
      query: gql`
        query pokemon($name: String!) {
          pokemon(name: $name) {
            id
            image
            number
            name
          }
        }
      `,

      variables: {
        name: 'Pikachu'
      },

      loadingKey: 'loading',

      update: function(data) {
        return data.pokemon;
      }
    }
  }
};
</script>

<style scoped>
h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
