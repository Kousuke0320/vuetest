<template>
  <div id="">
    <div id="loginPic">
    <img src="../assets/pentagon_icon.png">
    </div>
    <section @click="logingoogle">
      <p>Login</p>
    </section>
    <!--<section @click="loginfacebook">
      <p>Login</p>
    </section>-->
  </div>
</template>

<script>
import router from '../router'

var user;
var userComent;
export default {
  name: 'LoginVew',
  data () {
    return {
        userName: '',
        photoURL: ''
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
    mounted: function() {
      this.userName = JSON.parse(localStorage.getItem('userName')) || [];
      this.photoURL = JSON.parse(localStorage.getItem('photoURL')) || [];
    },
    methods: {
      logingoogle: function(){
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
        error  => {alert("ログインに失敗しました")})
        
      },
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
      }
    }    
}

</script>

<style scoped>
@media (min-width: 700px){
div {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
img {
  width: 700px;
}
section {
  margin:20px auto;
  width: 300px;
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

}



</style>




