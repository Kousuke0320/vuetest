<template>
  <div id="app">
    <input type="checkbox" class="check" id="checked">
      <label class="menu-btn" for="checked">
          <img src="./assets/menu.png"/>
          <!-- MENUボタン -->
      </label>
      <label class="close-menu" for="checked"></label>
      <!-- ドロワー -->
      <nav class="drawer-menu">
          <!-- ここはメニューのリスト -->
      <div id="login">
      <router-link to="/helloworld">
      <div id="homebutton">
      <img src="./assets/home.png">
      </div>
      </router-link>
      <router-link to="/config">
      <div id="confbutton">
      <img src="./assets/config.png">
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
      </nav>
    <!-- メインコンテンツ -->
      <div class="contents">
        <router-view/>    
      </div>
    
  </div>
</template>

<script>

//import login from './components/login'
import router from './router'

var userName;

export default {
  name: 'App',
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
/*
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
}*/



#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.contents {
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
}

/* チェックボックスオンの時 */
.check:checked ~ .contents {
    -webkit-transform: translateX(-300px);
    -ms-transform: translateX(-300px);
    transform: translateX(-300px);
    opacity: 0.1;
}

/* ドロワー */
.drawer-menu {
    position: fixed;
    top: 0;
    right: 0;
    width: 300px;
    height: 100%;
    background: #00A29A;
    -webkit-transform: perspective(500px) rotateY(-90deg);
    transform: perspective(500px) rotateY(-90deg);
    opacity: 0;
}
/* チェックボックスオンの時 */
.check:checked ~ .drawer-menu {
    -webkit-transform: none;
    -ms-transform: none;
    transform: none;
    opacity: 1;
}

/* チェックボックスを非表示 */
.check {
    display: none;
}

/* メニューボタン(label) */
.menu-btn {
    position: fixed;
    display: block;
    top: 40px;
    right: 40px;
    width: 40px;
    height: 40px;
    cursor: pointer;
    z-index: 3;
}

.menu-btn img{
  width: 40px;
  height: 40px;
}

/* コンテンツの閉じる。普段は非表示(label)*/
.close-menu {
    position: fixed;
    top: 0;
    right: 300px;
    width: 100%;
    height: 100%;
    visibility: hidden;
    opacity: 0;
}
/* チェックボックスオンの時 */
.check:checked ~ .close-menu {
    visibility: visible;
    opacity: 1;
    z-index: 3;
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
