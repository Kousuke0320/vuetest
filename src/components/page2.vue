<template>
  <div id="group">
    <div id="groupName">
      <div class="makegroupbox">
      <p class="page2P">Group Name</p>
      <input id="textinput1" type="text" v-model="groupName"/>
      </div>
      <div class="makegroupbox">
      <p class="page2P">Member</p>
      <input id="textinput2" type="search" v-model="user"/>
      <input id="textinput3" type="submit" value="research" @click="research"/><br>
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
        <div id="addMember"><button id="textinput4" @click="add">This member Add</button></div>
        </div>
        </div>
      </div>
        <div id="rederChart">
          <!--<members-chart :chartData="chartData"></members-chart>-->
        </div>
        <div class="makegroupbox">
          <p class="page2P">Group Coment</p>
        <textarea id="comconf2"  v-model="coment"></textarea><br>
        </div>
        <input  id="pagesubmit" type="submit" value="Make Group" @click="addData"/><br>
      
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
        time: ''
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
                  time: this.time
      })
      alert('Make Group')  
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
    /*fillData() {
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
                    data: [this.mot[0] || 0, this.des[0] || 0, this.man[0] || 0, this.com[0] || 0, this.sys[0] || 0]
            },
            {
              //label: false,
                  backgroundColor: "rgba(255,99,132,0.2)",
                    borderColor: "rgba(255,99,132,0.8)",
                    pointBackgroundColor: "rgba(255,99,132,0.8)",
                    pointBorderColor: "#fff",
                    pointHoverBackgroundColor: "#fff",
                    pointHoverBorderColor: "rgba(255,99,132,0.8)",
                    data: [this.mot[1] || 0, this.des[1] || 0, this.man[1] || 0, this.com[1] || 0, this.sys[1] || 0]
            },
            {
              //label: false,
                  backgroundColor: "rgba(255,255,0,0.2)",
                    borderColor: "rgba(255,255,0,0.8)",
                    pointBackgroundColor: "rgba(255,255,0,0.8)",
                    pointBorderColor: "#fff",
                    pointHoverBackgroundColor: "#fff",
                    pointHoverBorderColor: "rgba(255,255,0,0.8)",
                    data: [this.mot[2] || 0, this.des[2] || 0, this.man[2] || 0, this.com[2] || 0, this.sys[2] || 0]
            },
            {
              //label: false,
                  backgroundColor: "rgba(0,255,0,0.2)",
                    borderColor: "rgba(0,255,0,0.8)",
                    pointBackgroundColor: "rgba(0,255,0,0.8)",
                    pointBorderColor: "#fff",
                    pointHoverBackgroundColor: "#fff",
                    pointHoverBorderColor: "rgba(0,255,0,0.8)",
                    data: [this.mot[3] || 0, this.des[3] || 0, this.man[3] || 0, this.com[3] || 0, this.sys[3] || 0]
            },
            {
              //label: false,
                  backgroundColor: "rgba(0,0,255,0.2)",
                    borderColor: "rgba(0,0,255,0.8)",
                    pointBackgroundColor: "rgba(0,0,255,0.8)",
                    pointBorderColor: "#fff",
                    pointHoverBackgroundColor: "#fff",
                    pointHoverBorderColor: "rgba(0,0,255,0.8)",
                    data: [this.mot[4] || 0, this.des[4] || 0, this.man[4] || 0, this.com[4] || 0, this.sys[4] || 0]
            },
            {
              //label: false,
                  backgroundColor: "rgba(255,99,132,0.2)",
                    borderColor: "rgba(255,99,132,1)",
                    pointBackgroundColor: "rgba(255,99,132,1)",
                    pointBorderColor: "#fff",
                    pointHoverBackgroundColor: "#fff",
                    pointHoverBorderColor: "rgba(255,99,132,1)",
                    data: [this.mot[5] || 0, this.des[5] || 0, this.man[5] || 0, this.com[5] || 0, this.sys[5] || 0]
            },
            {
              //label: false,
                  backgroundColor: "rgba(255,99,132,0.2)",
                    borderColor: "rgba(255,99,132,1)",
                    pointBackgroundColor: "rgba(255,99,132,1)",
                    pointBorderColor: "#fff",
                    pointHoverBackgroundColor: "#fff",
                    pointHoverBorderColor: "rgba(255,99,132,1)",
                    data: [this.mot[5] || 0, this.des[5] || 0, this.man[5] || 0, this.com[5] || 0, this.sys[5] || 0]
            },
            {
              //label: false,
                  backgroundColor: "rgba(255,99,132,0.2)",
                    borderColor: "rgba(255,99,132,1)",
                    pointBackgroundColor: "rgba(255,99,132,1)",
                    pointBorderColor: "#fff",
                    pointHoverBackgroundColor: "#fff",
                    pointHoverBorderColor: "rgba(255,99,132,1)",
                    data: [this.mot[6] || 0, this.des[6] || 0, this.man[6] || 0, this.com[6] || 0, this.sys[6] || 0]
            },
            {
              //label: false,
                  backgroundColor: "rgba(255,99,132,0.2)",
                    borderColor: "rgba(255,99,132,1)",
                    pointBackgroundColor: "rgba(255,99,132,1)",
                    pointBorderColor: "#fff",
                    pointHoverBackgroundColor: "#fff",
                    pointHoverBorderColor: "rgba(255,99,132,1)",
                    data: [this.mot[7] || 0, this.des[7] || 0, this.man[7] || 0, this.com[7] || 0, this.sys[7] || 0]
            }
          ]
        }
      },*/
    add: function () {

    var useuse = JSON.parse(localStorage.getItem('memberName'))
    this.userNum[this.count] = useuse
    this.count = this.count + 1
    document.getElementById("member").style.display ="none";
    this.user = ""
    }
  }
}

</script>

<style>

@media (min-width: 700px){

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
}

#textinput2 {
  border:none;
　background:none;
  background-color: #ffffff;
  color:#696969;
}

#textinput3 {
background-color: #ffffff;
color:#696969;
}

#textinput4 {
background-color: #00A29A;
color:#ffffff;
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
}

.page2P {
  font-size: 25px;
  margin: 10px auto;
}

#pagesubmit {
    margin:20px;
    background-color: #00A29A;
    color: aliceblue;
    border-radius: 5px;
    font-size: 15px;
    width:20%;
}

#memPrf {
background-color: #ffffff;
width: 30%;
margin: 0 auto;
padding-top: 20px;
padding-bottom: 20px;
}

}

@media (max-width: 699px){
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
}

#textinput2 {
  border:none;
　background:none;
  background-color: #ffffff;
  color:#696969;
}

#textinput3 {
background-color: #ffffff;
color:#696969;
}

#textinput4 {
background-color: #00A29A;
color:#ffffff;
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
}

.page2P {
  font-size: 20px;
  margin: 10px auto;
}

#pagesubmit {
    margin:20px;
    background-color: #00A29A;
    color: aliceblue;
    border-radius: 5px;
    font-size: 15px;
    width:60%;
}

#memPrf {
background-color: #ffffff;
width: 80%;
margin: 0 auto;
padding-top: 20px;
padding-bottom: 20px;
}

}


</style>