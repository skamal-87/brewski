<template>
<div class="container">
        <div class="row mb-5">
            <div class="col-sm-6 col-md-4 col-lg-3 mt-4">
                <div class="card card-inverse card-info">
                    <div class="card-block">
                        <figure class="profile">
                            <img :src="ub.icon" class="profile-avatar" alt="">
                        </figure>
                        <h4 class="card-title mt-3">{{ub.nameDisplay}}</h4>
                        <div class="meta card-text">
                            <p>{{ub.category}}</p>
                        </div>
                    </div>
                    <div class="card-footer">
                        <small>Alcohol by Volume: {{ub.abv}}</small>
                        <button class="btn btn-info float-right btn-sm" @click="remove(ub)">Remove</button>
                        <br>
                    </div>
                </div>
        </div>
        </div>
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
</style>
