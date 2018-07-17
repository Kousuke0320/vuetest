
<template>
<div id="GroupMember">
  <div id="userPrf3">
    <div id="userPic3">
      <img src="" id="prfPic3">
    </div>
    <div id="userCom3">
      <div id="name3">{{ this.userName }}</div>
      <div id="userComment3">No coment</div>
    </div>
  </div>
  <div id="chart3">
    <div id="rader3">
      <members-chart :chartData="chartData" :height="300"></members-chart>
    </div>
    <div id="line3">
    </div>
  </div>
  </div>
</template>
<script>

import membersChart from './membersChart.vue'

var motivation;
var management;
var design;
var communication;
var system;


export default {
  name: 'GroupMember',
  data () {
    return {
      userName: '',
      chartData: {}
     }
    },
    components: {
    membersChart
  },
  created:function() {
      this.fillData()
      this.userName = JSON.parse(localStorage.getItem('groupMemberName')) || []
      localStorage.setItem('groupMemberName',JSON.stringify(''))
      firebase.database().ref('/users/userData/' + this.userName).on('value', function(snapshot) {
        motivation = snapshot.val().motivation
        management= snapshot.val().management
        design = snapshot.val().design
        communication = snapshot.val().communication
        system = snapshot.val().system
        })
  },
  mounted: function() {
      this.fillData()
    var starCountRef = firebase.database().ref('/users/userPrf/' + this.userName);
      starCountRef.on('value', function(snapshot) {
      //this.photoURL = snapshot.val().photo
      //console.log(this.photoURL)
      document.getElementById('prfPic3').src = snapshot.val().photo
      document.getElementById("userComment3").innerText = snapshot.val().coment
      //updateStarCount(postElement, snapshot.val());
      })
      //document.getElementById("name3").innerText = JSON.parse(localStorage.getItem('userName')) || []
  },
  methods:{
   fillData() {
    this.chartData = {
      labels: ['Motivation', 'design', 'Management', 'Communication', 'System'],
            datasets: [
            {
                  //label: false,
                  backgroundColor: "rgba(179,181,198,0.2)",
                    borderColor: "rgba(179,181,198,0.8)",
                    pointBackgroundColor: "rgba(179,181,198,0.8)",
                    pointBorderColor: "#fff",
                    pointHoverBackgroundColor: "#fff",
                    pointHoverBorderColor: "rgba(179,181,198,0.8)",
                    data: [motivation, design, management, communication, system]
            }
        ]
    }
  }
}
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
#userPrf3 {
  display: flex;
  margin-top: 50px;
}

#userPic3 {
  flex: 1;
}

#userPic3 img {
  width:200px;
  height: 200px;
  border-radius: 50%;
}

#name3 {
  font-size: 30px;
  
}
#userComment3 {
  margin-top: 50px;
}

#userCom3 {
  flex: 1;
}

#chart3 {
  display: flex;
  margin-top: 50px;
}

#rader3 {
  flex: 1;
}

#line3 {
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
