<template>
  <div id="">
    <div id="loginPic">
    <img src="../assets/pentagon_icon.png">
    </div>
    <section @click="logingoogle2">
      <p>Login</p>
    </section>
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
        hantei: 0
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
         this.userName = user.displayName
        localStorage.setItem('userName',JSON.stringify(user.displayName));
        localStorage.setItem('count',1);
        localStorage.setItem('count2',1);
        firebase.database().ref('/users/userPrf/' + user.displayName).update({
            photo:user.photoURL,
        })
             
          router.push({ path: '/helloworld' });
          location.reload();
          }
      })
    },
    created (){
      
    },
    mounted: function() {
      
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




