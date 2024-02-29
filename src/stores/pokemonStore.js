import { defineStore } from "pinia";
import { api } from "boot/axios";

export const usePokemonStore = defineStore("pokemon", {
  state: () => ({
    pokemons: [],
    pokemon: null,
  }),

  actions: {
    async fetchPokemons(page = 1) {
      const { data } = api.get("pokemon", {
        page: page,
      });

      console.log(data);
      this.pokemons = data;
    },

    clearPokemons() {
      this.pokemons = [];
    },

    clearPokemon() {
      this.pokemon = null;
    },
  },
});
