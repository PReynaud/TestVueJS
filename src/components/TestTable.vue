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
          <span>{{collectedData(oneRow, oneColumn)}}</span>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: 'TestTable',
  data: function () {
    return {
      columns: [
        { id: 1, label: 'Pouet' },
        { id: 2, label: 'Nom' },
        { id: 3, label: 'Prenom' },
        { id: 4, label: 'Mail' }
      ],
      startData: [{
        id: 1,
        'Pouet': 'test',
        'Nom': 'reynaud',
        'Prenom': 'pierre',
        'Mail': 'preynaud@sqli.com'
      }, {
        id: 2,
        'Pouet': 'test2',
        'Nom': 'reynaud2',
        'Prenom': 'pierre2',
        'Mail': 'preynaud2@sqli.com'
      }
      ]
    }
  },
  methods: {
    filteredData: function () {
      this.$forceUpdate()
    },
    collectedData: function (row, column) {
      return row[column.label]
    },
    isFiltered: function (row) {
      var hasBeenFound = true
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
      return hasBeenFound
    }
  }
}
</script>

<style>
.innerDataTable {
  text-align: left;
}
</style>

