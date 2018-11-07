<template>
<div id="group">
  <div id="groupingroup">
  <div id="userPrf2">
    <div id="userPic2">
      <div class="userPicSub">
      <div id="name2">Group {{ groupName }}</div>
      <div id="userpicpic2">
      <img src="../assets/pentakun.png" id="prfPic2">
      </div>
      </div>
      <div id="userCom2">
      <div id="userComment2">
        Since {{ time }}<br>
        by {{ reader }}
        <div id="userComment22">
        {{ coment }}
        </div>
        <div id="deleatButton" @click="removeGroup"></div>
        </div>
      
    </div>
    </div>
  </div>
  <div id="chart2">
    <div id="rader2">
      <div class="shika" id="shika0">
        <div class="shika1" id="shika1" @click="test1"></div>
        <div class="shika2" id="shika2"></div>
        <div class="shika3" id="shika3"></div>
        <div class="shika4" id="shika4"></div>
        <div class="shika6" id="shika6"></div>
        <div class="shika5" id="shika5"></div>
        </div>
      <members-chart :chartData="chartData" :height="300"></members-chart>
    </div>
    <div id="line2">
      <h2>Member</h2>
        <div id="memberHyouzin" v-for="(item,index) in userName" @click="memberProfile(index)">
          {{item}}</div><br>
          <div id="memberHyou" v-for="(item) in list">
          {{item}}</div><br>
    </div>
    
  </div>
  </div>
</div>
</template>
<script>
import membersChart from './membersChart.vue'
import router from '../router'
var tintintin
var username = []
var SkillsCount = []
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
var coment;
var time;
var AA;
var BB;
var CC;
var DD;
var EE;

export default {
  name: 'Group',
  data () {
    return {
      groupName: '',
      userName:[],
      chartData: {},
      A:[],
      hantei:0,
      reader:'',
      time: '',
      coment: '',
      list:[],
      userMe: '',
     }
    },
    components: {
    membersChart
  },
  created: function(){
      //this.fillData()
      this.groupName = JSON.parse(localStorage.getItem('groupName')) || []
      //localStorage.setItem('groupName',JSON.stringify(''))
      firebase.database().ref("/users/groupskills/" + this.groupName).on('value', function(snapshot) {
        SkillsCount[0] = snapshot.val().skills1
        SkillsCount[1] = snapshot.val().skills2
        SkillsCount[2] = snapshot.val().skills3
        SkillsCount[3] = snapshot.val().skills4
        SkillsCount[4] = snapshot.val().skills5
      })
      
      firebase.database().ref('/users/group/' + this.groupName).on('value', function(snapshot) {
        username[0] = snapshot.val().user1
        username[1] = snapshot.val().user2
        username[2] = snapshot.val().user3
        username[3] = snapshot.val().user4
        username[4] = snapshot.val().user5
        username[5] = snapshot.val().user6
        username[6] = snapshot.val().user7
        username[7] = snapshot.val().user8
        username[8] = snapshot.val().user9
        coment = snapshot.val().coment
        time = snapshot.val().time
      })
      
      this.coment = coment
      this.time = time

      this.reader = username[0]
      var i = 0;
      var j = 0;
      
      for(i = 0; i < 10; i++){
          this.userName[i] = username[i]
        firebase.database().ref('/users/userData/' + username[i]).on('value', function(snapshot) {
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
        html = snapshot.val().html
        css = snapshot.val().css
        js = snapshot.val().js
        sm = snapshot.val().sm
        unity = snapshot.val().unity
        }) 
        this.A[i] = []
        for(j = 0; j < 5; j++){
          
          if(SkillsCount[j] == "motivation"){
            this.A[i][j] = motivation
          }else if(SkillsCount[j] == "management"){
            this.A[i][j] = management
          }else if(SkillsCount[j] == "design"){
            this.A[i][j] = design
          }else if(SkillsCount[j] == "communication"){
            this.A[i][j] = communication
          }else if(SkillsCount[j] == "system"){
            this.A[i][j] = system
          }else if(SkillsCount[j] == "illustrater"){
            this.A[i][j] = illustrater
          }else if(SkillsCount[j] == "photoshop"){
            this.A[i][j] = photoshop
          }else if(SkillsCount[j] == "XD"){
            this.A[i][j] = XD
          }else if(SkillsCount[j] == "Dtools"){
            this.A[i][j] = Dtools
          }else if(SkillsCount[j] == "cad"){
            this.A[i][j] = cad
          }else if(SkillsCount[j] == "html"){
            this.A[i][j] = html
          }else if(SkillsCount[j] == "css"){
            this.A[i][j] = css
          }else if(SkillsCount[j] == "js"){
            this.A[i][j] = js
          }else if(SkillsCount[j] == "sm"){
            this.A[i][j] = sm
          }else if(SkillsCount[j] == "unity"){
            this.A[i][j] = unity
          } 
        }
      }
       this.userMe = localStorage.getItem("userName")

      firebase.database().ref('/users/userGroup/' + this.userMe).on('value', snapshot => { // eslint-disable-line
          if (snapshot) {
            const rootList2 = snapshot.val();
            let list2 = [];
            Object.keys(rootList2).forEach((val, key) => {
              rootList2[val].id = val;
              list2.push(rootList2[val]);
            })
            this.list = list2; 
            /*
            Object.keys(this.list).forEach(function(key){
              if(this.list[key].Group = this.GroupName){
                alert("tinko")
                //firebase.database().ref('/users/userGroup/' + this.userName + this.list[].id).remove();   
             }
            })*/
          }
        })
      
              this.fillData()
  },
  mounted: function() {
    this.fillData()
    setTimeout(this.countHantei2, 1000);
    
  },
  methods: {
    removeGroup () {
      //firebase.database().ref('/users/group/' + this.groupName).remove();
      //firebase.database().ref('/users/groupskills/' + this.groupName).remove();
            console.log(this.list[0].Group)
    },
    countHantei2() {
      this.hantei = localStorage.getItem('count2')
      if(this.hantei == 1){
      router.push({ path: '/margin3' })
      //alert(this.hantei)
    }else if(this.hantei == 2){
      router.push({ path: '/margin4' })
    }
    },
      memberProfile(index) {
          localStorage.setItem('groupMemberName',JSON.stringify(this.userName[index]))
          router.push({ path: '/groupmember' })
      },
      test1() {
        this.chartData["labels"] = ['Motivation', 'design', 'Management', 'Communication', 'System']
        console.log(this.chartData["labels"])
        console.log("manman")

      },
      fillData() {
    this.chartData = {
      labels: [SkillsCount[0],SkillsCount[1],SkillsCount[2],SkillsCount[3],SkillsCount[4]],
            datasets: [
            {
                  //label: false,
                  backgroundColor: "rgba(100,108,168,0.1)",
                    borderColor: "rgba(100,108,168,0.8)",
                    pointBackgroundColor: "rgba(100,108,168,0.8)",
                    pointBorderColor: "#fff",
                    pointHoverBackgroundColor: "#fff",
                    pointHoverBorderColor: "rgba(100,108,168,0.8)",
                    data: [this.A[0][0] || 0, this.A[0][1] || 0, this.A[0][2] || 0, this.A[0][3] || 0, this.A[0][4] || 0]
            },
            {
              //label: false,
                  backgroundColor: "rgba(224,118,145,0.1)",
                    borderColor: "rgba(224,118,145,0.8)",
                    pointBackgroundColor: "rgba(224,118,145,0.8)",
                    pointBorderColor: "#fff",
                    pointHoverBackgroundColor: "#fff",
                    pointHoverBorderColor: "rgba(224,118,145,0.8)",
                    data: [this.A[1][0] || 0, this.A[1][1] || 0, this.A[1][2] || 0, this.A[1][3] || 0, this.A[1][4] || 0]
            },
            {
              //label: false,
                  backgroundColor: "rgba(206, 206, 4,0.1)",
                    borderColor: "rgba(206, 206, 4,0.8)",
                    pointBackgroundColor: "rgba(206, 206, 4,0.8)",
                    pointBorderColor: "#fff",
                    pointHoverBackgroundColor: "#fff",
                    pointHoverBorderColor: "rgba(206, 206, 4,0.8)",
                    data: [this.A[2][0] || 0, this.A[2][1] || 0, this.A[2][2] || 0, this.A[2][3] || 0, this.A[2][4] || 0]
            },
            {
              //label: false,
                  backgroundColor: "rgba(34, 201, 34,0.1)",
                    borderColor: "rgba(34, 201, 34,0.8)",
                    pointBackgroundColor: "rgba(34, 201, 34,0.8)",
                    pointBorderColor: "#fff",
                    pointHoverBackgroundColor: "#fff",
                    pointHoverBorderColor: "rgba(34, 201, 34,0.8)",
                    data: [this.A[3][0] || 0, this.A[3][1] || 0, this.A[3][2] || 0, this.A[3][3] || 0, this.A[3][4] || 0]
            },
            {
              //label: false,
                  backgroundColor: "rgba(43, 43, 239,0.1)",
                    borderColor: "rgba(43, 43, 239,0.8)",
                    pointBackgroundColor: "rgba(43, 43, 239,0.8)",
                    pointBorderColor: "#fff",
                    pointHoverBackgroundColor: "#fff",
                    pointHoverBorderColor: "rgba(43, 43, 239,0.8)",
                    data: [this.A[4][0] || 0, this.A[4][1] || 0, this.A[4][2] || 0, this.A[4][3] || 0, this.A[4][4] || 0]
            },
            {
              //label: false,
                  backgroundColor: "rgba(119, 119, 239,0.1)",
                    borderColor: "rgba(119, 119, 239,0.6)",
                    pointBackgroundColor: "rgba(119, 119, 239,0.6)",
                    pointBorderColor: "#fff",
                    pointHoverBackgroundColor: "#fff",
                    pointHoverBorderColor: "rgba(119, 119, 239,0.6)",
                    data: [this.A[5][0] || 0, this.A[5][1] || 0, this.A[5][2] || 0, this.A[5][3] || 0, this.A[5][4] || 0]
            },
            {
              //label: false,
                  backgroundColor: "rgba(142, 97, 255,0.1)",
                    borderColor: "rgba(142, 97, 255,0.8)",
                    pointBackgroundColor: "rgba(142, 97, 255,0.8)",
                    pointBorderColor: "#fff",
                    pointHoverBackgroundColor: "#fff",
                    pointHoverBorderColor: "rgba(142, 97, 255,0.8)",
                    data: [this.A[6][0] || 0, this.A[6][1] || 0, this.A[6][2] || 0, this.A[6][3] || 0, this.A[6][4] || 0]
            },
            {
              //label: false,
                  backgroundColor: "rgba(97, 255, 173, 0.2)",
                    borderColor: "rgba(97, 255, 173, 0.8)",
                    pointBackgroundColor: "rgba(97, 255, 173, 0.8)",
                    pointBorderColor: "#fff",
                    pointHoverBackgroundColor: "#fff",
                    pointHoverBorderColor: "rgba(97, 255, 173, 0.8)",
                    data: [this.A[7][0] || 0, this.A[7][1] || 0, this.A[7][2] || 0, this.A[7][3] || 0, this.A[7][4] || 0]
            },
            {
              //label: false,
                  backgroundColor: "rgba(189, 255, 97, 0.1)",
                    borderColor: "rgba(189, 255, 97, 0.8)",
                    pointBackgroundColor: "rgba(189, 255, 97, 0.8)",
                    pointBorderColor: "#fff",
                    pointHoverBackgroundColor: "#fff",
                    pointHoverBorderColor: "rgba(189, 255, 97, 0.8)",
                    data: [this.A[8][0] || 0, this.A[8][1] || 0, this.A[8][2] || 0, this.A[8][3] || 0, this.A[8][4] || 0]
            }
          ]
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
  margin:0;
}

#group {
  margin: 0;
  width: 100%;
  height:100vh;
  
}

#groupingroup {
display: flex;
}

#userPrf2 {
  flex: 4;
  background: #00A29A;
  height:100vh;
  color: #ffffff;
  position: relative;
}

#userPic2 {
  
}

#userPic2 img {
  position: absolute;
  right:-100px;
  top:50px;
  width:200px;
  height: 200px;
  border-radius: 50%;
  border: solid 5px;
  color:#ffffff;
}

#name2 {
  width: 60%;
  margin-top: 50px;
  margin-left: 10%;
  margin-right: 30%;
  text-align: justify;
  display: inline-block;  
  font-size: 40px;
  border-bottom: solid 2px;
  
}
#userComment2 {
  margin-top: 50px;
}

#userCom2 {
  width: 60%;
  text-align: left;
  margin: 30vh 10%;
}

#userComment22 {
  margin-top: 10px;
}

#chart2 {
  flex:10;
  display: flex;
  margin-top: 40vh;
}

#rader2 {
  flex: 1;
}

#line2 {
  flex: 1;
}

#memberHyouzin{
    width:50%;
    height:auto;
    margin:5px auto;
    background: #f2f2f2
}

#memberHyouzin:hover{
    opacity: 0.5;
}

#memberHyou{
  width:50%;
    height:auto;
    margin:5px auto;
    background: #f2f2f2
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

#deleatButton {
  width:30px;
  height: 30px;
  background: #696969;
}

}

@media (max-width: 1079px){
  template {
  width: 100%;
  margin:0;
}

#group {
  margin: 0;
  width: 100%;
  height:100vh;
  
}

#groupingroup {
}

#userPrf2 {
  background: #00A29A;
  color: #ffffff;
  position: relative;
}

#userPic2 {
  
}

#userPic2 img {
  margin: 50px auto auto auto;
  width:200px;
  height: 200px;
  border-radius: 50%;
  border: solid 5px;
  color:#ffffff;
}

#name2 {
  width: 60%;
  margin:10px auto;
  text-align: center;
  display: inline-block;  
  font-size: 30px;
}
#userComment2 {
  margin-top: 20px;
  padding-bottom: 20px;
}

#userComment22 {
  margin-top: 10px;
}


#userCom2 {
  width: 60%;
  text-align: center;
  margin: 20px auto;
}

#chart2 {
  margin-top: 20px;
}

#rader2 {
  margin:20px auto;
  width:80vw;
}

#line2 {
}

#memberHyouzin{
    width:50%;
    height:auto;
    margin:5px auto;
    background: #f2f2f2
}

#memberHyouzin:hover{
    opacity: 0.5;
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

#deleatButton {
  width:30px;
  height: 30px;
  background: #696969;
}


}
</style>
