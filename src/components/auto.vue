<template>
  <div id="auto">
     <div class="makegroupbox">
        <p class="page2P">5 Skills</p>
        <div class="skillsParent">
          <div class="skillsParent2">
          <div class="skillsChild" id="autoskillA" @click="skillsPlusA">#Communication</div>
          <div class="skillsChild" id="autoskillB" @click="skillsPlusB">#Visualyze</div>
          <div class="skillsChild" id="autoskillC" @click="skillsPlusC">#Analyze</div>
          <div class="skillsChild" id="autoskillD" @click="skillsPlusD">#Technology</div>
          <div class="skillsChild" id="autoskillE" @click="skillsPlusE">#Policy</div>
          </div>
           <div class="skillsParent2">
          <div class="skillsChild" id="autoskillF" @click="skillsPlusF">#Illustrater</div>
          <div class="skillsChild" id="autoskillG" @click="skillsPlusG">#Photoshop</div>
          <div class="skillsChild" id="autoskillH" @click="skillsPlusH">#XD</div>
          <div class="skillsChild" id="autoskillI" @click="skillsPlusI">#3Dtools</div>
          <div class="skillsChild" id="autoskillJ" @click="skillsPlusJ">#Cad</div>
          </div>
           <div class="skillsParent2">
          <div class="skillsChild" id="autoskillK" @click="skillsPlusK" >#HTML5</div>
          <div class="skillsChild" id="autoskillL"  @click="skillsPlusL">#CSS3</div>
          <div class="skillsChild" id="autoskillM" @click="skillsPlusM">#JavaScript</div>
          <div class="skillsChild" id="autoskillN" @click="skillsPlusN">#iOS/Android</div>
          <div class="skillsChild" id="autoskillO" @click="skillsPlusO">#Unity</div>
          </div>
          </div>  
          </div>
       
    <div id="autogroupName">
        <div class="makegroupbox">
          <p class="page2P">Occupation</p>
            <input type="text" v-model="userOccupation" />
            
            <div id="occupationMemberHyouzin" v-show="memberLoading">
              <div id="occupationyokonarabi1"> 
            <div id="occupationmemberHyouzin2" v-for="(item, index) in memberList">
            <p id="occupationmemberHyouzin3">
              {{ item.User }}
              </p>
          <div id="occupationmemberHyouzin4">
            <div id="ocpmem1">
              <p>  
              {{ item.skill1　}}
              </p>
            </div>
            <div id="ocpmem2">
               <p>
              {{ item.skill2　}}
              </p>
            </div>
            <div id="ocpmem3" >
              <p>
              {{ item.skill3　}}
              </p>
            </div>
            <div id="ocpmem4">
              <p>
              {{ item.skill4　}}
              </p>
            </div>
            <div id="ocpmem5">
              <p>
              {{ item.skill5　}}
              </p>
            </div>
          
           </div>
          </div>
            </div>
            </div>
            <button @click="occupationResearch">reserach</button>
            </div>
        
        <button id="autopagesubmit" >sort</button><br>
        
    </div>
  </div>
</template>

<script>
import membersChart from './membersChart.vue'

var tintin;
var i;
var userA;
var photoURL;
var coment;
var skillsCount = []
var communication;
var visualization
var analyze
var technology
var policy

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
var coment;

export default {
  name: 'page2',
  data () {
    return {
      userName: '',
        groupName: '',
        user:'',
        userNum: [],
        loading:true,
        count:1,
        chartData: {},
        photoURL:"",
        coment:"",
        mot:[],
        man:[],
        des:[],
        com:[],
        sys:[],
        coment:'',
        time: '',
        skillscount: [],
        skillscount2: 0,
        skillcount31: [],
        skillcount32: [],
        skillcount33: [],
        skillcount34: [],
        skillcount35: [],
        skills1: '',
        skillA: false,
        skillB: false,
        skillC: false,
        skillD: false,
        skillE: false,
        skillF: false,
        skillG: false,
        skillH: false,
        skillI: false,
        skillJ: false,
        skillK: false,
        skillL: false,
        skillM: false,
        skillN: false,
        skillO: false,
        userOccupation:"",
        memberList:[],
        memberLoading:false,
        memberSkills:[],
        
    }
  },
  components: {
    membersChart
  },
  created () {
    
    this.userName = JSON.parse(localStorage.getItem('userName')) || []
    this.userNum[0] = this.userName
   //this.fillData()
   var dataJunbi = firebase.database().ref('/users/userPrf/' + this.user)
   
  },
  mounted: function() {
    //localStorage.setItem('memberName',JSON.stringify(this.user))
    
    document.getElementById("member").style.display ="none";

    },
     watch: {
    },
  methods: {
      occupationResearch(){
        this.memberLoading = true;
       
        firebase.database().ref('/users/occupation/' + this.userOccupation).on('value', snapshot => { // eslint-disable-line
          if (snapshot) {
            const rootList = snapshot.val();
            let list = [];
            Object.keys(rootList).forEach((val, key) => {
              rootList[val].id = val;
              list.push(rootList[val]);
            })
            this.memberList = list;
          }
        })

        var length = this.memberList.length
        
        var i = 0;
        for(i = 0; i < length; i++){

          firebase.database().ref('/users/userData/' + this.memberList[i].User)
          .on('value', function(snapshot) {
        /*motivation = snapshot.val().motivation
        management= snapshot.val().management
        design = snapshot.val().design
        communication = snapshot.val().communication
        system = snapshot.val().system*/
        visualization = snapshot.val().visualization
        analyze = snapshot.val().analyze
        technology = snapshot.val().technology
        policy = snapshot.val().policy
        communication = snapshot.val().communication

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

        this.memberSkills[i] = []
        var j = 0;
        for(j = 0; j < 5; j++){
          if(this.skillscount[j] == "communication"){
            this.memberSkills[i][j] = communication
          }else if(this.skillscount[j] == "visualization"){
            this.memberSkills[i][j] = visualization
          }else if(this.skillscount[j] == "analyze"){
            this.memberSkills[i][j] = analyze
          }else if(this.skillscount[j] == "technology"){
            this.memberSkills[i][j] = technology
          }else if(this.skillscount[j] == "policy"){
            this.memberSkills[i][j] = policy
          }else if(this.skillscount[j] == "illustrater"){
            this.memberSkills[i][j] = illustrater
          }else if(this.skillscount[j] == "photoshop"){
            this.memberSkills[i][j] = photoshop
          }else if(this.skillscount[j] == "XD"){
            this.memberSkills[i][j] = XD
          }else if(this.skillscount[j] == "Dtools"){
            this.memberSkills[i][j] = Dtools
          }else if(this.skillscount[j] == "cad"){
            this.memberSkills[i][j] = cad
          }else if(this.skillscount[j] == "html"){
            this.memberSkills[i][j] = html
          }else if(this.skillscount[j] == "css"){
            this.memberSkills[i][j] = css
          }else if(this.skillscount[j] == "js"){
            this.memberSkills[i][j] = js
          }else if(this.skillscount[j] == "sm"){
            this.memberSkills[i][j] = sm
          }else if(this.skillscount[j] == "unity"){
            this.memberSkills[i][j] = unity
          }
          //alert(this.skillscount[i])
        }
        
        this.skillcount31[i] = this.memberSkills[i][0]
        this.skillcount32[i] = this.memberSkills[i][1]
        this.skillcount33[i] = this.memberSkills[i][2]
        this.skillcount34[i] = this.memberSkills[i][3]
        this.skillcount35[i] = this.memberSkills[i][4]
        this.memberList[i].skill1 = this.skillcount31[i]
        this.memberList[i].skill2 = this.skillcount32[i]
        this.memberList[i].skill3 = this.skillcount33[i]
        this.memberList[i].skill4 = this.skillcount34[i]
        this.memberList[i].skill5 = this.skillcount35[i]
        
        }
        
      },
    skillsPlusA: function() {
      if(this.skillscount2 < 5 && this.skillA == false){
        this.skillscount[this.skillscount2] = "communication"
        this.skillscount2 ++
        document.getElementById("autoskillA").style.backgroundColor = "#70A09E"
        this.skillA = true
      }else{
        alert("Only 5 methods")
      }
    },
    skillsPlusB: function() {
      
      if(this.skillscount2 < 5 && this.skillB == false){
        this.skillscount[this.skillscount2] = "visualization"
      this.skillscount2 ++
      document.getElementById("autoskillB").style.backgroundColor = "#70A09E"
      this.skillB = true
      }else{
        alert("Only 5 methods")
      }
    },
    skillsPlusC: function() {
      
      if(this.skillscount2 < 5 && this.skillC == false){
        this.skillscount[this.skillscount2] = "analyze"
      this.skillscount2 ++
      document.getElementById("autoskillC").style.backgroundColor = "#70A09E"
      this.skillC = true
      }else{
        alert("Only 5 methods")
      }
    },
    skillsPlusD: function() {
            if(this.skillscount2 < 5 && this.skillD == false){
        this.skillscount[this.skillscount2] = "technology"
      this.skillscount2 ++
      document.getElementById("autoskillD").style.backgroundColor = "#70A09E"
      this.skillD = true
      }else{
        alert("Only 5 methods")
      }
    },
    skillsPlusE: function() {
      
      if(this.skillscount2 < 5 && this.skillE == false){
        this.skillscount[this.skillscount2] = "policy"
      this.skillscount2 ++
      document.getElementById("autoskillE").style.backgroundColor = "#70A09E"
      this.skillE = true
      }else{
        alert("Only 5 methods")
      }
    },
    skillsPlusF: function() {
      
      if(this.skillscount2 < 5 && this.skillF == false){
        this.skillscount[this.skillscount2] = "illustrater"
      this.skillscount2 ++
      document.getElementById("autoskillF").style.backgroundColor = "#70A09E"
      this.skillF = true
      }else{
        alert("Only 5 methods")
      }
    },
    skillsPlusG: function() {
      
      if(this.skillscount2 < 5 && this.skillG == false){
        this.skillscount[this.skillscount2] = "photoshop"
      this.skillscount2 ++
      document.getElementById("autoskillG").style.backgroundColor = "#70A09E"
      this.skillG = true
      }else{
        alert("Only 5 methods")
      }
    },
    skillsPlusH: function() {
      
      if(this.skillscount2 < 5 && this.skillH == false){
        this.skillscount[this.skillscount2] = "XD"
      this.skillscount2 ++
      document.getElementById("autoskillH").style.backgroundColor = "#70A09E"
      this.skillH = true
      }else{
        alert("Only 5 methods")
      }
    },
    skillsPlusI: function() {
      
      if(this.skillscount2 < 5 && this.skillI == false){
        this.skillscount[this.skillscount2] = "Dtools"
      this.skillscount2 ++
      document.getElementById("autoskillI").style.backgroundColor = "#70A09E"
      this.skillI = true
      }else{
        alert("Only 5 methods")
      }
    },
    skillsPlusJ: function() {
      
      if(this.skillscount2 < 5 && this.skillJ == false){
        this.skillscount[this.skillscount2] = "cad"
      this.skillscount2 ++
      document.getElementById("autoskillJ").style.backgroundColor = "#70A09E"
      this.skillJ = true
      }else{
        alert("Only 5 methods")
      }
    },
    skillsPlusK: function() {
     
      if(this.skillscount2 < 5 && this.skillK == false){
        this.skillscount[this.skillscount2] = "html"
      this.skillscount2 ++
      document.getElementById("autoskillK").style.backgroundColor = "#70A09E"
      this.skillK = true
      }else{
        alert("Only 5 methods")
      }
    },
    skillsPlusL: function() {
      
      if(this.skillscount2 < 5 && this.skillL == false){
       this.skillscount[this.skillscount2] = "css"
      this.skillscount2 ++
      document.getElementById("autoskillL").style.backgroundColor = "#70A09E"
      this.skillL = true
      }else{
        alert("Only 5 methods")
      }
    },
    skillsPlusM: function() {
      
      if(this.skillscount2 < 5 && this.skillM== false){
        this.skillscount[this.skillscount2] = "js"
      this.skillscount2 ++
      document.getElementById("autoskillM").style.backgroundColor = "#70A09E"
      this.skillM = true
      }else{
        alert("Only 5 methods")
      }
    },
    skillsPlusN: function() {
      
      if(this.skillscount2 < 5 && this.skillN == false){
       this.skillscount[this.skillscount2] = "sm"
      this.skillscount2 ++
      document.getElementById("autoskillN").style.backgroundColor = "#70A09E"
      this.skillN = true
      }else{
        alert("Only 5 methods")
      }
    },
    skillsPlusO: function() {
     
      if(this.skillscount2 < 5 && this.skillO == false){
        this.skillscount[this.skillscount2] = "unity"
      this.skillscount2 ++
      document.getElementById("autoskillO").style.backgroundColor = "#70A09E"
      this.skill0 = true
      }else{
        alert("Only 5 methods")
      }
    },
    research: function() {
      var getUsersPrf = firebase.database().ref('/users/userPrf/' + this.user)
      localStorage.setItem('memberName',JSON.stringify(this.user))
      getUsersPrf.on('value', function(snapshot) {
        photoURL = snapshot.val().photo
        coment = snapshot.val().coment
      })
      this.photoURL = photoURL;
      this.coment = coment
      
      if(this.photoURL == null || this.photoURL == ""){
        this.loading = false;
        var y1 = document.getElementById("member");
        y1.style.display ="none";
      }else{
        document.getElementById("resultName").innerText = this.user
         document.getElementById('pic').src = photoURL
      document.getElementById("memberCom").innerText = coment
      var y1 = document.getElementById("member");
      y1.style.display ="block";

      }
        
      //this.fillData()
      },
   /*     add: function () {

    var useuse = JSON.parse(localStorage.getItem('memberName'))
    photoURL = ""
    coment = ""
    this.photoURL = ""

    if(this.count < 10){
    this.userNum[this.count] = useuse
    this.count = this.count + 1
    document.getElementById("member").style.display ="none";
    this.user = ""
    }else {
      alert("There are only 10 members")
      document.getElementById("member").style.display ="none";
    this.user = ""
    }
    }*/
  }
}

</script>

<style>

@media (min-width: 1080px){

#group {
  font-size: 15px;
}

#comconf2 {
  margin:30px auto;
  width:50%;
  height:10vh;
  background-color: #ffffff;
  color:#696969;
  font-size:15px;
  border:none;
}

#textinput1 {
  border:none;
　background:none;
  background-color: #ffffff;
  color:#696969;
  height: 30px;
  width:50%;
  font-size:15px;
}

#textinput2 {
  border:none;
　background:none;
  background-color: #ffffff;
  color:#696969;
  height: 30px;
  width:40%;
  font-size:15px;
}

#textinput3 {
background-color: #ffffff;
color:#696969;
}

#textinput4 {
background-color: #00A29A;
color:#ffffff;
font-size: 15px;
width: 70%;
height: 30px;
border-radius: 5px;

}

#groupName {
  width: 70%;
  margin: 50px auto;
}

#pic {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}

#member {
  margin-top: 20px;
}

#addMember {
  margin-top: 20px;
}

.makegroupbox{
  margin:20px auto;
  width: 80%;
  background: #f5f5f5;
  padding-top:5px;
  padding-bottom: 20px;
  box-shadow: 7px 7px #F2F2F2;
}


.page2P {
  font-size: 25px;
  margin: 10px auto;
}

#autopagesubmit {
    margin:20px auto;
    background-color: #00A29A;
    color: aliceblue;
    border-radius: 5px;
    font-size: 15px;
    width: 20vw;
  height: 40px;
}

#memPrf {
background-color: #ffffff;
width: 30%;
margin: 0 auto;
padding-top: 20px;
padding-bottom: 20px;
}

.skillsParent {

}

.skillsParent2 {
display: flex;
}


.skillsChild {
flex:1;
height: 30px;
background: #00A29A;
border : solid 1px #f5f5f5;
}

#skillsChild1 {
flex:1;
height: 30px;
background: #00A29A;
border : solid 1px #f5f5f5;
}

#skillsChild2 {
flex:1;
height: 30px;
background: #00A29A;
border : solid 1px #f5f5f5;

}
#skillsChild3 {
flex:1;
height: 30px;
background: #00A29A;
border : solid 1px #f5f5f5;

}
#skillsChild4 {
flex:1;
height: 30px;
background: #00A29A;
border : solid 1px #f5f5f5;

}

#skillsChild5 {
flex:1;
height: 30px;
background: #00A29A;
border : solid 1px #f5f5f5;
}



.skillsChild:hover {
  opacity: 0.8;
}

#occupationmemberHyouzin2{
  display:flex;
}

#occupationmemberHyouzin3{
  flex:1;
}

#occupationmemberHyouzin4{
  flex:2;
  display:flex;
}

#ocpmem1{
  flex:1;
}

#ocpmem2{
  flex:1;
}

#ocpmem3{
  flex:1;
}

#ocpmem4{
  flex:1;
}

#ocpmem5{
  flex:1;
}

}

@media (max-width: 1079px){
#group {
  font-size: 15px;
}

#comconf2 {
  margin:20px auto;
  width:80%;
  height:10vh;
  background-color: #ffffff;
  color:#696969;
  font-size:15px;
  border:none;
}

#textinput1 {
  border:none;
　background:none;
  background-color: #ffffff;
  color:#696969;
  height: 30px;
  width:80%;
  font-size:15px;
}

#textinput2 {
  border:none;
　background:none;
  background-color: #ffffff;
  color:#696969;
  height: 30px;
  width:60%;
  font-size:15px;
}

#textinput3 {
background-color: #ffffff;
color:#696969;
}

#textinput4 {
background-color: #00A29A;
color:#ffffff;
font-size: 15px;
width: 70%;
height: 30px;
border-radius: 5px;
}

#groupName {
  margin: 50px auto;
}

#pic {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}

#member {
  margin-top: 20px;
}

#addMember {
  margin-top: 20px;
}

.makegroupbox{
  margin:10px auto;
  width: 80%;
  background: #f5f5f5;
  padding-top:5px;
  padding-bottom: 20px;
  box-shadow: 4px 4px #F2F2F2;
}

.page2P {
  font-size: 20px;
  margin: 10px auto;
}

#pagesubmit {
      margin:20px auto;
      background-color: #00A29A;
      color: aliceblue;
      border-radius: 5px;
      font-size: 15px;
      width: 50vw;
  height: 40px;
}

#memPrf {
background-color: #ffffff;
width: 80%;
margin: 0 auto;
padding-top: 20px;
padding-bottom: 20px;
}

.skillsChild {
margin: 0 auto;
height: 30px;
width:50%;
background: #00A29A;
border : solid 1px #f5f5f5;
}


}


</style>