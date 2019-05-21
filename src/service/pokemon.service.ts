import gql from 'graphql-tag';
import Pokemon from '../class/Pokemon';
import BasicService from './basic.service';

export default class PokemonService extends BasicService {
  fetchAllPokemon(): Promise<Pokemon[]> {
    const GET_ALL_QUERY = gql`
      query {
        pokemons {
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
        pokemons = pokemons.map(
          p => new Pokemon(p.id, p.number, p.name, p.image)
        );
        return pokemons;
      });
  }

  private fetchPokemon(query: string, parameter: string): Promise<Pokemon> {
    return this.apolloClient
      .query({
        query,
        variables: {
          search: parameter
        }
      })
      .then(result => {
        console.log('result', result);
        let pokemonResult = result.data.pokemon;
        if (pokemonResult) {
          return new Pokemon(
            pokemonResult.id,
            pokemonResult.number,
            pokemonResult.name,
            pokemonResult.image
          );
        }
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
    return this.fetchPokemon(GET_FROM_NAME, name);
  }

  fetchPokemonFromId(id: string): Promise<Pokemon> {
    const GET_FROM_ID = gql`
      query pokemon($search: String) {
        pokemon(pokemonId: $search) {
          id
          image
          number
          name
        }
      }
    `;
    return this.fetchPokemon(GET_FROM_ID, id);
  }
}
