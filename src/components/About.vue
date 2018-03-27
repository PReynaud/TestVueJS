<template>
  <h1>
    {{ message }}
  </h1>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component({
  props: {
    message: String
  }
})
export default class About extends Vue {}
</script>
