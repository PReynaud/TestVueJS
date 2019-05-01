<template>
  <div id="app">
    <custom-header/>
    <div class="container">
      <router-view/>
    </div>
  </div>
</template>

<script>
import CustomHeader from '@/components/CustomHeader';

export default {
  name: 'app',
  components: {
    CustomHeader
  }
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
