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
        Since {{ time }} by {{ reader }}
        <div id="userComment22">
        {{ coment }}
        </div>
        </div>
      
    </div>
    </div>
  </div>
  <div id="chart2">
    <div id="rader2">
      <members-chart :chartData="chartData" :height="300"></members-chart>
    </div>
    <div id="line2">
      <h2>Member</h2>
        <div id="memberHyouzin" v-for="(item,index) in userName" @click="memberProfile(index)">
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
var motivation;
var management;
var design;
var communication;
var system;
var coment;
var time;

export default {
  name: 'Group',
  data () {
    return {

      groupName: '',
      userName:[],
      chartData: {},
        mot:[],
        man:[],
        des:[],
        com:[],
        sys:[],
        hantei:0,
        reader:'',
        time: '',
        coment: ''
     }
    },
    components: {
    membersChart
  },
  created: function(){
      this.fillData()
      this.groupName = JSON.parse(localStorage.getItem('groupName')) || []
      //localStorage.setItem('groupName',JSON.stringify(''))
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
      var i;
      for(i = 0; i < 10; i++){
          this.userName[i] = username[i]
        firebase.database().ref('/users/userData/' + username[i]).on('value', function(snapshot) {
        motivation = snapshot.val().motivation
        management= snapshot.val().management
        design = snapshot.val().design
        communication = snapshot.val().communication
        system = snapshot.val().system
        }) 
        this.man[i] = management
        this.mot[i] = motivation
        this.des[i] = design
        this.com[i] = communication
        this.sys[i] = system 
      }
      
      
  },
  mounted: function() {
    this.fillData()
    setTimeout(this.countHantei2, 1000);
  },
  methods: {
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

}
</style>
