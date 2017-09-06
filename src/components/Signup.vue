<template>
 <div>
    <div class="col-sm-4 col-sm-offset-4">
        <h1>To-Do List Sign Up </h1>
        <hr>
        <p>Create a username and password!</p>
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
        <button class="btn btn-primary">Submit!</button>
    </div>
</div>
</template>

<script>
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
        }
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
