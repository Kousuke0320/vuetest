<template>
  <div>
      <div id="term">
          <h1>Setting page</h1>
          </div>
      <div id="setting">
      <div id="form">
          <div id="picA"><img src="user.photoURL" id="pic2"></div>
          <div id="prf">{{ userName }}</div>
          <textarea v-model="prfCom"></textarea>
          <button @click="addData"></button>
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
              <input type="submit" value="changeData" @click="saveData" />
          </form>
          <div @click="logout">logout</div>
      </div>
      <div id="chart">
          <commit-chart :height="300" ></commit-chart>
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
export default {
  name: 'Config',
  data () {
    return {
      userName: '',
      photoURL: '',
      tintin: [],
      prfCom: 'comment',
      motivation: 0,
      design: 0,
      management: 0,
      communication: 0,
      system: 0
     }
    },
    /*watch: {
      motivation: {
        change1: function() {
        localStorage.setItem('motivation',JSON.stringify(this.motivation))
        },
        deep: true
      },
      design: {
        change2: function() {
        localStorage.setItem('design',JSON.stringify(this.design))
        },
        deep: true
      },
      management: {
        change3: function() {
          localStorage.setItem('management',JSON.stringify(this.management))
        },
        deep: true
      },
      communication: {
        change4: function() {
          localStorage.setItem('communication',JSON.stringify(this.communication))
        },
        deep: true 
      },
      system: {
        change5: function() {
          localStorage.setItem('system',JSON.stringify(this.system))
        },
        deep: true 
      }
    },*/
    mounted: function() {
      this.userName = JSON.parse(localStorage.getItem('userName')) || []
      var skillGet = firebase.database().ref('/users/userData/' + this.userName)
      var starCountRef = firebase.database().ref('/users/userPrf/' + this.userName)
      //プロフィール画像をセットする
      starCountRef.on('value', function(snapshot) {
      document.getElementById('pic2').src = snapshot.val().photo
      manman = snapshot.val().photo
      })
      //スキルデータをゲットする
      skillGet.on('value', function(snapshot) {
        this.motivation = snapshot.val().motivation
        this.management = snapshot.val().management
        this.design = snapshot.val().design
        this.communication = snapshot.val().communication
        this.system = snapshot.val().system
      })
      
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
  components: {
    CommitChart
  }
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

#form {
flex: 1;
}

#picA img {
    height: 200px;
    width: 200px;
    border-radius: 50%;
}

#chart {
flex: 1;
}

</style>