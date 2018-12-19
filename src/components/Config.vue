<template>
  <div id="config">
      <div id="setting">
        <div class="infff">
          <h1>User Occupation</h1>
        <div class="InfBox">
          <p>Add Occupation</p>
          <input type="text" class="inputText" v-model="userOccupation"/><br>
        </div>
        <button id="occButton" @click="addOcc">Set datas</button>
        </div>
      <div id="inf1">
        <div class="InfBox">
          <h1>User Profile</h1>
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
              <p>Communication</p>
              <input type="range" class="infRange" name="mot" min="0" max="10" step="1" v-model="communication"/>
              {{ communication }}
              </div>
              <div class="InfBox">
              <p>Visualization</p>
              <input type="range" class="infRange" name="des" min="0" max="10" step="1" v-model="visualization"/>
              {{ visualization }}
              </div>
              <div class="InfBox">
              <p>Analyze</p>
              <input type="range" class="infRange" name="man" min="0" max="10" step="1" v-model="analyze"/>
              {{ analyze }}
              </div>
              <div class="InfBox">
              <p>Technology</p>
              <input type="range" class="infRange" name="com" min="0" max="10" step="1" v-model="technology"/>
              {{ technology }}
              </div>
              <div class="InfBox">
              <p>Policy</p>
              <input type="range" class="infRangefin" name="sys" min="0" max="10" step="1" v-model="policy"/>
              {{ policy }}<br>
              </div>
      </div>
      <div class="infff">
        <h1>Design tools</h1>
        <div class="InfBox">
              <p>Illustrater</p>
              <input type="range" class="infRange" name="mot" min="0" max="10" step="1" v-model="illustrater"/>
              {{ illustrater }}
              </div>
              <div class="InfBox">
              <p>Photoshop</p>
              <input type="range" class="infRange" name="des" min="0" max="10" step="1" v-model="photoshop"/>
              {{ photoshop }}
              </div>
              <div class="InfBox">
              <p>XD</p>
              <input type="range" class="infRange" name="man" min="0" max="10" step="1" v-model="XD"/>
              {{ XD }}
              </div>
              <div class="InfBox">
              <p>3Dtools</p>
              <input type="range" class="infRange" name="com" min="0" max="10" step="1" v-model="Dtools"/>
              {{ Dtools }}
              </div>
              <div class="InfBox">
              <p>Cad</p>
              <input type="range" class="infRangefin" name="sys" min="0" max="10" step="1" v-model="cad"/>
              {{ cad }}<br>
              </div>
        </div>
        <div class="infff">
        <h1>System Skills</h1>
        <div class="InfBox">
              <p>HTML5</p>
              <input type="range" class="infRange" name="mot" min="0" max="10" step="1" v-model="html"/>
              {{ html }}
              </div>
              <div class="InfBox">
              <p>CSS3</p>
              <input type="range" class="infRange" name="des" min="0" max="10" step="1" v-model="css"/>
              {{ css }}
              </div>
              <div class="InfBox">
              <p>JavaScript</p>
              <input type="range" class="infRange" name="man" min="0" max="10" step="1" v-model="js"/>
              {{ js }}
              </div>
              <div class="InfBox">
              <p>iOS/Android</p>
              <input type="range" class="infRange" name="com" min="0" max="10" step="1" v-model="sm"/>
              {{ sm }}
              </div>
              <div class="InfBox">
              <p>Unity</p>
              <input type="range" class="infRangefin" name="sys" min="0" max="10" step="1" v-model="unity"/>
              {{ unity }}<br>
              </div>
        </div>
      <button @click="addData">Set data</button>
      </div>
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
/*
var motivation;
var management;
var design;
var communication;
var system;
*/
var visualization
var analyze
var technology
var policy
var communication
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
var gender
var country
var language
var occupation
var major

export default {
  name: 'Config',
  data () {
    return {
      user:'',
      userName: '',
      photoURL: '',
      tintin: [],
      prfCom: '',
      /*
      motivation: 0,
      design: 0,
      management: 0,
      communication: 0,
      system: 0,
      */
      illustrater: 0,
      photoshop: 0,
      XD: 0,
      Dtools: 0,
      cad: 0,
      html: 0,
      css: 0,
      js: 0,
      sm: 0,
      unity: 0,
      gender:'',
      country:'',
      language:'',
      occupation:'',
      major:'',
      userOccupation:'',
      visualization:0,
      analyze:0,
      technology:0,
      policy:0,
      communication: 0,
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
        /*
        motivation = snapshot.val().motivation
        management= snapshot.val().management
        design = snapshot.val().design
        communication = snapshot.val().communication
        system = snapshot.val().system
        */
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
        
        addOcc() {
          
          if(this.userOccupation == ""){
          }else{
             firebase.database().ref('/users/occupation/' + this.userOccupation).push({
               User:this.userName
                      })
                      alert("success")
          }
        },
        addData: function() {
          firebase.database().ref('/users/userPrf/' + this.userName).update({
            gender:this.gender,
            country:this.country,
            language:this.language,
            occupation:this.occupation,
            major:this.major,
            coment:this.prfCom
          })
          firebase.database().ref('/users/userData/' + this.userName).update({
                /*
                motivation: this.motivation,
                design: this.design,
                management: this.management,
                communication:this.communication,
                system: this.system,
                */
               communication:this.communication,
               visualization:this.visualization,
              analyze:this.analyze,
              technology:this.technology,
              policy:this.policy,
                illustrater: this.illustrater,
                photoshop: this.photoshop,
                XD: this.XD,
                Dtools: this.Dtools,
                cad: this.cad,
                html: this.html,
                css: this.css,
                js: this.js,
                sm: this.sm,
                unity: this.unity
                })
          //localStorage.setItem('coment',JSON.stringify(this.prfCom))
          alert("Update Data")
        },
        logout: function() {

        }
    },
}
</script>

<style >
@media (min-width:1080px) {

#config {
  margin:0;
  font-weight: bold;
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

#inf1 h1{
  
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

.infff {
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

#config p {
  margin:5px;
  font-size:25px;
  font-weight: bold;
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
  border-color: #00A29A;
}

#occButton{
  background-color: #00A29A;
  width: 50vw;
  height: 40px;
  color: aliceblue;
  border-radius: 5px;
  font-size: 15px;
  border-color: #00A29A;
  margin: 20px auto;
}


.inputText {
  border:none;
　background:none;
  background-color: #ffffff;
  color:#696969;
}

 #config select {
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


#config h1{
  color:#00A29A;
  padding-top:30px;
  font-weight: bold;
}

}

@media (max-width: 1079px){
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

.infff {
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

#config p {
  margin:5px;
  font-size:20px;
  font-weight: bold;
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
  border-color: #00A29A;
}

#occButton{
  background-color: #00A29A;
  width: 50vw;
  height: 40px;
  color: aliceblue;
  border-radius: 5px;
  font-size: 15px;
  border-color: #00A29A;
  margin: 20px auto;
}

.inputText {
  border:none;
　background:none;
  background-color: #ffffff;
  color:#696969;
}

 #config select {
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


#config h1{
  color:#00A29A;
  padding-top:30px;
  font-weight: bold;
}

}

</style>