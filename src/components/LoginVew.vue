<template>
  <div id="loginview">
    
    <div id="loginLoading" v-show="loading">
      <img src="../assets/loading1.gif" >
    </div>
    <div id="loginLadingTrue" v-show="!loading">
    <div id="loginVar">
      <p id="loginVarP">
        SkillWeb
</p>
    </div>
    <div id="loginPic">
    <img src="../assets/groupwork.png">
    </div>

    <div id="LoginViewloginmessage">
      <p id="LoginViewloginmessageP1">グループ編成を支援します</p>
      <p id="LoginViewloginmessageP2">スキルを可視化することによってよりよく</p>
      </div>
    <div id="LoginViewloginbutton">
    <section @click="logingoogle2">
      <p>Login</p>
    </section>
    <div id="LoginViewloginbutton2">
      <a href="#sectionLoginview">
      <img src="../assets/loginyazirusi.png">
      </a>
    </div>
    </div>
    <div id="sectionLoginview">
    </div>
    <div class="section1" >
      <div class="section11">
        <img src="../assets/gamenzu.png">
        </div>
        <div class="section12">
          <p class="loginH1">
            1. 説明
            </p>
          <p>aaaaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaa
          </p>
        </div>
    </div>
    <div class="section1">
      <div class="section12">
          <p class="loginH1">
            1. 説明
            </p>
          <p>aaaaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaa
          </p>
        </div>
      <div class="section11">
        <img src="../assets/gamenzu.png">
        </div>
        
    </div>
    <div class="section1">
      <div class="section11">
        <img src="../assets/gamenzu.png">
        </div>
        <div class="section12">
          <p class="loginH1">
            1. 説明
            </p>
          <p>aaaaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaa
          </p>
        </div>
    </div>
    <div id="footer">
      <p>copyright kousuke tanaka</p>
    </div>

    </div>
  </div>
</template>

<script>
import router from '../router'

var user;
var userComent;
var token;
var userName;
var photoURL;

export default {
  name: 'LoginVew',
  data () {
    return {
        userName: '',
        photoURL: '',
        hantei: 0,
        loading: true,
　　　　　
    }
    },
    watch: {
      userName: {
        handler: function() {
        localStorage.setItem('userName',JSON.stringify(this.userName));
      },
      photoURL: {
        handler2: function() {
          
          //localStorage.setItem('photoURL',JSON.stringify(this.photoURL));
        }
      },
      deep: true 
      }
    },
    beforeCreate () {
      this.hantei = 0;
      
      firebase.auth().onAuthStateChanged((user) => {
       if(user){  
        this.userName = user.displayName;
        localStorage.setItem('userName',JSON.stringify(this.userName));
        localStorage.setItem('count',1);
        localStorage.setItem('count2',1);
          router.push({ path: '/helloworld' });
          location.reload();
          }else {
            this.loading = false;
          }
      })
    },
    created (){
      
    },
    mounted: function() {
      firebase.auth().onAuthStateChanged((user) => {
       if(user){  
         this.loading = true;
          }else {
            this.loading = false;
          }
      })
      
},
    methods: {
      
      logingoogle2: function() {
        var promise = Promise.resolve();
        promise
        .then(this.logingoogle21())
        
        
        },
        logingoogle21: function() {
          var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithRedirect(provider);
        firebase.auth().getRedirectResult().then(
        result => {
          //alert("tintin1")
        user = result.user;
        
        //location.reload();
          //router.push({ path: '/helloworld' });
        //setTimeout(router.push({ path: '/helloworld' }), 10000)
      },
       error  => {alert("Login failure")}
        )
        },
       
      /*logingoogle: function(){
      //userComent = JSON.parse(localStorage.getItem('coment')) || []  
      var provider = new firebase.auth.GoogleAuthProvider();
      
      firebase.auth().signInWithPopup(provider).then(
        result => {
          user = result.user;
          this.userName = user.displayName;
          this.photoURL = user.photoURL;
            
            firebase.database().ref('/users/userPrf/' + this.userName).update({
            photo:this.photoURL,
          })
          localStorage.setItem('userName',JSON.stringify(this.userName));
          localStorage.setItem('count',1);
          localStorage.setItem('count2',1);
          
          //setTimeout(router.push({ path: '/helloworld' }), 10000)
          location.reload();
          router.push({ path: '/helloworld' });
          
          },
        error  => {alert("Login failure")})
        
      },*/
      /*
      loginfacebook () {
        var provider = new firebase.auth.FacebookAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function(result) {
  // This gives you a Facebook Access Token. You can use it to access the Facebook API.
  var token = result.credential.accessToken;
  // The signed-in user info.
  var user = result.user;
  // ...
}).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // The email of the user's account used.
  var email = error.email;
  // The firebase.auth.AuthCredential type that was used.
  var credential = error.credential;
  alert("error")
  // ...
});
      }*/
    }    
}

</script>

<style scoped>
@media (min-width: 700px){
 #loginview{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

#loginVar{
  width:100%;
  margin:0;
  padding: 0;
  height:80px;
  display:flex;
}

#loginVar img{
  height: 80px;
 
}

#loginVarP{
  font-size:40px;
  font-weight: bold;
  color:#696969;
  margin-top:20px;
  margin-left:30px;
  text-align: left;
}

#loginPic img {
  width: 100vw;
}
#loginPic {
  position: relative;
}

#LoginViewloginmessage{
position: relative;
top: -600px;
}
#LoginViewloginmessageP1{
  font-weight: bold;
  font-size: 50px;
  color:#ffffff;
}

#LoginViewloginbutton{
  position: relative;
top: -500px;
}

#LoginViewloginbutton2{
  position: relative;
top: 30px;
}

#LoginViewloginbutton2 img{
width:40px;
}

#LoginViewloginbutton2 img:hover{
opacity: 0.7;
}


#LoginViewloginbutton p{
  font-size: 30px;
  
}

#sectionLoginview{
  height:40px;
}

#LoginViewloginmessageP2{
  font-weight: bold;
  font-size: 30px;
  color:#ffffff;
}

section {
  margin:20px auto;
  width: 300px;
  height: 50px;
  background:#00A29A;
  color: aliceblue;
  border-radius: 10px;
}
section:hover {
  background: rgb(100, 200, 200)
}
p {
  margin: 0 auto;
  font-size: 20px;
  padding: 10px auto;
}

#loginLoading{
  margin: 100px auto;
}

#loginLoading img{
  margin: 100px auto;
    width: 30px;
  height:30px;
}

.section1{
  width: 70%;
  margin:0 auto 80px auto;
  display: flex;
}
.section11{
flex: 1;
}

.section11 img{
  max-width: 100%;
}
.section12{
  flex: 1;
}
.section12 img{
  max-width: 100%;
}
.loginH1{
  font-size: 35px;
  font-weight: bold;
  color:#00A29A;
}

#footer{
  width:100vw;
  height:200px;
  background: #696969;
  color: #fff;
}

#footer p{
margin-top:100px;
}

}

@media (max-width: 699px){
div {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
img {
  margin-top:65px;
  width: 100%;
}
section {
  margin:20px auto;
  width: 200px;
  background:#00A29A;
  color: aliceblue;
  border-radius: 20px;
}
section:hover {
  opacity: 0.5;
}
p {
  margin: 0 auto;
  font-size: 20px;
  padding: 10px auto;
}

#loginLoading{
  margin: 0 auto;
}
#loginLoading img{
  margin: 100px auto;
  
}



}



</style>




