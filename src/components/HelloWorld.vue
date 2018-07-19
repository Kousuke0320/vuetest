<template>
<div id="hello">
  <div id="userPrf">
    <div id="userPic">
      <div id="name"></div>
      <div id="userpicpic">
      <img src="" id="prfPic">
      </div>
      <div id="userComment">No coment</div>
    </div>
    <div id="userCom">
      
      <div id="rader">
      <commit-chart :height="300"></commit-chart>
    </div>
    </div>
  </div>
  </div>
</template>
<script>
import CommitChart from './CommitChart.vue'
import LineChart from './LineChart.vue'

export default {
  name: 'HelloWorld',
  data () {
    return {
      userName: ''
     }
    },
    components: {
    CommitChart,
    LineChart
  },
  mounted: function() {
    this.userName = JSON.parse(localStorage.getItem('userName')) || []
    
    var starCountRef = firebase.database().ref('/users/userPrf/' + this.userName);
      starCountRef.on('value', function(snapshot) {
      //this.photoURL = snapshot.val().photo
      //console.log(this.photoURL)
      document.getElementById('prfPic').src = snapshot.val().photo
      document.getElementById("userComment").innerText = snapshot.val().coment
      //updateStarCount(postElement, snapshot.val());
      })
      document.getElementById("name").innerText = JSON.parse(localStorage.getItem('userName')) || []
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
template {
  width: 100%;
  height:100vh;
}

#hello {
  margin: 0;
  width: 100%;
  height:100vh;
}

#userPrf {
  display: flex;
}

#userPic {
  flex: 4;
  background: #00A29A;
  height:100vh;
  color: #ffffff;
  position: relative;
}

#userpicpic {
  position: absolute;
  right:-100px;
  
}

#userPic img {
  margin:auto;
  width:200px;
  height: 200px;
  border-radius: 50%;
  border: solid 5px;
  color:#ffffff;
}

#prfPic {
  
}

#name {
  margin-top: 50px;
  margin-left:10px;
  text-align: left;
  display: inline-block;  
  font-size: 40px;
  border-bottom: solid 2px;
}
#userComment {
  width: 60%;
  text-align: left;
  margin: 30vh 20%;
}

#userCom {
  flex: 10;
}

#chart {
  
  
}

#rader {
  
}

h1,
h2 {
  margin-top: 20px;
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
