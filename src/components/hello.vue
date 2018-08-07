<template>
<div id="hello5">
  <div id="userPrf5">
    <div id="userPic5">
      <div id="name5"></div>
      <div id="userpicpic5">
      <img src="" id="prfPic5">
      </div>
      <div id="userComment5">No coment</div>
    </div>
    <div id="userCom5">
      <div class="userinformation1">
        <div class="userinformation2">
      <div class="userinformation21">
        Gender<br>
        <div id="genderInf5">Man</div>
      </div>
      <div class="userinformation22">
        Country<br>
        <div id="countryInf5">Japan</div>
      </div>
      <div class="userinformation23">
        Language<br>
        <div id="languageInf5">English</div>
      </div>
      </div>
      <div class="userinformation3">
        Occupation<br>
        <div id="occupationInf5">FUN</div>
      </div>
      <div class="userinformation4">
        Major<br>
        <div id="majorInf5">Information sysytem</div>
      </div>
      </div>
      <div id="rader5">
      <members-chart :chartData="chartData" :height="300"></members-chart>
    </div>
    </div>
  </div>
  </div>
</template>
<script>
import membersChart from './membersChart.vue'
import router from '../router'
var motivation;
var management;
var design;
var communication;
var system;
var gender
var country
var language
var occupation
var major



export default {
  name: 'hello',
  data () {
    return {
      userName: '',
      chartData: {},
      motivation: '',
      management:  '',
      design:'',
      communication:'',
      system:''
     }
    },
    components: {
      membersChart
      },
      created: function() {
        this.userName = JSON.parse(localStorage.getItem('userName')) || []
        this.dataSet()
        this.fillData()
        this.fillData()
        //router.push({ path: '/margin2' })
      },
  mounted: function() {
    //this.dataSet()
    //this.fillData()
    var starCountRef = firebase.database().ref('/users/userPrf/' + this.userName);
      starCountRef.on('value', function(snapshot) {
      //this.photoURL = snapshot.val().photo
      //console.log(this.photoURL)
      document.getElementById('prfPic5').src = snapshot.val().photo
      document.getElementById("userComment5").innerText = snapshot.val().coment
      //updateStarCount(postElement, snapshot.val());
      document.getElementById("genderInf5").innerText= snapshot.val().gender
      document.getElementById("countryInf5").innerText = snapshot.val().country
      document.getElementById("languageInf5").innerText = snapshot.val().language
      document.getElementById("occupationInf5").innerText = snapshot.val().occupation
      document.getElementById("majorInf5").innerText = snapshot.val().major

      })
      document.getElementById("name5").innerText = JSON.parse(localStorage.getItem('userName')) || []
    
    this.fillData()
    router.push({ path: '/helloworld' })
  },
  methods:{
    dataSet() {
      firebase.database().ref('/users/userData/' + this.userName).on('value', function(snapshot) {
        motivation = snapshot.val().motivation
        management= snapshot.val().management
        design = snapshot.val().design
        communication = snapshot.val().communication
        system = snapshot.val().system
        })
        this.motivation = motivation
        this.management= management
        this.design = design
        this.communication = communication
        this.system = system
        
    },
   fillData() {
    this.chartData = {
      labels: ['Motivation', 'design', 'Management', 'Communication', 'System'],
            datasets: [
            {
                  //label: false,
                  backgroundColor: "rgba(0, 162, 154,0.4)",
                    borderColor: "rgba(0, 162, 154,0.8)",
                    pointBackgroundColor: "rgba(0, 162, 154,0.8)",
                    pointBorderColor: "#fff",
                    pointHoverBackgroundColor: "#fff",
                    pointHoverBorderColor: "rgba(0, 162, 154,0.8)",
                    
                    data: [this.motivation, this.design, this.management, this.communication, this.system]
            }
        ]
    }
  }
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
template {
  width: 100%;
  height:100vh;
}

#hello5 {
  margin: 0;
  width: 100%;
  height:100vh;
}

#userPrf5 {
  display: flex;
}

#userPic5 {
  flex: 4;
  background: #00A29A;
  height:100vh;
  color: #ffffff;
  position: relative;
}

#name5 {
  margin-top: 50px;
  margin-left: 10%;
  text-align: left;
}

#userpicpic5 {
  position: absolute;
  right:-100px;
  top:50px;
  
}

#userPic5 img {
  margin:auto;
  width:200px;
  height: 200px;
  border-radius: 50%;
  border: solid 5px;
  color:#ffffff;
}

#prfPic5 {
  
}

#name5 {
  width: 60%;
  margin-top: 50px;
  margin-left: 10%;
  margin-right: 30%;
  text-align: justify;
  display: inline-block;  
  font-size: 40px;
  border-bottom: solid 2px;
}
#userComment5 {
  width: 60%;
  text-align: left;
  margin-top: 30vh;
  margin-left: 10%;
}

#userCom5 {
  flex: 10;
}

#chart5 {
  
  
}

#rader5 {
  
}

.userinformation1{
  width:60%;
  height:35%;
  margin:50px auto;
  text-align: left;
  color: #00A29A;
}
.userinformation2{
  display: flex;
  height:33%;
}

.userinformation21 {
  flex:1;
}
.userinformation22 {
  flex:1;
}
.userinformation23 {
  flex:1;
}

.userinformation3{
  height:33%;
}

.userinformation4{
  
  height:33%;
}
#genderInf{
color:#696969;
font-size: 25px;
}
#countryInf{
color:#696969;
font-size: 25px;
}
#languageInf{
color:#696969;
font-size: 25px;
}
#occupationInf{
color:#696969;
font-size: 25px;
}
#majorInf{
color:#696969;
font-size: 25px;
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
