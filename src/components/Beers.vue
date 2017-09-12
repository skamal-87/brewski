<template>
<div class="list-group">
  <a href="#" class="list-group-item list-group-item-action flex-column align-items-start">
    <div class="d-flex w-100 justify-content-between">
      <h5 class="mb-1">{{ub.nameDisplay}}</h5>
      <p class="mb-1">{{ub.description}}</p>
    </div>
    <small >Category: {{ub.category}}</small>
    <br>
    <small>Alcohol by Volume: {{ub.abv}}</small>
  </a>
</div>
</template>

<script>
export default {
  name: 'app',
  props: ['ub'],
  data () {
    return {
      quantity: 0
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
</style>
