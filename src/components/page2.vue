<template>
  <div id="group">
    <div id="groupName">
      <input type="text" v-model="groupName"/><br>
      <input type="submit" value="Add Group" @click="addData"/><br>
      <input type="search" v-model="user"/><br>
      <input type="submit" value="research" @click="research"/><br>
      <div id="member">
        <div id="aaaa">
          <img src="" id="pic"/>
        </div>
        <div id="resultName">

        </div>
        <div id="memberCom">

        </div>
      </div>
    </div>
  </div>
</template>

<script>

var tintin;

export default {
  name: 'page2',
  data () {
    return {
        groupName: '',
        user:'',
        user1:'',
        user2:'',
        user3:'',
        user4:'',
        user5:'',
        user6:'',
        user7:'',
        user8:'',
        user9:'',
        user10:''
    }
  },
  mounted: function() {
    },
  methods: {
    addData: function() {
      firebase.database().ref("/users/group/" + this.groupName).set({
        user1:this.user1,
        user2:this.user2,
        user3:this.user3,
        user4:this.user4,
        user5:this.user5,
        user6:this.user6,
        user7:this.user7,
        user8:this.user8,
        user9:this.user9,
        user10:this.user10
      })
    },
    research: function() {
      var starCountRef = firebase.database().ref('/users/userPrf/' + this.user);
      starCountRef.on('value', function(snapshot) {
      document.getElementById('pic').src = snapshot.val().photo 
      document.getElementById("memberCom").innerText = snapshot.val().coment
      })
      document.getElementById("resultName").innerText = this.user
    }
  },
  computed: {
    remaining: function() {
                }
            }
}

</script>

<style>
#group {
  font-size: 15px;
}

#groupName {
  width: 40%;
}

#pic {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}

#member {
  margin-top: 10%;
}

</style>