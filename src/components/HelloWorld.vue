<template>
<div id="hello">
  <div id="userPrf">
    <div id="userPic">
      <img src="" id="prfPic">
    </div>
    <div id="userCom">
      <div id="name"></div>
      <div id="userComment">No coment</div>
    </div>
  </div>
  <div id="chart">
    <div id="rader">
      <commit-chart :height="300"></commit-chart>
    </div>
    <div id="line">
      <line-chart :height="100"></line-chart>
      <line-chart :height="100"></line-chart>
      <line-chart :height="100"></line-chart>
      <line-chart :height="100"></line-chart>
      <line-chart :height="100"></line-chart>
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
  },
  components: {
    CommitChart,
    LineChart
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
#userPrf {
  display: flex;
  margin-top: 50px;
}

#userPic {
  flex: 1;
}

#userPic img {
  width:200px;
  height: 200px;
  border-radius: 50%;
}

#name {
  font-size: 30px;
  
}
#userComment {
  margin-top: 50px;
}

#userCom {
  flex: 1;
}

#chart {
  display: flex;
  margin-top: 50px;
}

#rader {
  flex: 1;
}

#line {
  flex: 1;
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
