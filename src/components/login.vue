<template>
  <div id="login">
      <router-link to="/helloworld">
      <div id="homebutton">
      <img src="../assets/home.png">
      </div>
      </router-link>
      
    
      <router-link to="/config">
      <div id="confbutton">
      <img src="../assets/config.png">
      </div>
      </router-link>
      
    <router-link to="/page2" class="link">
    <div id="plus">
    <img src="./assets/plus.png">
    </div></router-link><br>
    
    <div id="groupNameHyouzi"> 
        <div id="GroupTantai" v-for="(item, index) in list" @click="memberKakunin(index)">
          {{item.Group}}</div><br>
        </div>
  </div>
</template>

<script>
import router from '../router'

//var userName;

export default {
  name: 'login',
  data () {
    return {
      userName: '',
      list:[],
      Group:''
    }
  },
  created () {
    this.userName = JSON.parse(localStorage.getItem('userName')) || []
    this.listen()
    },
    mounted: function() {
      localStorage.setItem('groupName',JSON.stringify(''))
    },
  methods: {
      // データベースの変更を購読、最新状態をlistにコピーする
      listen () {
        firebase.database().ref('/users/userGroup/' + this.userName).on('value', snapshot => { // eslint-disable-line
          if (snapshot) {
            const rootList = snapshot.val();
            let list = [];
            Object.keys(rootList).forEach((val, key) => {
              rootList[val].id = val;
              list.push(rootList[val]);
            })
            this.list = list;
          }
        })
      },
      memberKakunin (index) {
        var GroupName = this.list[index].Group
        localStorage.setItem('groupName',JSON.stringify(GroupName))
      router.push({ path: '/margin' })
      }
  }
}
</script>

<style>
#login {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.link {
  text-decoration: none;
  list-style: none;
  color:aliceblue;
}

#homebutton {
  width: 50%;
  margin:10px auto;
  margin-top:100px;
  
}

#homebutton img {
  max-width: 70%;
}

#homebutton img:hover{
  opacity: 0.5;
}

#confbutton {
  width: 50%;
  margin:10px auto;
  
}

#confbutton img {
  max-width: 70%;
}

#confbutton img:hover{
  opacity: 0.5;
}

#plus {
  width: 50%;
  margin:10px auto;
  
}

#plus img {
  max-width: 70%;
}

#plus img:hover{
  opacity: 0.5;
}

#groupNameHyouzi {
  margin:15px auto;
}

#GroupTantai {
  width: 60%;
  height: auto;
  background: #696969;
  color:#fff;
  margin:5px auto;
}

#GroupTantai:hover {
  opacity: 0.9;
}

</style>