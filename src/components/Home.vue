<template>
  <div id="app">
    <img src="../assets/to-do-list.png">

    <h1>Brewski for Youski</h1>
    <h2>Log your brews</h2>
    <modal name="hello-world">
      hello, world!
    </modal>
  </div>
</template>

<script>
import axios from 'axios';
import config from '../config.js';
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted(){
    this.$store.dispatch('initData');
    
      axios.get(config.URL + '/api/savedbeer',
          {username: this.$store.getters.userCred.username,
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            }
            })
                .then(response => {
                    console.log(response);
                    this.$store.dispatch('initUserBeer', response)
                })
                .catch(e=> {
                  console.log(e)
                });
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
