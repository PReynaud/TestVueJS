<template>
  <div class="gameBoard">
    <Cell
      v-for="(value, index) in currentGame"
      :key="index"
      :content="currentGame[index]"
      @change="onCellClick(index)"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import Cell from './Cell.vue';
import Player from './../class/Player';
import { Prop } from 'vue-property-decorator';

@Component({
  components: {
    Cell
  }
})
export default class GameBoard extends Vue {
  @Prop(Array)
  currentGame: string[];

  @Prop(Object)
  currentPlayer: Player;

  onCellClick(index) {
    this.$emit('updateGame', index, this.currentPlayer.value);
  }
}
</script>

<style>
.gameBoard {
  display: flex;
  width: 300px;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>

