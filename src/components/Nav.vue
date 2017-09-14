<template>
<nav class="navbar navbar-default">
  <div class="container-fluid">
    <div class="navbar-header">
      <router-link to="/" class="navbar-brand">Brewski</router-link>
    </div>
    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul class="nav navbar-nav">
        <router-link to="/logout" activeClass="active"  tag="li" v-if="loggedIn"><a>Logout</a></router-link>
        <router-link to="/login" activeClass="active"  tag="li" v-else><a>Login</a></router-link>
        <router-link to="/beers" activeClass="active" tag="li"><a>Brews</a></router-link>
        <li activeClass="active" class="btn-primary" @click="saveData"><a>Save</a></li>
      </ul>
    </div><!-- /.navbar-collapse -->
  </div><!-- /.container-fluid -->
</nav>
</template>

<script>
import axios from 'axios';
import config from '../config.js';
export default {
  computed: {
    loggedIn() {
      return this.$store.getters.userCred.loggedIn
      }
  },
  methods: {
    saveData() {
      let user = this.$store.getters.userCred;
      let beerData = this.$store.getters.userBeer;
      var usersBeer = {
        username: user.userName,
        beers: beerData
      }
      axios.post(config.URL + `/api/usersbeer`,
            usersBeer
            ,
            {
            headers: {
                'Content-Type': 'application/json'
            }
            })
            .then(response => {
            console.log(response);
                }
            )}
            }}
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
