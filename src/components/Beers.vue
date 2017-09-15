<template>
  <tr>
    <td><img :src="ub.icon" alt="" height="100" width="100"></td>
    <td>{{ub.nameDisplay}}</td>
    <td>{{ub.category}}</td>
    <td>{{ub.abv}}</td>
    <td><button class="btn btn-info float-right btn-sm" @click="remove(ub)">Remove</button></td>
  </tr>
</template>

<script>
export default {
  name: 'app',
  props: ['ub'],
  data () {
    return {
      quantity: 0
    }
  },
  methods: {
    remove(remover){
      this.$emit('yRemove',remover)
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

.table > tbody > tr > td {
     vertical-align: middle;
}
</style>
