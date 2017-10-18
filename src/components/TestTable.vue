<template>
  <table class="table">
    <thead>
      <tr>
        <th v-for="oneColumn in columns" v-bind:key="oneColumn.id">
          {{oneColumn.label}}
          <br>
          <input type="text" v-model="oneColumn.search" v-on:input="filteredData()">
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="oneRow in startData" v-bind:key="oneRow.id" v-show="isFiltered(oneRow)" >
        <td v-for="oneColumn in columns" v-bind:key="oneColumn.id" class="innerDataTable">
          <span>{{ collectedData(oneRow, oneColumn) }}</span>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import StartData from '../class/StartData';

@Component
export default class TestTable extends Vue{
  
  data() {
    const data1 = new StartData(1, 'test', 'reynaud', 'pierre', 'preynaud@test.com');
    const data2 = new StartData(2, 'test2', 'reynaud2', 'pierre2', 'preynaud2@test.com');
    
    return {
      columns: [
        { id: 1, label: 'pouet' },
        { id: 2, label: 'nom' },
        { id: 3, label: 'prenom' },
        { id: 4, label: 'mail' }
      ],
      startData: [data1, data2]
    };
  }

  filteredData() {
    this.$forceUpdate();
  }

  collectedData(row, column) {
    return row[column.label];
  }
  
  isFiltered(row) {
    var hasBeenFound = true;
    
    var i = 0
    while (i < this.columns.length) {
      if (this.columns[i].search) {
        hasBeenFound = false
        if (row[this.columns[i].label].includes(this.columns[i].search)) {
          hasBeenFound = true
        }
      }
      i++
    }
    return hasBeenFound;
  }
}
</script>

<style>
.innerDataTable {
  text-align: left;
}
</style>

