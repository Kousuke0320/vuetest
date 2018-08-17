<template>
  <div id="config">
      <div id="setting">
      <div id="inf1">
        <h1>User Profile</h1>
        <div class="InfBox">
          <p>Gender</p>
        <select name="genderSel" v-model="gender">
        <option value="Man">Man</option>
        <option value="Women">Women</option>
        </select>
        </div>
        <div class="InfBox">
          <p>Country</p>
        <input type="text" class="inputText" v-model="country"/><br>
        </div>
        
        <div class="InfBox">
          <p>Language</p>
          <input type="text" class="inputText" v-model="language"/><br>
        </div>
        
        <div class="InfBox">
          <p>Occupation</p>
          <input type="text" class="inputText" v-model="occupation"/><br>
        </div>
        
        <div class="InfBox">
          <p>Major</p>
          <input type="text" class="inputText" v-model="major"/><br>
        </div>
        
        <div class="InfBox">
          <p>Coment</p>
          <textarea id="comconf" v-model="prfCom"></textarea><br>
          
        </div>
      </div>
      <div id="inf2">
        <h1>User Skills</h1>
        <div class="InfBox">
              <p>Motivation</p>
              <input type="range" class="infRange" name="mot" min="0" max="10" step="1" v-model="motivation"/>
              {{ motivation }}
              </div>
              <div class="InfBox">
              <p>Design</p>
              <input type="range" class="infRange" name="des" min="0" max="10" step="1" v-model="design"/>
              {{ design }}
              </div>
              <div class="InfBox">
              <p>Management</p>
              <input type="range" class="infRange" name="man" min="0" max="10" step="1" v-model="management"/>
              {{ management }}
              </div>
              <div class="InfBox">
              <p>Communication</p>
              <input type="range" class="infRange" name="com" min="0" max="10" step="1" v-model="communication"/>
              {{ communication }}
              </div>
              <div class="InfBox">
              <p>System</p>
              <input type="range" class="infRangefin" name="sys" min="0" max="10" step="1" v-model="system"/>
              {{ system }}<br>
              </div>
      </div>
      </div>
      <button @click="addData">Change Data</button>
  </div>
</template>

<script>
//import CommitChart from './CommitChart.vue'
import router from '../router'
/*
var dataBase = firebase.database()
var acsData = dataBase.ref('/users/userData/' + this.userName)
          */  
            
var manman
var comment
var motivation;
var management;
var design;
var communication;
var system;
var gender
var country
var language
var occupation
var major

export default {
  name: 'Config',
  data () {
    return {
      userName: '',
      photoURL: '',
      tintin: [],
      prfCom: '',
      motivation: 0,
      design: 0,
      management: 0,
      communication: 0,
      system: 0,
      gender:'',
      country:'',
      language:'',
      occupation:'',
      major:'',
     }
    },
    mounted: function() {
      this.userName = JSON.parse(localStorage.getItem('userName')) || []
      var skillGet = firebase.database().ref('/users/userData/' + this.userName)
      var starCountRef = firebase.database().ref('/users/userPrf/' + this.userName)
      //プロフィール画像をセットする
      starCountRef.on('value', function(snapshot) {
      comment = snapshot.val().coment
      gender = snapshot.val().gender
      country = snapshot.val().country
      language = snapshot.val().language
      occupation = snapshot.val().occupation
      major = snapshot.val().major
      })
      this.prfCom = comment
      this.gender = gender
      this.country = country
      this.language = language
      this.occupation = occupation
      this.major = major
      firebase.database().ref('/users/userData/' + this.userName).on('value', function(snapshot) {
        motivation = snapshot.val().motivation
        management= snapshot.val().management
        design = snapshot.val().design
        communication = snapshot.val().communication
        system = snapshot.val().system
        })
        this.motivation = motivation
        this.management = management
        this.design = design
        this.communication = communication
        this.system = system
    },
    methods: {
        /*saveData: function() {
            firebase.database().ref('/users/userData/' + this.userName).set({
                motivation: this.motivation,
                design: this.design,
                management: this.management,
                communication:this.communication,
                system: this.system
                })
                //router.push({ path: '/helloworld' })
        
        },*/
        addData: function() {
          firebase.database().ref('/users/userPrf/' + this.userName).update({
            gender:this.gender,
            country:this.country,
            language:this.language,
            occupation:this.occupation,
            major:this.major,
            coment:this.prfCom
          })
          firebase.database().ref('/users/userData/' + this.userName).set({
                motivation: this.motivation,
                design: this.design,
                management: this.management,
                communication:this.communication,
                system: this.system
                })
          //localStorage.setItem('coment',JSON.stringify(this.prfCom))
          alert("Update Data")
        },
        logout: function() {

        }
    },
}
</script>

<style scoped="scoped">
@media (min-width:700px) {

#config {
  margin:0;
  
}

#term {
    margin-top: 0px;
}

#setting {
margin-top: 40px; 
   
/*display: flex;*/
}

#inf1 {
/*flex: 1;*/
width: 80%;
margin: 0 auto;
background: #f5f5f5;
}

#picA img {
    height: 200px;
    width: 200px;
    border-radius: 50%;
}

#inf2 {
/*flex: 1;*/
width: 80%;
margin: 20px auto;
background: #f5f5f5;
}
#comconf {
  margin:0 auto;
  margin-bottom: 30px;
  width:80%;
  height: 10vh;
  border:none;
　background:none;
  background-color: #ffffff;
  color:#696969;
  font-size:15px;
}

p {
  margin:5px;
  font-size:25px;
}

.InfBox {
  margin-top:30px;
  width:80%;
  margin-left: 20%;
  text-align: left;
  font-size:15px;
}

input {
  height: 30px;
  width:80%;
  font-size:15px;
}

button {
  position: relative;
  background-color: #00A29A;
  top:20px;
  bottom: 10px;
  left:0;
  width: 20vw;
  height: 40px;
  color: aliceblue;
  border-radius: 5px;
  font-size: 15px;
}

.inputText {
  border:none;
　background:none;
  background-color: #ffffff;
  color:#696969;
}

select {
  height: 30px;
  width:80%;
  border:none;
  background-color: #ffffff;
  color:#696969;
  font-size:15px;
}

.infRange {
  width:70%;
  border:none;
　background:none;
  background-color: #ffffff;
  color:#696969;
}

.infRangefin {
  width:70%;
  margin-bottom: 30px;
  border:none;
　background:none;
  background-color: #ffffff;
  color:#313131;
}


h1{
  color:#00A29A;
  padding-top:30px;
}

}

@media (max-width: 699px){
  #config {
  margin:0;
  font-size: 15px;
}

#term {
    margin-top: 0px;
}

#setting {
margin-top: 40px; 
   
/*display: flex;*/
}

#inf1 {
/*flex: 1;*/
width: 80%;
margin: 0 auto;
background: #f5f5f5;
}

#picA img {
    height: 200px;
    width: 200px;
    border-radius: 50%;
}

#inf2 {
/*flex: 1;*/
width: 80%;
margin: 20px auto;
background: #f5f5f5;
}
#comconf {
  margin:0 auto;
  margin-bottom: 30px;
  width:80%;
  height: 10vh;
  border:none;
　background:none;
  background-color: #ffffff;
  color:#696969;
  font-size:15px;
}

p {
  margin:5px;
  font-size:20px;
}

.InfBox {
  margin-top:30px;
  width:80%;
  margin-left: 20%;
  text-align: left;
  font-size:15px;
}

input {
  height: 30px;
  width:80%;
  font-size:15px;
}

button {
  position: relative;
  background-color: #00A29A;
  top:20px;
  bottom: 10px;
  left:0;
  width: 50vw;
  height: 40px;
  color: aliceblue;
  border-radius: 5px;
  font-size: 15px;
}

.inputText {
  border:none;
　background:none;
  background-color: #ffffff;
  color:#696969;
}

select {
  height: 30px;
  width:80%;
  border:none;
  background-color: #ffffff;
  color:#696969;
  font-size:15px;
}

.infRange {
  width:70%;
  border:none;
　background:none;
  background-color: #ffffff;
  color:#696969;
}

.infRangefin {
  width:70%;
  margin-bottom: 30px;
  border:none;
　background:none;
  background-color: #ffffff;
  color:#313131;
}


h1{
  color:#00A29A;
  padding-top:30px;
}

}

</style>