
<template>
<div id="GroupMember">
  <div id="fixed" @click="modoru">
    <img src="../assets/modoru.png" >
    <p>Back</p>
  </div>
  <div id="userPrf3">
    <div id="userPic3">
      <div class="userPicSub">
    <div id="name3">{{ this.userName }}</div>
    <div id="userpicpic3">
      <img src="" id="prfPic3">
      </div>
      </div>
      <div id="userComment3">No coment</div>
    </div>
      
    <div id="userCom3">
      <div class="userinformation1">
        <div class="userinformation2">
      <div class="userinformation21">
        Gender<br>
        <div id="genderInf2"></div>
      </div>
      <div class="userinformation22">
        Country<br>
        <div id="countryInf2"></div>
      </div>
      <div class="userinformation23">
        Language<br>
        <div id="languageInf2"></div>
      </div>
      </div>
      <div class="userinformation3">
        Occupation<br>
        <div id="occupationInf2"></div>
      </div>
      <div class="userinformation4">
        Major<br>
        <div id="majorInf2"></div>
      </div>
      </div>
      <div id="rader3">
        <div class="shika" id="shika0">
        <div class="shika1" id="shika1" @click="changeGraph"></div>
        <div class="shika2" id="shika2"></div>
        <div class="shika3" id="shika3"></div>
        <div class="shika4" id="shika4"></div>
        <div class="shika6" id="shika6"></div>
        <div class="shika5" id="shika5" @click="changeGraph"></div>
        </div>
      <members-chart :chartData="chartData" :height="300"></members-chart>
    </div>
    <!--<button @click="changeGraph">ChangeData</button>-->
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
var illustrater;
      var photoshop;
      var XD;
      var Dtools;
      var cad;
      var html;
      var css;
      var js;
      var sm;
      var unity;
      var SkillsCount = []
      var visualization
      var analyze
      var technology
      var policy




export default {
  name: 'GroupMember',
  data () {
    return {
      userName: '',
      chartData: {},
      visualization:0,
      analyze:0,
      technology:0,
      policy:0,
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
      graphcount: 0,
      html: 0,
      css: 0,
      js: 0,
      sm: 0,
      unity: 0,
      groupName: '',
      A:[]
     }
    },
    components: {
    membersChart
  },
  created:function() {
      
      this.userName = JSON.parse(localStorage.getItem('groupMemberName')) || []
      this.groupName = JSON.parse(localStorage.getItem('groupName')) || []
      
      firebase.database().ref("/users/groupskills/" + this.groupName).on('value', function(snapshot) {
        SkillsCount[0] = snapshot.val().skills1
        SkillsCount[1] = snapshot.val().skills2
        SkillsCount[2] = snapshot.val().skills3
        SkillsCount[3] = snapshot.val().skills4
        SkillsCount[4] = snapshot.val().skills5
      })

      localStorage.setItem('groupMemberName',JSON.stringify(''))
      firebase.database().ref('/users/userData/' + this.userName).on('value', function(snapshot) {
        visualization = snapshot.val().visualization
        analyze = snapshot.val().analyze
        technology = snapshot.val().technology
        policy = snapshot.val().policy
        communication = snapshot.val().communication

        /*motivation = snapshot.val().motivation
        management= snapshot.val().management
        design = snapshot.val().design
        communication = snapshot.val().communication
        system = snapshot.val().system*/
        illustrater = snapshot.val().illustrater
        photoshop = snapshot.val().photoshop
        XD = snapshot.val().XD
        Dtools = snapshot.val().Dtools
        cad = snapshot.val().cad
        html = snapshot.val().html
        css = snapshot.val().css
        js = snapshot.val().js
        sm = snapshot.val().sm
        unity = snapshot.val().unity
        })
/*
        this.motivation = motivation
        this.management = management
        this.design = design
        this.communication = communication
        this.system = system*/
        this.visualization = visualization
       this.analyze = analyze
       this.technology = technology
       this.policy = policy
       this.communication = communication

        this.illustrater = illustrater
        this.photoshop = photoshop
        this.XD = XD
        this.Dtools = Dtools
        this.cad = cad
        this.html = html
        this.css = css
        this.js = js
        this.sm = sm
        this.unity = unity

        var j = 0;
          for(j = 0; j < 5; j++){
          if(SkillsCount[j] == "visualization"){
            this.A[j] = visualization
          }else if(SkillsCount[j] == "analyze"){
            this.A[j] = analyze
          }else if(SkillsCount[j] == "technology"){
            this.A[j] = technology
          }else if(SkillsCount[j] == "communication"){
            this.A[j] = communication
          }else if(SkillsCount[j] == "policy"){
            this.A[j] = policy
          }else if(SkillsCount[j] == "illustrater"){
            this.A[j] = illustrater
          }else if(SkillsCount[j] == "photoshop"){
            this.A[j] = photoshop
          }else if(SkillsCount[j] == "XD"){
            this.A[j] = XD
          }else if(SkillsCount[j] == "Dtools"){
            this.A[j] = Dtools
          }else if(SkillsCount[j] == "cad"){
            this.A[j] = cad
          }else if(SkillsCount[j] == "html"){
            this.A[j] = html
          }else if(SkillsCount[j] == "css"){
            this.A[j] = css
          }else if(SkillsCount[j] == "js"){
            this.A[j] = js
          }else if(SkillsCount[j] == "sm"){
            this.A[j] = sm
          }else if(SkillsCount[j] == "unity"){
            this.A[j] = unity
          } 
        }
        this.fillData()

  },
  mounted: function() {
      
    var starCountRef = firebase.database().ref('/users/userPrf/' + this.userName);
      starCountRef.on('value', function(snapshot) {
      //this.photoURL = snapshot.val().photo
      //console.log(this.photoURL)
      document.getElementById('prfPic3').src = snapshot.val().photo
      document.getElementById("userComment3").innerText = snapshot.val().coment
      //updateStarCount(postElement, snapshot.val());
      document.getElementById("genderInf2").innerText= snapshot.val().gender
      document.getElementById("countryInf2").innerText = snapshot.val().country
      document.getElementById("languageInf2").innerText = snapshot.val().language
      document.getElementById("occupationInf2").innerText = snapshot.val().occupation
      document.getElementById("majorInf2").innerText = snapshot.val().major
      })
      //document.getElementById("name3").innerText = JSON.parse(localStorage.getItem('userName')) || []
  },
  methods:{
    modoru() {
    localStorage.setItem('groupBack',0)
    router.push({ path: '/group' })
    },
      fillData() {
    this.chartData = {
      labels: [SkillsCount[0], SkillsCount[1], SkillsCount[2], SkillsCount[3], SkillsCount[4]],
            datasets: [
            {
                  //label: false,
                  backgroundColor: "rgba(0, 162, 154,0.4)",
                    borderColor: "rgba(0, 162, 154,0.8)",
                    pointBackgroundColor: "rgba(0, 162, 154,0.8)",
                    pointBorderColor: "#fff",
                    pointHoverBackgroundColor: "#fff",
                    pointHoverBorderColor: "rgba(0, 162, 154,0.8)",
                    
                    data: [this.A[0],this.A[1],this.A[2],this.A[3],this.A[4]]
            }
        ]
    }
  },
  changeGraph() {
    if (this.graphcount == 0){
     this.graphcount = 1
     document.getElementById("shika3").style.backgroundColor = '#00A29A'
      document.getElementById("shika2").style.backgroundColor = '#696969'
      document.getElementById("shika4").style.backgroundColor = '#696969'
      document.getElementById("shika6").style.backgroundColor = '#696969'

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
      this.graphcount = 2
      document.getElementById("shika3").style.backgroundColor = '#696969'
      document.getElementById("shika2").style.backgroundColor = '#696969'
      document.getElementById("shika4").style.backgroundColor = '#00A29A'
      document.getElementById("shika6").style.backgroundColor = '#696969'

      this.chartData = {
      labels: ['Communication', 'Visualization', 'analyze', 'technology', 'Policy'],
            datasets: [
            {
                  //label: false,
                  backgroundColor: "rgba(0, 162, 154,0.4)",
                    borderColor: "rgba(0, 162, 154,0.8)",
                    pointBackgroundColor: "rgba(0, 162, 154,0.8)",
                    pointBorderColor: "#fff",
                    pointHoverBackgroundColor: "#fff",
                    pointHoverBorderColor: "rgba(0, 162, 154,0.8)",
                    data: [this.communication,this.visualization,this.analyze,this.technology,this.policy]
            }
        ]
    }
    }else if(this.graphcount == 2){
      this.graphcount = 3
      document.getElementById("shika3").style.backgroundColor = '#696969'
      document.getElementById("shika2").style.backgroundColor = '#696969'
      document.getElementById("shika4").style.backgroundColor = '#696969'
      document.getElementById("shika6").style.backgroundColor = '#00A29A'

    
      this.chartData = {
      labels: ['HTML', 'CSS', 'JavaScript', 'iOS/Android', 'Unity'],
            datasets: [
            {
                  //label: false,
                  backgroundColor: "rgba(0, 162, 154,0.4)",
                    borderColor: "rgba(0, 162, 154,0.8)",
                    pointBackgroundColor: "rgba(0, 162, 154,0.8)",
                    pointBorderColor: "#fff",
                    pointHoverBackgroundColor: "#fff",
                    pointHoverBorderColor: "rgba(0, 162, 154,0.8)",
                    
                    data: [this.html,this.css,this.js,this.sm,this.unity]
            }
        ]
    }
    }else if(this.graphcount == 3){
      this.graphcount = 0
      document.getElementById("shika3").style.backgroundColor = '#696969'
      document.getElementById("shika2").style.backgroundColor = '#00A29A'
      document.getElementById("shika4").style.backgroundColor = '#696969'
      document.getElementById("shika6").style.backgroundColor = '#00A29A'

      

this.chartData = {
      labels: [SkillsCount[0], SkillsCount[1], SkillsCount[2], SkillsCount[3], SkillsCount[4]],
            datasets: [
            {
                  //label: false,
                  backgroundColor: "rgba(0, 162, 154,0.4)",
                    borderColor: "rgba(0, 162, 154,0.8)",
                    pointBackgroundColor: "rgba(0, 162, 154,0.8)",
                    pointBorderColor: "#fff",
                    pointHoverBackgroundColor: "#fff",
                    pointHoverBorderColor: "rgba(0, 162, 154,0.8)",
                    
                    data: [this.A[0],this.A[1],this.A[2],this.A[3],this.A[4]]
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
@media (min-width: 1080px){
  template {
  width: 100%;
}

#fixed{
  position: fixed;
    top: 15px;
    left: 40px;
    width: 50px;
    height: 50px;
    cursor: pointer;
    z-index: 3;
    display: flex;
}

#fixed img{
  width:25px;
  height:25px;
}
#fixed p{
  position:relative;
  top:-29px;
  left:10px;
  font-size:25px;
  color:rgb(70,70,70);
}

#fixed:hover{
  opacity: 0.8;
}

#userPrf3 {
  display: flex;
}

#userPic3 {
  flex: 4;
  background: #00A29A;
  height:100vh;
  color: #ffffff;
  position: relative;
}

#userpicpic3 {
  position: absolute;
  right:-100px;
  top:50px;
}

#userPic3 img {
  margin:auto;
  width:200px;
  height: 200px;
  border-radius: 50%;
  border: solid 5px;
  color:#ffffff;
}

#name3 {
  width: 60%;
  margin-top: 50px;
  margin-left: 10%;
  margin-right: 30%;
  text-align: justify;
  display: inline-block;  
  font-size: 40px;
  border-bottom: solid 2px;
  
}
#userComment3 {
  width: 60%;
  text-align: justify;
  margin: 30vh 10%;
}

#userCom3 {
  flex: 10;
}



#rader3 {
  
}

#line3 {
  
}

#genderInf2{
color:#696969;
font-size: 25px;
}
#countryInf2{
color:#696969;
font-size: 25px;
}
#languageInf2{
color:#696969;
font-size: 25px;
}
#occupationInf2{
color:#696969;
font-size: 25px;
}
#majorInf2{
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
.shika6 {
   margin: 3px 10px;
width: 15px;
height: 15px;
border-radius: 50%;
background: #696969;
}

#shika0{
  width: 240px;
  margin: 30px auto;
  display: flex;
}

}

@media (max-width: 1079px){
  template {
  width: 100%;
}

#fixed{
  position: fixed;
    display: flex;
    top: 20px;
    left: 20px;
    width: 20px;
    height: 20px;
    cursor: pointer;
    z-index: 3;
}

#fixed img{
  width:20px;
  height:20px;
}

#fixed p{
  position:relative;
  top:-22px;
  left:7px;
  font-size:20px;
  color:rgb(70,70,70);
}

#fixed:hover{
  opacity: 0.8;
}



#userPrf3 {
}

#userPic3 {
  background: #00A29A;
  color: #ffffff;
}

#userpicpic3 {
  margin:50px auto auto auto;
  }

#userPic3 img {
  width:200px;
  height: 200px;
  border-radius: 50%;
  border: solid 5px;
  color:#ffffff;
}

#name3 {
  width: 60%;
  margin:10px auto;
  text-align: center;
  display: inline-block;  
  font-size: 30px;
}
#userComment3 {
  padding-bottom: 20px;
  width: 60%;
  text-align: center;
  margin: 20px auto;
}

#userCom3 {
  display: flex;
  flex-direction: column-reverse;
}

#rader3 {
  margin:20px auto;
  width:80vw;
}

#line3 {
  
}

#genderInf2{
color:#696969;
font-size: 25px;
}
#countryInf2{
color:#696969;
font-size: 25px;
}
#languageInf2{
color:#696969;
font-size: 25px;
}
#occupationInf2{
color:#696969;
font-size: 25px;
}
#majorInf2{
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
</style>
