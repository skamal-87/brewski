<template>
 <div>
    <div class="col-sm-4 col-sm-offset-4">
        <h1>Brewski for Youski Logout </h1>
        <hr>
        <p>Are you sure you want to log out?</p>
    </div>
</div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'app',
    data() {
      return {
        credentials: {
          userName: '',
          password: '',
          loggedIn: false
        }
    }},
    methods:{
        logout(){
        }
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
