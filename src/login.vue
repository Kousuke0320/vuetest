<template>
  <div id="login">
    <router-link to="/helloworld" class="link">Home</router-link><br>
    <router-link to="/page1" class="link"> Go to page1</router-link><br>
    <router-link to="/page2" class="link"> Go to page2</router-link><br>
  </div>
</template>

<script>
export default {
  name: 'Login'
}
</script>

<style>
#login {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.link {
  text-decoration: none;
  list-style: none;
  color:aliceblue;
}

</style>