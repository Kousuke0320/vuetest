<template>
  <div id="app">
    <div id="config">
      
      <div id="homebutton">
      <router-link to="/helloworld">
      <img src="./assets/home.png">
      </router-link>
      </div>
      <div id="confbutton"> 
      <router-link to="/config">
      <img src="./assets/config.png">
      </router-link>
      </div>
      </div>
    <router-view/>
  </div>
</template>

<script>
import CommitChart from './components/CommitChart.vue'

export default {
  name: 'App',
  components: {
    CommitChart
  }
}
</script>

<style>
/*
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#config {
  width: 10%;
  display: flex;
  margin-top: 5px;
  margin-left: 90%;
}

#config img:hover {
  opacity: 0.5;
}
#confbutton {
flex:1;
}
#confbutton img {
  max-width: 100%;
}

#homebutton {
flex:1;
}

#homebutton img {
  max-width: 100%;
}*/
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#config {
  float: right;
  margin-top: 5px;
  margin-right: 20px;
}
#config img:hover {
  opacity: 0.5;
}

</style>
