<template>
 <div>
    <div class="col-sm-4 col-sm-offset-4">
        <h1>Brewski for Youski Login </h1>
        <hr>
        <p>Input your Login Credentials / Sign up!</p>
        <div class="form-group">
          <input
          type="text"
          class="form-control input-sm"
          placeholder="Enter your username"
          v-model="credentials.userName"
          />
        </div>
        <div class="form-group">
          <input
            type="password"
            class="form-control input-sm"
            placeholder="Enter your password"
            v-model="credentials.password"
          />
        </div>
        <button class="btn btn-primary"  @click="login()">Login</button>
        <button class="btn btn-secondary" @click="signup()">Sign Up</button>
        <br>
        <br>
        <div class="alert alert-danger" v-if="error">
          <strong>Login Error!</strong> {{errorMessage}}
        </div>
    </div>
</div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'app',
    data() {
      return {
        // We need to initialize the component with any
        // properties that will be used in it
        submitted: false,
        submitText: 'Submitted!',
        buttonText: 'Submit',
        credentials: {
          userName: '',
          password: ''
        },
        error: false,
        errorMessage: ''
      }
    },
    methods:{
        login(){
            axios.get('http://localhost:3000/api/users/',
            {
            auth: {
              username: this.credentials.userName,
              password: this.credentials.password
            },
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            }
            })
                .then(response => {
                    console.log(response);
                    this.$store.dispatch('initUser', this.credentials)
                    this.$router.push('/')
                })
                .catch(e=> {
                  console.log(e)
                  this.error = true
                  this.errorMessage = 'Incorrect Login information'
                });
        },
        signup(){
            axios.post('http://localhost:3000/api/users/',
              {
              username: this.credentials.userName,
              password: this.credentials.password
              },
                {

              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
              }
                })
                .then(function (response) {
                    console.log(response);
                })
                .catch(e=> {
                  this.error = true
                  this.errorMessage = 'Sign Up requires a valid username and password'
                });
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
