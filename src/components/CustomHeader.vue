<template>
  <nav class="navbar navbar-toggleable-md navbar-light bg-faded header custom-header">
    <button
      class="navbar-toggler navbar-toggler-right"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <a class="navbar-brand" href="#">Navbar</a>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link class="nav-link" to="test-tab">Test table</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="about">About</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" v-bind:to="{ name: 'CompleteTable' }">Pokemon table</router-link>
        </li>
      </ul>
      <form class="form-inline my-2 my-lg-0">
        <input class="form-control mr-sm-2" type="text" placeholder="Search">
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      </form>
    </div>
  </nav>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component
export default class CustomHeader extends Vue {}
</script>

<style scoped>
.custom-header {
  margin-bottom: 20px;
}
</style>
