<template>
  <div id="group">
    <div id="groupName">
      <div class="makegroupbox">
      <p class="page2P">Group Name</p>
      <input id="textinput1" placeholder="Groupname" type="text" v-model="groupName"/>
      </div>
      <div class="makegroupbox">
      <p class="page2P">Member</p>
      <input id="textinput2" type="search" v-model="user" placeholder="Taro Yamada"/>
      <input id="textinput3" type="submit" value="reserach"  @click="research"/><br>
      <p>{{ userNum }}</p>
      <div id="member">
        <div id="memPrf">
        <div id="aaaa">
          <img src="" id="pic"/>
        </div>
        <div id="resultName">
        </div>
        <div id="memberCom">
        </div>
        <div id="addMember"><button id="textinput4" @click="add">Add member</button></div>
        </div>
        </div>
      </div>
        <div id="rederChart">
          <!--<members-chart :chartData="chartData"></members-chart>-->
        
        </div>
        <div class="makegroupbox">
        <p class="page2P">5 Skills</p>
        <div class="skillsParent">
          {{ skillscount }}
          {{ skillscount2 }}
          <div class="skillsParent2">
          <div class="skillsChild" id="skillA" @click="skillsPlusA">#Motivatino</div>
          <div class="skillsChild" id="skillB" @click="skillsPlusB">#Design</div>
          <div class="skillsChild" id="skillC" @click="skillsPlusC">#Management</div>
          <div class="skillsChild" id="skillD" @click="skillsPlusD">#Communication</div>
          <div class="skillsChild" id="skillE" @click="skillsPlusE">#System</div>
          </div>
           <div class="skillsParent2">
          <div class="skillsChild" id="skillF" @click="skillsPlusF">#Illustrater</div>
          <div class="skillsChild" id="skillG" @click="skillsPlusG">#Photoshop</div>
          <div class="skillsChild" id="skillH" @click="skillsPlusH">#XD</div>
          <div class="skillsChild" id="skillI" @click="skillsPlusI">#3Dtools</div>
          <div class="skillsChild" id="skillJ" @click="skillsPlusJ">#Cad</div>
          </div>
           <div class="skillsParent2">
          <div class="skillsChild" id="skillK" @click="skillsPlusK" >#HTML5</div>
          <div class="skillsChild" id="skillL"  @click="skillsPlusL">#CSS3</div>
          <div class="skillsChild" id="skillM" @click="skillsPlusM">#JavaScript</div>
          <div class="skillsChild" id="skillN" @click="skillsPlusN">#iOS/Android</div>
          <div class="skillsChild" id="skillO" @click="skillsPlusO">#Unity</div>
          </div>
          </div>  
          </div>
        <div class="makegroupbox">
          <p class="page2P">Group Coment</p>
        <textarea id="comconf2"  v-model="coment" placeholder="Comment here"></textarea><br>
        </div>
        <button id="pagesubmit" @click="addData">Make Group</button><br>
        
    </div>
  </div>
</template>

<script>
import membersChart from './membersChart.vue'

var tintin;
var i;
var motivation;
var management;
var design;
var communication;
var system;
var userA;

export default {
  name: 'page2',
  data () {
    return {
      userName: '',
        groupName: '',
        user:'',
        userNum: [],
        count:1,
        chartData: {},
        mot:[],
        man:[],
        des:[],
        com:[],
        sys:[],
        coment:'',
        time: '',
        skillscount: [],
        skillscount2: 0,
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
  methods: {
    addData: function() {
      if(this.groupName === ''){
        alert("Nothing Group Name!!")
      }else {

        var hiduke=new Date(); 
　      var year = hiduke.getFullYear();
　      var month = hiduke.getMonth()+1;
　      var day = hiduke.getDate();
　      this.time = year + "/" + month + "/" + day;
  
        var x;
        for(x = 0; x < this.userNum.length; x++){
          firebase.database().ref('/users/userGroup/' + this.userNum[x]).push({
      Group:this.groupName
    })
    }
        firebase.database().ref("/users/group/" + this.groupName).update({
                  user1: this.userNum[0] || '',
                  user2: this.userNum[1] || '',
                  user3: this.userNum[2] || '',
                  user4: this.userNum[3] || '',
                  user5: this.userNum[4] || '',
                  user6: this.userNum[5] || '',
                  user7: this.userNum[6] || '',
                  user8: this.userNum[7] || '',
                  user9: this.userNum[8] || '',
                  coment: this.coment,
                  time: this.time,
                  count: this.count
      })

        firebase.database().ref("/users/groupskills/" + this.groupName).update({
                         skills1: this.skillscount[0],
                         skills2: this.skillscount[1],
                         skills3: this.skillscount[2],
                         skills4: this.skillscount[3],
                         skills5: this.skillscount[4],
                         })

      alert('Make Group')  
      }   
    },
    skillsPlusA: function() {
      if(this.skillscount2 < 5 && this.skillA == false){
        this.skillscount[this.skillscount2] = "motivation"
        this.skillscount2 ++
        document.getElementById("skillA").style.backgroundColor = "#70A09E"
        this.skillA = true
      }else{
        alert("Only 5 methods")
      }
    },
    skillsPlusB: function() {
      
      if(this.skillscount2 < 5 && this.skillB == false){
        this.skillscount[this.skillscount2] = "design"
      this.skillscount2 ++
      document.getElementById("skillB").style.backgroundColor = "#70A09E"
      this.skillB = true
      }else{
        alert("Only 5 methods")
      }
    },
    skillsPlusC: function() {
      
      if(this.skillscount2 < 5 && this.skillC == false){
        this.skillscount[this.skillscount2] = "management"
      this.skillscount2 ++
      document.getElementById("skillC").style.backgroundColor = "#70A09E"
      this.skillC = true
      }else{
        alert("Only 5 methods")
      }
    },
    skillsPlusD: function() {
            if(this.skillscount2 < 5 && this.skillD == false){
        this.skillscount[this.skillscount2] = "communication"
      this.skillscount2 ++
      document.getElementById("skillD").style.backgroundColor = "#70A09E"
      this.skillD = true
      }else{
        alert("Only 5 methods")
      }
    },
    skillsPlusE: function() {
      
      if(this.skillscount2 < 5 && this.skillE == false){
        this.skillscount[this.skillscount2] = "system"
      this.skillscount2 ++
      document.getElementById("skillE").style.backgroundColor = "#70A09E"
      this.skillE = true
      }else{
        alert("Only 5 methods")
      }
    },
    skillsPlusF: function() {
      
      if(this.skillscount2 < 5 && this.skillF == false){
        this.skillscount[this.skillscount2] = "illustrater"
      this.skillscount2 ++
      document.getElementById("skillF").style.backgroundColor = "#70A09E"
      this.skillF = true
      }else{
        alert("Only 5 methods")
      }
    },
    skillsPlusG: function() {
      
      if(this.skillscount2 < 5 && this.skillG == false){
        this.skillscount[this.skillscount2] = "photoshop"
      this.skillscount2 ++
      document.getElementById("skillG").style.backgroundColor = "#70A09E"
      this.skillG = true
      }else{
        alert("Only 5 methods")
      }
    },
    skillsPlusH: function() {
      
      if(this.skillscount2 < 5 && this.skillH == false){
        this.skillscount[this.skillscount2] = "XD"
      this.skillscount2 ++
      document.getElementById("skillH").style.backgroundColor = "#70A09E"
      this.skillH = true
      }else{
        alert("Only 5 methods")
      }
    },
    skillsPlusI: function() {
      
      if(this.skillscount2 < 5 && this.skillI == false){
        this.skillscount[this.skillscount2] = "Dtools"
      this.skillscount2 ++
      document.getElementById("skillI").style.backgroundColor = "#70A09E"
      this.skillI = true
      }else{
        alert("Only 5 methods")
      }
    },
    skillsPlusJ: function() {
      
      if(this.skillscount2 < 5 && this.skillJ == false){
        this.skillscount[this.skillscount2] = "cad"
      this.skillscount2 ++
      document.getElementById("skillJ").style.backgroundColor = "#70A09E"
      this.skillJ = true
      }else{
        alert("Only 5 methods")
      }
    },
    skillsPlusK: function() {
     
      if(this.skillscount2 < 5 && this.skillK == false){
        this.skillscount[this.skillscount2] = "html"
      this.skillscount2 ++
      document.getElementById("skillK").style.backgroundColor = "#70A09E"
      this.skillK = true
      }else{
        alert("Only 5 methods")
      }
    },
    skillsPlusL: function() {
      
      if(this.skillscount2 < 5 && this.skillL == false){
       this.skillscount[this.skillscount2] = "css"
      this.skillscount2 ++
      document.getElementById("skillL").style.backgroundColor = "#70A09E"
      this.skillL = true
      }else{
        alert("Only 5 methods")
      }
    },
    skillsPlusM: function() {
      
      if(this.skillscount2 < 5 && this.skillM== false){
        this.skillscount[this.skillscount2] = "js"
      this.skillscount2 ++
      document.getElementById("skillM").style.backgroundColor = "#70A09E"
      this.skillM = true
      }else{
        alert("Only 5 methods")
      }
    },
    skillsPlusN: function() {
      
      if(this.skillscount2 < 5 && this.skillN == false){
       this.skillscount[this.skillscount2] = "sm"
      this.skillscount2 ++
      document.getElementById("skillN").style.backgroundColor = "#70A09E"
      this.skillN = true
      }else{
        alert("Only 5 methods")
      }
    },
    skillsPlusO: function() {
     
      if(this.skillscount2 < 5 && this.skillO == false){
        this.skillscount[this.skillscount2] = "unity"
      this.skillscount2 ++
      document.getElementById("skillO").style.backgroundColor = "#70A09E"
      this.skill0 = true
      }else{
        alert("Only 5 methods")
      }
    },
    research: function() {
      var getUsersPrf = firebase.database().ref('/users/userPrf/' + this.user)
      document.getElementById("resultName").innerText = this.user
      localStorage.setItem('memberName',JSON.stringify(this.user))
      getUsersPrf.on('value', function(snapshot) {
      document.getElementById('pic').src = snapshot.val().photo 
      document.getElementById("memberCom").innerText = snapshot.val().coment
      })

      var y1 = document.getElementById("member");

      y1.style.display ="block";

      //document.getElementById("rederChart").innerHTML = 'aaa'
      var skillGet = firebase.database().ref('/users/userData/' + this.user)
      
      skillGet.on('value', function(snapshot) {
        motivation = snapshot.val().motivation
        management= snapshot.val().management
        design = snapshot.val().design
        communication = snapshot.val().communication
        system = snapshot.val().system
      })

      this.man[this.count] = management
      this.mot[this.count] = motivation
      this.des[this.count] = design
      this.com[this.count] = communication
      this.sys[this.count] = system

      //this.fillData()
      },
        add: function () {

    var useuse = JSON.parse(localStorage.getItem('memberName'))
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
    }
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

#pagesubmit {
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