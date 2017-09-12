<template>
    <div>
        <select v-model="selected">
            <option disabled value="">Add Beer!</option>
            <option v-for="beer in beers">{{beer.nameDisplay}}</option>
        </select>
        <a href="#" class="btn btn-xs btn-success" @click="addBeer"><span class="glyphicon glyphicon-plus"></span> Add Beer</a>
        <div>
            <app-beers v-for="ub in usersBeers" :ub="ub"></app-beers>
        </div>
    </div>
</template>

<script>
import Beers from './Beers.vue'
import axios from 'axios';
import config from '../config.js';
export default {
    data () {
        return {
        username: {},
        selected: '',
        fullList: [],
        usersBeers: [],
        isDropdownOpen: false
        }
    },
    components: {
        appBeers: Beers
    },
    mount(){
        this.username = this.$store.getters('userCred')
    },
    methods: {
        addBeer() {
            axios.post(config.URL + `/api/beer`,
            {"name":this.selected}
            ,
            {
            headers: {
                'Content-Type': 'application/json'
            }
            })
            .then(response => {
            console.log(response);
            this.fullList = response.data;
            this.usersBeers.push(this.fullList)
            var errthang = this.usersBeers
            console.log(errthang);
            this.$store.dispatch('setBeers', errthang)
                }
            )}
            },
    computed: {
        beers() {
            return this.$store.getters.beerData;
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
