import gql from 'graphql-tag';
import Pokemon from '../class/Pokemon';
import BasicService from './basic.service';

export default class PokemonService extends BasicService {
  fetchAllPokemon(): Promise<Pokemon[]> {
    const GET_ALL_QUERY = gql`
      query {
        pokemons(first: 10) {
          id
          image
          number
          name
        }
      }
    `;
    return this.apolloClient
      .query({
        query: GET_ALL_QUERY
      })
      .then(results => {
        let pokemons = results.data.pokemons;
        pokemons = pokemons.map(p => new Pokemon(p.number, p.name, p.image));
        return pokemons;
      });
  }

  fetchPokemonFromName(name: string): Promise<Pokemon> {
    const GET_FROM_NAME = gql`
      query pokemon($search: String) {
        pokemon(name: $search) {
          id
          image
          number
          name
        }
      }
    `;
    return this.apolloClient
      .query({
        query: GET_FROM_NAME,
        variables: {
          search: name
        }
      })
      .then(result => {
        if (result) {
          let pokemonResult = result.data.pokemon;
          return new Pokemon(
            pokemonResult.number,
            pokemonResult.name,
            pokemonResult.image
          );
        }
      });
  }
}
