<template>
  <div id="group">
    <div id="groupName">
      <input type="text" v-model="groupName"/><br>
      <input type="submit" value="Make Group" @click="addData"/><br>
      <input type="search" v-model="user"/><br>
      <input type="submit" value="research" @click="research"/><br>
      
      <p>Member {{ count }}{{ userNum }}</p>
      <div id="member">
        <div id="memPrf">
        <div id="aaaa">
          <img src="" id="pic"/>
        </div>
        <div id="resultName">

        </div>
        <div id="memberCom">

        </div>
        <div id="addMember"><button @click="add">This member Add</button></div>
        </div>
        <div id="rederChart">
          <members-chart :chartData="chartData"></members-chart>
        </div>
        
      </div>
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
        groupName: '',
        user:'',
        userNum: [],
        count:0,
        chartData: {},
        mot:[],
        man:[],
        des:[],
        com:[],
        sys:[]
    }
  },
  components: {
    membersChart
  },
  created () {
   this.fillData()
  },
  mounted: function() {
    //localStorage.setItem('memberName',JSON.stringify(this.user))
    },
  methods: {
    addData: function() {
        firebase.database().ref("/users/group/" + this.groupName).set({
                  user1: this.userNum[0] || '',
                  user2: this.userNum[1] || '',
                  user3: this.userNum[2] || '',
                  user4: this.userNum[3] || '',
                  user5: this.userNum[4] || '',
                  user6: this.userNum[5] || '',
                  user7: this.userNum[6] || '',
                  user8: this.userNum[7] || '',
                  user9: this.userNum[8] || ''
      })
      alert('Make Group')  
    },
    research: function() {
      var getUsersPrf = firebase.database().ref('/users/userPrf/' + this.user)
      document.getElementById("resultName").innerText = this.user
      localStorage.setItem('memberName',JSON.stringify(this.user))
      getUsersPrf.on('value', function(snapshot) {
      document.getElementById('pic').src = snapshot.val().photo 
      document.getElementById("memberCom").innerText = snapshot.val().coment
      })
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
      this.fillData()
      },
    fillData() {
    this.chartData = {
      labels: ['Motivation', 'design', 'Management', 'Communication', 'System'],
            datasets: [
            {
              label: this.userNum[0] || '',
                  fillColor: "#FBB03B",
                  strokeColor: "#FBB03B",
                  pointColor: "#FBB03B",
                  pointStrokeColor: "#FBB03B",
                  pointHighlightFill: "#FBB03B",
                  pointHighlightStroke: "#FBB03B",
                    data: [this.mot[0] || 0, this.des[0] || 0, this.man[0] || 0, this.com[0] || 0, this.sys[0] || 0]
            },
            {
              label: this.userNum[1] || '',
                  fillColor: "#FBB03B",
                  strokeColor: "#FBB03B",
                  pointColor: "#FBB03B",
                  pointStrokeColor: "#FBB03B",
                  pointHighlightFill: "#FBB03B",
                  pointHighlightStroke: "#FBB03B",
                  data: [this.mot[1] || 0, this.des[1] || 0, this.man[1] || 0, this.com[1] || 0, this.sys[1] || 0]
            }
          ]
        }
      },
    add: function () {
    var useuse = JSON.parse(localStorage.getItem('memberName'))
    this.userNum[this.count] = useuse
    this.count = this.count + 1
  }
  }
}

</script>

<style>
#group {
  font-size: 15px;
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
  margin-top: 10%;
  display: flex;
}

#memPrf {
flex: 1;
}
#rederChart {
flex: 1;
}

#addMember {
  margin-top: 50px;
}


</style>