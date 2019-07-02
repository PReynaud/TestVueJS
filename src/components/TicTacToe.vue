<template>
  <div>
    <span>Current player is : {{ currentPlayer }}</span>
    <GameBoard
      :currentGame="currentGame"
      :currentPlayer="players[currentPlayerIndex]"
      @updateGame="onGameUpdate"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import GameBoard from './GameBoard.vue';
import Player from './../class/Player';
import Component from 'vue-class-component';

@Component({
  components: {
    GameBoard
  }
})
export default class TicTacToe extends Vue {
  currentGame: string[] = Array(9).fill(null);
  players: Player[] = [new Player('X'), new Player('O')];
  currentPlayerIndex: number = 0;
  winningPosition: number[][] = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  get currentPlayer() {
    return this.players[this.currentPlayerIndex].value;
  }

  onGameUpdate(index, value) {
    if (this.currentGame[index]) {
      return;
    }
    this.currentGame[index] = value;
    this.currentGame = this.currentGame.slice();

    const potentialWinner: string = this.isWinning();
    if (potentialWinner) {
      alert(`Winner is ${potentialWinner}`);
    } else {
      this.currentPlayerIndex = this.currentPlayerIndex ? 0 : 1;
    }
  }

  isWinning(): string {
    console.log('test is winning');
    for (let i = 0; i < this.winningPosition.length; i++) {
      const [a, b, c]: number[] = this.winningPosition[i];
      if (
        this.currentGame[a] &&
        this.currentGame[a] === this.currentGame[b] &&
        this.currentGame[a] === this.currentGame[c]
      ) {
        console.log('winner found', this.currentGame[a]);
        return this.currentGame[a];
      }
    }
  }
}
</script>


<style>
</style>
