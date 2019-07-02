<template>
  <div class="cell" @click="onClickCell">{{ content }}</div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { Prop } from 'vue-property-decorator';

@Component
export default class Cell extends Vue {
  @Prop(String)
  content: string;

  onClickCell() {
    this.$emit('change');
  }
}
</script>

<style>
.cell {
  width: 33.333%;
  height: 100px;
  border: 1px solid #000;
  font-size: 3em;
  line-height: 100px;
}
</style>

