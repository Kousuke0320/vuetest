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
        <div id="loginSub">
          <div id="gotohello" @click="check1()">
      <!--<router-link to="/helloworld">-->
      <div id="homebutton">
      <img src="./assets/home.png">
      </div>
      <div id="homebutton2">
        <div id="homebutton3">
        Home
        </div>
      </div>
      <!--</router-link>-->
          </div>
          <div id="gotoConfig" @click="check2()">
      <!--<router-link to="/config">-->
      <div id="confbutton">
      <img src="./assets/config.png">
      </div>
      <div id="configbutton2">
        <div id="configbutton3">
        Setting
        </div>
      <!--</router-link>-->
      </div>
          </div>
      <div id="gotoPage2" @click="check3()">
    <!--<router-link to="/page2" class="link">-->
    <div id="plus">
    <img src="./assets/plus.png">
    </div>
    <div id="plus2">
      <div id="plus3">
      Make Group
      </div>
    </div>
    <!--</router-link>--><br>
    </div>
    </div>
    <div id="groupNameHyouzi">
      <div id="grouptitle">
        Group
        </div> 
        <div id="GroupTantai" v-for="(item, index) in list" @click="memberKakunin(index)">
          {{item.Group}}</div><br>
        </div>
        <div id="gotoLogout" @click="logout()">
      <!--<router-link to="/config">-->
      <div id="logoutbutton">
      <img src="./assets/logout.png">
      </div>
      <div id="logoutbutton2">
        <div id="logoutbutton3">
        Logout
        </div>
      <!--</router-link>-->
      </div>
          </div>

           <div id="testzikken" @click="test()">
      <!--<router-link to="/config">-->
      <div id="testbutton">
      <img src="./assets/test.png">
      </div>
      <div id="testbutton2">
        <div id="testbutton3">
        Test
        </div>
      <!--</router-link>-->
      </div>
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
    test() {
        router.push({ path: '/test' })
      setTimeout(this.check, 250)
    },
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
        localStorage.setItem('Index', index);
        var GroupName = this.list[index].Group
        localStorage.setItem('groupName',JSON.stringify(GroupName))
        localStorage.setItem('groupBack',1)
      router.push({ path: '/margin' })
      setTimeout(this.check, 250)
      },
      check () {
        document.getElementById("checked").checked = false;
      },
      check1 () {
        router.push({ path: '/helloworld' })
        this.check();
        setTimeout(this.check, 250)
        //document.getElementById("checked").checked = false; 
      },
      check2 () {
        router.push({ path: '/config' })
      setTimeout(this.check, 250)
      //this.check();
      },
      check3 () {
        router.push({ path: '/selectGroup' })
        setTimeout(this.check, 250) 
        
      },
      logout() {
        firebase.auth().signOut().then(function() {
          localStorage.setItem('userName'," ")
          router.push({ path: '/' })
          location.reload()
          setTimeout(this.check, 250)
          
  // Sign-out successful.
        }).catch(function(error) {
    // An error happened.
});
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

@media (min-width: 1080px){
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-weight: bold;
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
    overflow:scroll;
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
    animation-name: animation-haniwaman;
  animation-duration: 0.05s;
  animation-timing-function: linear;
  animation-delay: 0s;
  animation-iteration-count: 1;
  animation-direction: normal;
}

@keyframes animation-haniwaman {
  0% {width: 0px;}
  100% {width: 300px;}
}

/* チェックボックスを非表示 */
.check {
    display: none;
}

/* メニューボタン(label) */
.menu-btn {
    position: fixed;
    display: block;
    top: 25px;
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
      animation-name: animation-haniwaman2;
  animation-duration: 0.3s;
  animation-timing-function: linear;
  animation-delay: 0s;
  animation-iteration-count: 1;
  animation-direction: normal;
}

@keyframes animation-haniwaman2 {
  0% {width: 300px;}
  100% {width: 0px;}
}

.check:checked ~ .menu-btn{
  display:none;
}

#loginSub {
margin-top:80px;

}

#gotohello {
  width:60%;
  margin: 10px auto;
  display: flex;
}

#homebutton {
  flex: 1;
}

#homebutton img {
  max-width:80%;
}

#homebutton img:hover{
  opacity: 0.5;
}

#homebutton2 {
  flex: 3;
  font-size: 15px;
   display: -webkit-flex;
 display: flex;
 -webkit-align-items: center; /* 縦方向中央揃え（Safari用） */
 align-items: center; /* 縦方向中央揃え */
 -webkit-justify-content: left; /* 横方向中央揃え（Safari用） */
 justify-content: left; /* 横方向中央揃え */
  border-bottom:solid 1px rgb(100,100,100); 
}

#homebutton3 {
font-size: 18px;
  color:rgb(75,75,75);
  margin-left:10px;
}

#gotoConfig {
  width:60%;
  margin: 10px auto;
  display: flex;
}

#confbutton {
  flex: 1;
}

#confbutton img {
  max-width:80%;
}

#confbutton img:hover{
  opacity: 0.5;
}

#configbutton2 {
  flex: 3;
  
 display: -webkit-flex;
 display: flex;
 -webkit-align-items: center; /* 縦方向中央揃え（Safari用） */
 align-items: center; /* 縦方向中央揃え */
 -webkit-justify-content: left; /* 横方向中央揃え（Safari用） */
 justify-content: left; /* 横方向中央揃え */
 border-bottom:solid 1px rgb(100,100,100); 
}

#configbutton3 {
  font-size: 18px;
  color:rgb(75,75,75);
  text-align: left;
  margin-left: 10px;
}

#gotoPage2 {
  width:60%;
  margin: 10px auto;
  display: flex;
  
}

#plus {
  flex: 1;
}

#plus img {
  max-width:80%;
}

#plus img:hover{
  opacity: 0.5;
}

#plus2 {
  flex: 3;
  display: -webkit-flex;
 display: flex;
 -webkit-align-items: center; /* 縦方向中央揃え（Safari用） */
 align-items: center; /* 縦方向中央揃え */
 -webkit-justify-content: left; /* 横方向中央揃え（Safari用） */
 justify-content: left; /* 横方向中央揃え */
 border-bottom:solid 1px rgb(100,100,100); 
  }

#plus3 {
  font-size: 18px;
  color:rgb(75,75,75);
  margin-left: 10px;
  text-align: left;

}

#groupNameHyouzi {
  margin:30px auto;
}

#GroupTantai {
  width: 60%;
  height: auto;
  background: rgb(85,85,85);
  color:#fff;
  margin:5px auto;
  
}

#GroupTantai:hover {
  opacity: 0.5;
}

#grouptitle{
  text-align: center;
  font-size: 18px;
  color:rgb(75,75,75);
}

#gotohello:hover{
  opacity: 0.5;
}

#gotoConfig:hover {
  opacity: 0.5;
}

#gotoPage2:hover {
  opacity: 0.5;
}

#gotoLogout:hover {
  opacity: 0.5;
}

#gotoLogout {
width:60%;
  margin: 10px auto;
  display: flex;
}


#logoutbutton {
flex: 1;
}

#logoutbutton img {
max-width:80%;
}


#logoutbutton2 {
 flex: 3;
 display: -webkit-flex;
 display: flex;
 -webkit-align-items: center; /* 縦方向中央揃え（Safari用） */
 align-items: center; /* 縦方向中央揃え */
 -webkit-justify-content: left; /* 横方向中央揃え（Safari用） */
 justify-content: left; /* 横方向中央揃え */
 border-bottom:solid 1px rgb(100,100,100); 
}

#logoutbutton3 {
font-size: 18px;
  color:rgb(75,75,75);
  text-align: left;
  margin-left: 10px;
}

#testzikken:hover {
  opacity: 0.5;
}

#testzikken {
width:60%;
  margin: 10px auto;
  display: flex;
}


#testbutton {
flex: 1;
}

#testbutton img {
max-width:80%;
}


#testbutton2 {
 flex: 3;
 display: -webkit-flex;
 display: flex;
 -webkit-align-items: center; /* 縦方向中央揃え（Safari用） */
 align-items: center; /* 縦方向中央揃え */
 -webkit-justify-content: left; /* 横方向中央揃え（Safari用） */
 justify-content: left; /* 横方向中央揃え */
 border-bottom:solid 1px rgb(100,100,100); 
}

#testbutton3 {
font-size: 18px;
  color:rgb(75,75,75);
  text-align: left;
  margin-left: 10px;
}


  
}

@media (max-width: 1079px){
  #app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-weight: bold;
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
    width: 250px;
    height: 100%;
    overflow:scroll;
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
    animation-name: animation-haniwaman2;
    animation-duration: 0.3s;
    animation-timing-function: linear;
    animation-delay: 0s;
    animation-iteration-count: 1;
    animation-direction: normal;
}

@keyframes animation-haniwaman2 {
  0% {width: 0px;}
  100% {width: 250px;}
}


/* チェックボックスを非表示 */
.check {
    display: none;
}

/* メニューボタン(label) */
.menu-btn {
    position: fixed;
    display: block;
    top: 20px;
    right: 20px;
    width: 20px;
    height: 20px;
    cursor: pointer;
    z-index: 3;
}

.menu-btn img{
  width: 20px;
  height: 20px;
}

/* コンテンツの閉じる。普段は非表示(label)*/
.close-menu {
    position: fixed;
    top: 0;
    right: 250px;
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


#loginSub {
margin-top:60px;

}


#groupNameHyouzi {
  margin:30px auto;
}

#GroupTantai {
  max-width: 150px;
  height: auto;
  background: rgb(85,85,85);
  color:#fff;
  margin:5px auto;
  
}

#GroupTantai:hover {
  opacity: 0.9;
}

#gotohello {
  width:60%;
  margin: 10px auto;
  display: flex;
}

#gotohello:hover{
  opacity: 0.5;
}

#homebutton {
  flex: 1;
}

#homebutton img {
  max-width:30px;
}


#homebutton2 {
  flex: 3;
  font-size: 15px;
   display: -webkit-flex;
 display: flex;
 -webkit-align-items: center; /* 縦方向中央揃え（Safari用） */
 align-items: center; /* 縦方向中央揃え */
 -webkit-justify-content: left; /* 横方向中央揃え（Safari用） */
 justify-content: left; /* 横方向中央揃え */
  border-bottom:solid 1px rgb(100,100,100); 
}

#homebutton3 {
font-size: 18px;
  color:rgb(75,75,75);
  margin-left:10px;
}

#gotoLogout {
width:60%;
  margin: 10px auto;
  display: flex;
}


#logoutbutton {
flex: 1;
}

#logoutbutton img {
max-width:30px;
}


#logoutbutton2 {
 flex: 3;
 display: -webkit-flex;
 display: flex;
 -webkit-align-items: center; /* 縦方向中央揃え（Safari用） */
 align-items: center; /* 縦方向中央揃え */
 -webkit-justify-content: left; /* 横方向中央揃え（Safari用） */
 justify-content: left; /* 横方向中央揃え */
 border-bottom:solid 1px rgb(100,100,100); 
}

#logoutbutton3 {
font-size: 18px;
  color:rgb(75,75,75);
  text-align: left;
  margin-left: 10px;
}

#testzikken {
width:60%;
  margin: 10px auto;
  display: flex;
}


#testbutton {
flex: 1;
}

#testbutton img {
max-width:30px;
}


#testbutton2 {
 flex: 3;
 display: -webkit-flex;
 display: flex;
 -webkit-align-items: center; /* 縦方向中央揃え（Safari用） */
 align-items: center; /* 縦方向中央揃え */
 -webkit-justify-content: left; /* 横方向中央揃え（Safari用） */
 justify-content: left; /* 横方向中央揃え */
 border-bottom:solid 1px rgb(100,100,100); 
}

#testbutton3 {
font-size: 18px;
  color:rgb(75,75,75);
  text-align: left;
  margin-left: 10px;
}



#gotoConfig {
  width:60%;
  margin: 10px auto;
  display: flex;
}

#gotoConfig:hover {
  opacity: 0.5;
}

#gotoPage2:hover {
  opacity: 0.5;
}

#gotoLogout:hover {
  opacity: 0.5;
}



#confbutton {
  flex: 1;
}

#confbutton img {
  max-width:30px;
}


#configbutton2 {
  flex: 3;
 display: -webkit-flex;
 display: flex;
 -webkit-align-items: center; /* 縦方向中央揃え（Safari用） */
 align-items: center; /* 縦方向中央揃え */
 -webkit-justify-content: left; /* 横方向中央揃え（Safari用） */
 justify-content: left; /* 横方向中央揃え */
 border-bottom:solid 1px rgb(100,100,100); 
}

#configbutton3 {
  font-size: 18px;
  color:rgb(75,75,75);
  text-align: left;
  margin-left: 10px;
}

#gotoPage2 {
  width:60%;
  margin: 10px auto;
  display: flex;
  
}


#plus {
  flex: 1;
}

#plus img {
  max-width:30px;
}


#plus2 {
  flex: 3;
  display: -webkit-flex;
 display: flex;
 -webkit-align-items: center; /* 縦方向中央揃え（Safari用） */
 align-items: center; /* 縦方向中央揃え */
 -webkit-justify-content: left; /* 横方向中央揃え（Safari用） */
 justify-content: left; /* 横方向中央揃え */
 border-bottom:solid 1px rgb(100,100,100); 
  }

#plus3 {
  font-size: 18px;
  color:rgb(75,75,75);
  margin-left: 10px;
  text-align: left;

}
#grouptitle{
  text-align: center;
  color:rgb(75,75,75);
  font-size: 18px;
}

#logOut {
  margin-top: 80px;
}

.check:checked ~ .menu-btn{
  display:none;
}


}

</style>
