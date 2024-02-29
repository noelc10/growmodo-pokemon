<template>
  <div class="flex flex-center column">
    <div
      class="full-width row inline no-wrap justify-evenly items-baseline content-around"
      style="overflow: hidden"
    >
      <div class="bg-white" style="overflow: auto">
        <q-card class="no-border-radius">
          <q-card-section>
            <div class="text-subtitle2">Top 1</div>
            <div class="text-h6">Mega Rayquaza</div>
          </q-card-section>
        </q-card>
      </div>
      <div class="bg-white" style="overflow: auto">
        <q-card class="no-border-radius">
          <q-card-section>
            <div class="text-subtitle2">Top 2</div>
            <div class="text-h6">Primal Groudon</div>
          </q-card-section>
        </q-card>
      </div>
      <div class="bg-white" style="overflow: auto">
        <q-card class="no-border-radius">
          <q-card-section>
            <div class="text-subtitle2">Top 3</div>
            <div class="text-h6">Dodrio</div>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, onMounted } from "vue";
import { usePokemonStore } from "stores/pokemonStore";

const pokemonStore = usePokemonStore();

export default defineComponent({
  name: "IndexPage",

  setup() {
    async function getPokemons() {
      await pokemonStore.fetchPokemons();
    }

    onMounted(() => {
      getPokemons();
    });

    return {
      getPokemons,
    };
  },
});
</script>
