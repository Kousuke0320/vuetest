<template>
  <div>
      <div id="term">
          <h1>Setting page</h1>
          </div>
      <div id="setting">
      <div id="inf1">
      </div>
      <div id="inf2">
        <form>
              <p>Motivation</p>
              <input type="range" name="mot" min="0" max="10" step="1" v-model="motivation"/>
              {{ motivation }}
              <p>Design</p>
              <input type="range" name="des" min="0" max="10" step="1" v-model="design"/>
              {{ design }}
              <p>Management</p>
              <input type="range" name="man" min="0" max="10" step="1" v-model="management"/>
              {{ management }}
              <p>Communication</p>
              <input type="range" name="com" min="0" max="10" step="1" v-model="communication"/>
              {{ communication }}
              <p>System</p>
              <input type="range" name="sys" min="0" max="10" step="1" v-model="system"/>
              {{ system }}<br>
              <input type="submit" value="changeData" @click="saveData" /><br>
          </form>
      </div>
      <div id="inf3">
        <textarea id="comconf" v-model="prfCom"></textarea>
          <button @click="addData"></button>
      </div>      
      
      </div>
  </div>
</template>

<script>
import CommitChart from './CommitChart.vue'
import router from '../router'
/*
var dataBase = firebase.database()
var acsData = dataBase.ref('/users/userData/' + this.userName)
          */  
            
var manman
var mot
var comment
var motivation;
var management;
var design;
var communication;
var system;

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
      system: 0
     }
    },
    mounted: function() {
      this.userName = JSON.parse(localStorage.getItem('userName')) || []
      var skillGet = firebase.database().ref('/users/userData/' + this.userName)
      var starCountRef = firebase.database().ref('/users/userPrf/' + this.userName)
      //プロフィール画像をセットする
      starCountRef.on('value', function(snapshot) {
      comment = snapshot.val().coment
      })
      this.prfCom = comment
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
        saveData: function() {
            firebase.database().ref('/users/userData/' + this.userName).set({
                motivation: this.motivation,
                design: this.design,
                management: this.management,
                communication:this.communication,
                system: this.system
                })
                //router.push({ path: '/helloworld' })
        },
        addData: function() {
          firebase.database().ref('/users/userPrf/' + this.userName).set({
            photo:manman,
            coment:this.prfCom
          })
          //localStorage.setItem('coment',JSON.stringify(this.prfCom))
        },
        logout: function() {

        }
    },
}
</script>

<style>
#term {
    margin-top: 0px;
}

#setting {
margin-top: 40px;    
display: flex;
}

#inf1 {
flex: 1;
}

#picA img {
    height: 200px;
    width: 200px;
    border-radius: 50%;
}

#inf2 {
flex: 1;
}
#comconf {
  margin:50px auto;
  width:80%;
  height: 10vh;
}

#inf3 {
flex: 1;
}

</style>