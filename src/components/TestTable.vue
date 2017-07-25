<template>
  <table class="table">
    <thead>
      <tr>
        <th v-for="oneColumn in columns" v-bind:key="oneColumn.id">
          {{oneColumn.label}}
          <br>
          <input v-on:input="changeFilteredData(oneColumn.id)" type="text" id="search" v-model="searchField">
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="entry in filteredData" v-bind:key="entry">
        <td v-for="oneColumn in columns" v-bind:key="oneColumn" class="innerDataTable">
          {{entry[oneColumn.label]}}
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
      searchField: '',
      columns: [
        { id: 1, label: 'Pouet' },
        { id: 2, label: 'Nom' },
        { id: 3, label: 'Prenom' },
        { id: 4, label: 'Mail' }
      ],
      startData: [{
        'Pouet': 'test',
        'Nom': 'reynaud',
        'Prenom': 'pierre',
        'Mail': 'preynaud@sqli.com'
      }, {
        'Pouet': 'test2',
        'Nom': 'reynaud2',
        'Prenom': 'pierre2',
        'Mail': 'preynaud2@sqli.com'
      }
      ]
    }
  },
  computed: {
    filteredData: function (idOfTheConcernedField) {
      console.log(this.idOfTheConcernedField)
      console.log(this.searchField)
      return this.startData
    }
  },
  methods: {
    changeFilteredData: function () {
      console.log('test')
    }
  }
}
</script>

<style>
.innerDataTable {
  text-align: left;
}
</style>

