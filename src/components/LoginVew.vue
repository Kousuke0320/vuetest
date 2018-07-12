<template>
  <div id="">
    <div id="loginPic">
    <img src="../assets/pentagon_icon.png">
    </div>
    <section @click="login">
      <p>Login</p>
    </section>
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
      login: function(){
      //userComent = JSON.parse(localStorage.getItem('coment')) || []  
      var provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithPopup(provider).then(
        result => {
          user = result.user;
          this.userName = user.displayName;
          this.photoURL = user.photoURL;
          /*var accse = firebase.database().ref('/users/userPrf/' + this.userName)
          accse.on('value', function(snapshot) {
          userComent = snapshot.val().coment
          })*/
          //localStorage.setItem('userName',JSON.stringify(this.userName));
          firebase.database().ref('/users/userPrf/' + this.userName).update({
            photo:this.photoURL
          })

          var starCountRef = firebase.database().ref('/users/userPrf/' + this.userName);
          starCountRef.on('value', function(snapshot) {
          userComent = snapshot.val().coment
            })
            
            firebase.database().ref('/users/userPrf/' + this.userName).set({
            photo:this.photoURL,
            coment:userComent
          })
          
          //router.push({ path: '/helloworld' })
          },
        error  => {alert("ログインに失敗しました")})
      }
    }
}
</script>

<style scoped>
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
</style>




