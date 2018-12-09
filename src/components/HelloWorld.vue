<template>
<div id="hello">
  <div id="helloLoading" v-show="!loading">
    <img src="../assets/loading1.gif" >
  </div>
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
              <div class="shika" id="shika">
        <div class="shika1" id="shika1" @click="test1"></div>
        <div class="shika2" id="shika2"></div>
        <div class="shika3" id="shika3"></div>
        <div class="shika4" id="shika4"></div>
        <div class="shika5" id="shika5" @click="changeGraph"></div>
        </div>

      <members-chart :chartData="chartData"  :height="300"></members-chart>
    </div>
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
      photoURL: '',
      loading:false
     }
    },
      created: function() {
        this.userName = JSON.parse(localStorage.getItem('userName')) || []
        firebase.auth().onAuthStateChanged((user) => {
       if(user){  
            this.photoURL = user.photoURL;
            firebase.database().ref('/users/userPrf/' + this.userName).update({
            photo:this.photoURL,
          })
       }
      })
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
    this.hantei = localStorage.getItem('count')
      if(this.hantei == 1){
    }else{
      this.loading = true
    }
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
      var html
      var css
      var js
      var sm
      var unity
      var visualization
      var analyze
      var technology
      var policy


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
        this.system = system
        */
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
    },
    test1() {
        this.chartData["labels"] = ['Motivation', 'design', 'Management', 'Communication', 'System']
        console.log(this.chartData["labels"])
      },
   fillData() {
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
  },
  changeGraph() {

    if (this.graphcount == 0){
      document.getElementById("shika3").style.backgroundColor = '#00A29A'
      document.getElementById("shika2").style.backgroundColor = '#696969'
      document.getElementById("shika4").style.backgroundColor = '#696969'
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
    } else if(this.graphcount == 2){
      document.getElementById("shika2").style.backgroundColor = '#00A29A'
            document.getElementById("shika4").style.backgroundColor = '#696969'
      document.getElementById("shika3").style.backgroundColor = '#696969'
      this.graphcount = 0
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
    }else if(this.graphcount == 1){
      document.getElementById("shika4").style.backgroundColor = '#00A29A'
            document.getElementById("shika2").style.backgroundColor = '#696969'
      document.getElementById("shika3").style.backgroundColor = '#696969'
      this.graphcount = 2
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
  font-weight: bold;
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
  font-weight: bold;
}
.userinformation22 {
  flex:1;
  font-weight: bold;
}
.userinformation23 {
  flex:1;
  font-weight: bold;
}

.userinformation3{
  height:33%;
  font-weight: bold;
}

.userinformation4{
  height:33%;
  font-weight: bold;
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

.shika {
  width: 200px;
  margin: 30px auto;
  display: flex;
}


.shika1 {
   margin: 0 10px;
  width: 0;
height: 0;
border-top: 10px solid transparent;
border-right: 20px solid #00A29A;
border-bottom: 10px solid transparent;
}

.shika1:hover{
  opacity: 0.5;
}

.shika2 {
  margin: 3px 10px;
width: 15px;
height: 15px;
border-radius: 50%;
background: #00A29A;
}
.shika3 {
  margin: 3px 10px;
width: 15px;
height: 15px;
border-radius: 50%;
background: #696969;
}
.shika4 {
  margin: 3px 10px;
width: 15px;
height: 15px;
border-radius: 50%;
background: #696969;
}


.shika5 {
  margin: 0 10px;
width: 0;
height: 0;
border-left: 20px solid #00A29A;
border-top: 10px solid transparent;
border-bottom: 10px solid transparent;}

.shika5:hover{
  opacity: 0.5;
}

#helloLoading {
  position:absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: #ffffff;
  z-index: 999;
}

#helloLoading img{
  margin: 200px auto;
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

@media (max-width: 1079px){
  template {
  width: 100%;
  height:100vh;
}

#hello {
  margin: 0;
  width: 100%;
  height:100vh;
  font-weight: bold;
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
  margin:10px auto;
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

.shika {
  width: 200px;
  margin: 20px auto;
  display: flex;
}


.shika1 {
   margin: 0 10px;
  width: 0;
height: 0;
border-top: 10px solid transparent;
border-right: 20px solid #00A29A;
border-bottom: 10px solid transparent;
}

.shika2 {
  margin: 3px 10px;
width: 15px;
height: 15px;
border-radius: 50%;
background: #00A29A;
opacity: 0.8;
}
.shika3 {
  margin: 3px 10px;
width: 15px;
height: 15px;
border-radius: 50%;
background: #696969;
opacity: 0.8;
}
.shika4 {
  margin: 3px 10px;
width: 15px;
height: 15px;
border-radius: 50%;
background: #696969;
opacity: 0.8;
}
.shika5 {
  margin: 0 10px;
width: 0;
height: 0;
border-left: 20px solid #00A29A;
border-top: 10px solid transparent;
border-bottom: 10px solid transparent;}

#helloLoading {
  position:absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: #ffffff;
  z-index: 999;
}

#helloLoading img{
  margin: 100px auto;
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
