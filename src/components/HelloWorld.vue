<template>
<div id="hello">
  <div id="userPrf">
    <div id="userPic">
      <div class="userPicSub">
      <div id="name"></div>
      <div id="userpicpic">
      <img src="" id="prfPic">
      </div>
      </div>
      <div id="userComment">No coment</div>
    </div>
    <div id="userCom">
      
      <div class="userinformation1">
        <div class="userinformation2">
      <div class="userinformation21">
        Gender<br>
        <div id="genderInf"></div>
      </div>
      <div class="userinformation22">
        Country<br>
        <div id="countryInf"></div>
      </div>
      <div class="userinformation23">
        Language<br>
        <div id="languageInf"></div>
      </div>
      </div>
      <div class="userinformation3">
        Occupation<br>
        <div id="occupationInf"></div>
      </div>
      <div class="userinformation4">
        Major<br>
        <div id="majorInf"></div>
      </div>
      </div>
      <div id="rader">
      <members-chart :chartData="chartData" :height="300"></members-chart>
    </div>
    <button @click="changeGraph">ChangeData</button>
    </div>
  </div>
  </div>
</template>
<script>
import membersChart from './membersChart.vue'
import router from '../router'
var gender
var country
var language
var occupation
var major



export default {
  name: 'HelloWorld',
  components: {
      membersChart
      },
  data () {
    return {
      userName: '',
      chartData: {},
      motivation: '',
      management:  '',
      design:'',
      communication:'',
      system:'',
      illustrater: 0,
      photoshop: 0,
      XD: 0,
      Dtools: 0,
      cad: 0,
      hantei:0,
      graphcount: 0
     }
    },
      created: function() {
        this.userName = JSON.parse(localStorage.getItem('userName')) || []
        this.dataSet()
        this.fillData()
        
        //router.push({ path: '/margin2' })
      },
  mounted: function() {
    
    var starCountRef = firebase.database().ref('/users/userPrf/' + this.userName);
      starCountRef.on('value', function(snapshot) {
      //this.photoURL = snapshot.val().photo
      //console.log(this.photoURL)
      document.getElementById('prfPic').src = snapshot.val().photo
      document.getElementById("userComment").innerText = snapshot.val().coment
      //updateStarCount(postElement, snapshot.val());
      document.getElementById("genderInf").innerText= snapshot.val().gender
      document.getElementById("countryInf").innerText = snapshot.val().country
      document.getElementById("languageInf").innerText = snapshot.val().language
      document.getElementById("occupationInf").innerText = snapshot.val().occupation
      document.getElementById("majorInf").innerText = snapshot.val().major

      })
      document.getElementById("name").innerText = JSON.parse(localStorage.getItem('userName')) || []
    
    //this.fillData()
    this.dataSet()
    this.fillData()

    setTimeout(this.countHantei, 5000)
    
  },
  methods:{
    countHantei() {
      this.hantei = localStorage.getItem('count')
      if(this.hantei == 1){
      router.push({ path: '/margin2' })
      //alert(this.hantei)
    }
    },
    dataSet() {
      var motivation;
      var management;
      var design;
      var communication;
      var system;
      var illustrater;
      var photoshop;
      var XD;
      var Dtools;
      var cad;

      firebase.database().ref('/users/userData/' + this.userName).on('value', function(snapshot) {
        motivation = snapshot.val().motivation
        management= snapshot.val().management
        design = snapshot.val().design
        communication = snapshot.val().communication
        system = snapshot.val().system
        illustrater = snapshot.val().illustrater
        photoshop = snapshot.val().photoshop
        XD = snapshot.val().XD
        Dtools = snapshot.val().Dtools
        cad = snapshot.val().cad
        })
        this.motivation = motivation
        this.management = management
        this.design = design
        this.communication = communication
        this.system = system
        this.illustrater = illustrater
        this.photoshop = photoshop
        this.XD = XD
        this.Dtools = Dtools
        this.cad = cad
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
                    
                    data: [this.motivation,this.management,this.design,this.communication,this.system]
            }
        ]
    }
  },
  changeGraph() {
    if (this.graphcount == 0){
     this.graphcount = 1
    this.chartData = {
      labels: ['Illustrater', 'Photoshop', 'XD', '3Dtools', 'Cad'],
            datasets: [
            {
                  //label: false,
                  backgroundColor: "rgba(0, 162, 154,0.4)",
                    borderColor: "rgba(0, 162, 154,0.8)",
                    pointBackgroundColor: "rgba(0, 162, 154,0.8)",
                    pointBorderColor: "#fff",
                    pointHoverBackgroundColor: "#fff",
                    pointHoverBorderColor: "rgba(0, 162, 154,0.8)",
                    
                    data: [this.illustrater,this.photoshop,this.XD,this.Dtools,this.cad]
            }
        ]
    }
    } else if(this.graphcount == 1){
      this.graphcount = 0
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
                    
                    data: [this.motivation,this.management,this.design,this.communication,this.system]
            }
        ]
    }
    }
  }
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style>
@media (min-width: 700px){
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

#name {
  margin-top: 50px;
  margin-left: 10%;
  text-align: left;
}

#userpicpic {
  position: absolute;
  right:-100px;
  top:50px;
  
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
  width: 60%;
  margin-top: 50px;
  margin-left: 10%;
  margin-right: 30%;
  text-align: justify;
  display: inline-block;  
  font-size: 40px;
  border-bottom: solid 2px;
}
#userComment {
  width: 60%;
  text-align: left;
  margin-top: 30vh;
  margin-left: 10%;
}

#userCom {
  flex: 10;
}

#chart {
  
  
}

#rader {
  
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

}

@media (max-width: 699px){
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
}

#userPic {
  background: #00A29A;
  color: #ffffff;

}


#userpicpic {
  margin: 50px auto auto auto;
}
#userPic img {
  width:200px;
  height: 200px;
  border-radius: 50%;
  border: solid 5px;
  color:#ffffff;
}

#prfPic {
  
}

#name {
  width: 60%;
  margin:10px auto;
  text-align: center;
  display: inline-block;  
  font-size: 30px;
}
#userComment {
  width: 60%;
  text-align: center;
  padding-bottom: 30px;
  margin:20px auto;
}

#userCom {
  display: flex;
  flex-direction: column-reverse;
}

#chart {
  
  
}

#rader {
  margin:20px auto;
  width:80vw;
}

.userinformation1{
  width:60%;
  margin:20px auto;
  text-align: left;
  color: #00A29A;
  display: flex;
  flex-direction: column;
}
.userinformation2{

display: flex;
flex-direction: column;
}

.userinformation21 {
  margin-top: 10px;
}
.userinformation22 {
  margin-top: 10px;
}
.userinformation23 {
  margin-top: 10px;
}

.userinformation3{
  margin-top: 10px;
}

.userinformation4{
  margin-top: 10px;
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

.userPicSub {
  display: flex;
  flex-direction: column-reverse;
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

}


</style>
