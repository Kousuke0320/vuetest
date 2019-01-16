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
          <div>
            <input type="text" class="inputText" v-model="userOccupation" />
          </div>
          <div>
            <button id="researchoccupation" @click="occupationResearch">reserach</button>
            </div>
            <div id="occupationMemberHyouzin" v-show="memberLoading">
              <div id="occupationyokonarabi1" >
                <div id="skillscount0">
                  <p>Name</p></div>
                <div id="occupationyokonarabi2" v-for="(item, index) in skillscount">
                <p id="skillscount1">{{ item }}</p>
                </div>
                </div> 
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
        <div class="makegroupbox">
        <p class="page2P">Number of people in group</p>
        <select name="genderSel" v-model="numberofpeople">
        <option value="2">2</option>
        <option value="3">3</option>
         <option value="4">4</option>
          <option value="5">5</option>
        </select>
        </div>
        <div class="makegroupbox" v-show="settingHasu">
          <p class="page2P">setting</p>
          </div>
         <div id="sortConsole" class="makegroupbox" v-show="sortConsole">
         <p class="page2P">Console</p>
          <div id="sortConsole1">
            <p id="sortConsole11">Team Number</p>
            <p id="sortConsole12">Team Score</p>
            <p id="sortConsole13">Team Member</p>
            </div>
          <div id="sortConsole2" v-for="(itemss) in consoleMember">
            <p id="sortConsole21">{{ itemss.number }}</p>
            <p id="sortConsole23">{{ itemss.console }}</p>
            <p id="sortConsole22">{{ itemss.userName }}</p>
            
            </div>
            
        </div>
        <button id="autopagesubmit" @click="autopagesubmit" v-show="beforeSort">sort by all skills</button><br>
       <button id="autopagesubmit2" @click="databaseSubmit" v-show="!beforeSort">Submit</button><br>
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
  name: 'auto',
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
        numberofpeople:0,
        fullOfSkills: [],
        memberFullOfSkills:[],
        key:[],
        valueList:[],
        sortMember1:[],
        team:[],
        teamConsole:[],
        sortConsole:false,
        teamStructure:[],
        consoleMember:[],
        settingHasu:false,
        beforeSort:true,
        numberTeam2:0
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
    databaseSubmit(){

      let hensu1 = 0;
      let hensu2 = 0;
      let hensu3 = 0;
      let hensu4 = 0;
      let hensu5 = 0;
      let hensu6 = 0;
      
        for(hensu2 = 0; hensu2 < this.numberTeam2; hensu2++){
              for(hensu3 = 0; hensu3 < this.numberofpeople; hensu3++){
                  if(hensu3 == 0){
                    this.groupName = this.userOccupation + this.consoleMember[hensu1].number ;
                    firebase.database().ref('/users/userGroup/' + this.team[hensu2][hensu3]).push({
                    Group:this.groupName
                  })
                  
               }else{
                 firebase.database().ref('/users/userGroup/' + this.team[hensu2][hensu3]).push({
                    Group:this.groupName
                  })
                }
                //////////////3人用//////////////////////////
                if(hensu3 == this.numberTeam2 - 1){
                  hensu5 = hensu4 + 1
                  hensu6 = hensu4 + 2
                  firebase.database().ref("/users/group/" + this.groupName).update({
                  user1: this.consoleMember[hensu4].userName || '',
                  user2: this.consoleMember[hensu5].userName || '',
                  user3: this.consoleMember[hensu6].userName || '',
      })
      firebase.database().ref("/users/groupskills/" + this.groupName).update({
                         skills1: this.skillscount[0],
                         skills2: this.skillscount[1],
                         skills3: this.skillscount[2],
                         skills4: this.skillscount[3],
                         skills5: this.skillscount[4],
                         })
      hensu4 = hensu4 + 3
                }
             hensu1++;
            }
          }
          
         
      /*
      let datai = 0;
      for(datai = 0; datai < this.memberList.length; datai++){
        firebase.database().ref('/users/userGroup/' + this.memberList[datai].User).push({
      Group:this.userOccupation
    })

    this.groupName = this.userOccupation + 

    firebase.database().ref("/users/group/" + this.groupName).update({
                  user1: this.userNum[0] || '',
                  user2: this.userNum[1] || '',
                  user3: this.userNum[2] || '',
                  user4: this.userNum[3] || '',
                  user5: this.userNum[4] || '',
      })

        firebase.database().ref("/users/groupskills/" + this.groupName).update({
                         skills1: this.skillscount[0],
                         skills2: this.skillscount[1],
                         skills3: this.skillscount[2],
                         skills4: this.skillscount[3],
                         skills5: this.skillscount[4],
                         })
      }
      alert('Make Group')  
      */

alert('Make Group')  
      



    },
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
      autopagesubmit(){
        let hosuu = 0;
        hosuu = this.memberList.length % this.numberofpeople;
        if(hosuu == 0){
          this.autopagesubmit2()
        }else{
          this.settingHasu = true
        }
      },
      autopagesubmit2: function(){
        let val = 0;
        for(val = 0; val < this.memberList.length; val++){
        
        this.fullOfSkills[val] = this.memberList[val].skill1 + this.memberList[val].skill2
         +this.memberList[val].skill3 + this.memberList[val].skill4
         +this.memberList[val].skill5 
        }
        console.log(this.fullOfSkills)
        let val2 = 0;
        let val3 = 0;
        let val4 = 0;
        let val5 = 0;
        let count = 0;
        let count2 =0;
        let key = 0;
        //this.valueList = this.fullOfSkills
        for(count = 0; count < this.memberList.length; count++){
        if(count == 0){
        for(val2 = 0; val2 < this.memberList.length; val2++){
          //val4 = parseInt(this.fullOfSkills[val2])
          val4 = this.fullOfSkills[val2]
          if(val2 == 0){
            this.memberFullOfSkills[count] = val4
            //this.memberFullOfSkillsName[count] = this.memberList.User[count]
          }else{
            if(val4 > this.memberFullOfSkills[count]){
              this.valueList[count2] = this.memberFullOfSkills[count]
              this.memberFullOfSkills[count] = val4
              key = val2
              count2++
            }else{
              this.valueList[count2] = val4
              count2++
            }
            if(val2 == this.memberList.length-1){
              this.key[count] = key
              //count++
              count2 = 0;
              
             for(val5 = 0; val5 < this.memberList.length; val5++){
                if(this.memberFullOfSkills[0] == this.fullOfSkills[val5]){
                  this.sortMember1[0] = this.memberList[val5].User
                }
              }
              console.log("最大値は" + this.memberFullOfSkills[0])
              
               //console.log("最大値は" + this.memberFullOfSkills[count])
              //console.log("valuelistは" + this.valueList)
              //console.log("valuelengthは" + this.valueList.length)
            }
          }
        }
        }else{
            for(val2 = 0; val2 < this.memberList.length; val2++){
          //val4 = parseInt(this.fullOfSkills[val2])
          val4 = this.valueList[val2]
          if(val2 == 0){
            this.memberFullOfSkills[count] = val4
            //this.memberFullOfSkillsName[count] = this.memberList[val2].User
          }else{
            if(val4 > this.memberFullOfSkills[count]){
              this.valueList[count2] = this.memberFullOfSkills[count]
              this.memberFullOfSkills[count] = val4
              //key = val2
              count2++
            }else{
              this.valueList[count2] = val4
              count2++
            }
            if(val2 == this.memberList.length-1){
             // this.key[count] = key
              //count++
              this.valueList[count2] = 0
              count2 = 0;
              
              for(val5 = 0; val5 < this.memberList.length; val5++){
                if(this.memberFullOfSkills[count] == this.fullOfSkills[val5]){
                  this.sortMember1[count] = this.memberList[val5].User
                }
              }
              console.log("最大値は"+ this.memberFullOfSkills[count])
              console.log("配列" + this.valueList)
              //console.log("最大値は" + this.memberFullOfSkills[count])
              //console.log("valuelistは" + this.valueList)
              //console.log("valuelengthは" + this.valueList.length)
              
            }
          }
        }      
        }
        }

          console.log(this.sortMember1[0])
          console.log(this.sortMember1[1])
          console.log(this.sortMember1[2])
          console.log(this.sortMember1[3])
          console.log(this.sortMember1[4])
          console.log(this.sortMember1[5])
          //console.log(this.sortMember1[6])
          //console.log(this.sortMember1[7])
          //console.log(this.sortMember1[8])
          
          ///////条件分岐はまだ////////////////////////////////
          let numberTeam = 0
          numberTeam =  this.sortMember1.length
          let val8 = 0
          val8 = numberTeam - 1
          var numberTeam2 = 0
          numberTeam2 = numberTeam / this.numberofpeople
          this.numberTeam2 = numberTeam2
          let numberTeam3 = 0
          numberTeam3 = numberTeam % this.numberofpeople

          let val7 = 0;
          let val9 = 0;
          let val10 = 0;
          
          for(val7 = 0;val7 < numberTeam2; val7++){
            let count3 = 0;
            let count4 = 0;
            this.team[val7] = []
            this.team[val7][val9] = this.sortMember1[val10]
            count3 = this.memberFullOfSkills[val10]
            val10++
            val9++
            this.team[val7][val9] = this.sortMember1[val8]
            count4 = this.memberFullOfSkills[val8]
            val8--
            val9 = 0;
            this.teamConsole[val7] = count3 + count4
          }
          console.log("/////////////")
          console.log(this.teamConsole[0])
          console.log(this.team[0][0])
          console.log(this.team[0][1])
          console.log("/////////////")
          console.log(this.teamConsole[1])
          console.log(this.team[1][0])
          console.log(this.team[1][1])
          console.log("/////////////")
          
          /*console.log(this.teamConsole[2])
          console.log(this.team[2][0])
          console.log(this.team[2][1])
          */
          let count5 = 0;
          let count6 = 0;
          let count7 = 0
          count7 = 2 * numberTeam2
          //let count8 = 0;
          let count9 = 0;
          let nokoriMemberNum = 0
          nokoriMemberNum = numberTeam - count7
          let nokoriMemberNum2 = []
          let nokoriMemberNum3 = []
          let valval = 0
          //3のときはnumberTeamは3
          //numberTeamはメンアーの総数
          //count7は2 * 3をしている
          //numberteam2はチーム数
          //nokorinumbernumは残りの人数
          console.log("残りメンバー数" + nokoriMemberNum)
          ////////////現在のチームの合計のそーと//////////////////////////////


          for(count5 = 0; count5 < nokoriMemberNum; count5++){
             
            if(count5 == 0){
              for(count6 = 0; count6 < nokoriMemberNum; count6++){
                ////合計のそーと
                if(count6 == 0){
                  nokoriMemberNum2[count5]=this.teamConsole[count6]  
                }else{
                  if(nokoriMemberNum2[count5] < this.teamConsole[count6]){
                    nokoriMemberNum3[count9] = nokoriMemberNum2[count5]
                    nokoriMemberNum2[count5] = this.teamConsole[count6]
                    count9++
                    // console.log("配列" + nokoriMemberNum3)
                  
                  }else{
                     nokoriMemberNum3[count9] = this.teamConsole[count6]
                     //console.log(nokoriMemberNum3[count9])
                     count9++
                     
                  }
                  if(count6 == nokoriMemberNum - 1){
                      console.log("チームの最大値はa"+ nokoriMemberNum2[count5])
                    console.log("配列" + nokoriMemberNum3)
                    count9 = 0
                  }

                } 
              }
            }else{
              for(count6 = 0; count6 < nokoriMemberNum; count6++){
                ////合計のそーと
                valval = nokoriMemberNum3[count6]
                if(count6 == 0){
                  nokoriMemberNum2[count5] = nokoriMemberNum3[0]  
                }else{
                  if(nokoriMemberNum2[count5] < valval){
                    nokoriMemberNum3[count9] = nokoriMemberNum2[count5]
                    nokoriMemberNum2[count5] = valval
                    count9++
                  }else{
                     nokoriMemberNum3[count9] = valval
                     count9++
                  }
                  if(count6 == nokoriMemberNum - 1){
                    console.log("残りメンバーの最大値は"+ nokoriMemberNum2[count5])
                    console.log("配列" + nokoriMemberNum3)
                    console.log("count9" + count9)
                    nokoriMemberNum3[count9] = 0
                    count9 = 0
                  }
                } 
              }
            }


            
          }
          ////////////////////////////////////////////////////////////
          //nokoriMemberNum2にチームが特典の多い順に集まっている
          //残りのメンバーの得点の低い順からチームに配属する
          //this.teamconsole チームの得点（ソート無し）
          //this.team[teamのアドレス][メンバー]
          //this.sortMember1[メンバーアドレス]に残りメンバーが入っている
          //nokoriMemberNumは残ってる
          //count7は2*チーム数


//3人のソートです
          let teamSort = 0;
          let teamSort2 = 0;
          let teamKey = 0;
          let teamKey2 = this.sortMember1.length - 1
          for(teamSort = 0;teamSort < nokoriMemberNum2.length; teamSort++){
            for(teamSort2 = 0;teamSort2 < nokoriMemberNum2.length; teamSort2++){
              if(this.teamConsole[teamSort] == nokoriMemberNum2[teamSort2]){
                teamKey = teamSort2
                this.team[teamKey][2] = this.sortMember1[teamKey2 - numberTeam2]
                this.teamConsole[teamSort] =  this.teamConsole[teamSort] + this.memberFullOfSkills[teamKey2 - numberTeam2]
                console.log(this.team[teamKey][2])
                teamKey++
              console.log(teamKey2 - numberTeam2)
              teamKey2--
              
              }
            }
          }


          //////////////出力用////////////////////////////////////

          let teamHyouzi = 0;
          let teamHyouzi2 = 0;
          //forzemi
          for(teamHyouzi = 0; teamHyouzi < numberTeam2; teamHyouzi++){
            for(teamHyouzi2 = 0;teamHyouzi2 < this.numberofpeople; teamHyouzi2++){
              console.log("TeamNumber" + " " + teamHyouzi)
              console.log("メンバー" + teamHyouzi2 + ":" + this.team[teamHyouzi][teamHyouzi2])
            }
            console.log("合計は" + this.teamConsole[teamHyouzi])
            //console.log
          }
          //////////////////////////////////////////////////////

          ////////チーム生成結果画面表示////////////////////


          let stuructureNum = 0;
          let stuructureNum2 = 0;
          let stuructureNum3 = 0;
          let stuructureNum4 = 0;
          //this.team[チームナンバー][メンバー]
          //numberTeam2はチーム数でありメンバー数ではない
          //this.sortMember1.length メンバーの数

          this.consoleMember = this.memberList
          //for(stuructureNum = 0; stuructureNum < this.sortMember1.length; stuructureNum++){
            for(stuructureNum2 = 0; stuructureNum2 < numberTeam2; stuructureNum2++){
              for(stuructureNum3 = 0; stuructureNum3 < this.numberofpeople; stuructureNum3++){
                  if(stuructureNum3 == 0){
                    this.consoleMember[stuructureNum].number = stuructureNum2 + 1;
                    this.consoleMember[stuructureNum].console = this.teamConsole[stuructureNum4];
                    stuructureNum4++
                  }else{
                    this.consoleMember[stuructureNum].number = "";
                    this.consoleMember[stuructureNum].console = "";
                  }
                  this.consoleMember[stuructureNum].userName = this.team[stuructureNum2][stuructureNum3]
                  console.log(this.consoleMember[stuructureNum])
                  //console.log(this.teamConsole)
                  stuructureNum++;
            }
          }


          this.sortConsole = true;
          this.beforeSort = false;
          
          //}
/*
          for(stuructureNum = 0; stuructureNum< numberTeam2; stuructureNum++){
            this.MemberHyouzi[stuructureNum].Number = stuructureNum;
            for(stuructureNum2 = 0;stuructureNum2 < numberTeam2; stuructureNum2++){
              
              this.MemberHyouzi[stuructureNum].Name = this.team[stuructureNum][stuructureNum2]
            }
          }
     */     
          

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

#auto {
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

#autopagesubmit2 {
    margin:20px auto;
    background-color: rgb(250,250,0);
    color: #696969;
    border-radius: 5px;
    font-size: 15px;
    width: 20vw;
  height: 40px;
  border-color:rgb(250,250,0);
  font-weight: bold;
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

#occupationmemberHyouzin{
  margin-top:30px;
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

#occupationyokonarabi1{
  display:flex;
}

#skillscount0{
flex:5;
}

#occupationyokonarabi2{
  flex:2;
  display: flex;
}

#skillscount1{
flex:1;
text-align:center;
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

#researchoccupation{
  margin:10px auto;
    background-color: #00A29A;
    color: aliceblue;
    border-radius: 5px;
    font-size: 15px;
    width: 20%;
  height: 30px;
}

#auto input{
  height: 30px;
  width:50%;
  font-size:15px;
}

#auto select {
  height: 30px;
  width:50%;
  border:none;
  background-color: #ffffff;
  color:#696969;
  font-size:15px;
}

#sortConsole{

}

#sortConsole1{
  display: flex;
  color:#00A29A;
}

#sortConsole11{
  flex: 1;
}
#sortConsole12{
  flex: 1;
}
#sortConsole13{
  flex: 1;
}

#sortConsole2{
  display: flex;
  
}

#sortConsole21{
  flex: 1;
}
#sortConsole22{
  flex: 1;
  
}

#sortConsole23{
  flex: 1;
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