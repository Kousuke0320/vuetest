<template>
<div>
  <input type="text" v-model="my_text">
  <button @click="addData"></button>
  <div id="chatText"></div>
</div>
</template>

<script>



export default {
  name: 'page1',
  data () {
    return {
        my_text: ''
    }
  },
  mounted: function() {
      firebase.database().ref("/my/chat/all").on("value", function(snapshot) { 
      //under code can
      document.getElementById("chatText").innerText = snapshot.val().text
      });
    },
  methods: {
    addData: function() {
      firebase.database().ref("/my/chat/all").set({title:"example", text:this.my_text})
        /*var starCountRef = firebase.database().ref('posts/' + postId + '/starCount');
          starCountRef.on('value', function(snapshot) {
          updateStarCount(postElement, snapshot.val());
      });*/
      var postId = firebase.database().ref("/my/chat/all").push().key;
      firebase.database().ref("/my/chat/all").on("value", function(snapshot ,postId) { 
      this.rev = snapshot.val().text
      })
    }
  },
  computed: {
    remaining: function() {
                }
            }
}

</script>

<style>

</style>