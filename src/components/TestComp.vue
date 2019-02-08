<template>
<div id="test-comp">
  <h2>Chat Room</h2>
    <!-- リスト -->
    <div id="resultMessage">
        <div id="resultMessage2" v-for="item in messagelist">
          <img id="messageURL" v-bind:src="item.photoURL">
          <div id="resultMessage3">
          <div id="messageName"> {{item.name}} </div>
          <div id="messageMessage">{{item.message}}</div>
           </div>
           </div>
    </div>
    <div id="sousinbox">
    <!-- メッセージの入力欄 -->
        <div id="sousin1">
    <textarea id="nameInput" v-model="message"></textarea>
        </div>
    <!-- ボタン類 -->
    <div id="sousin2">
      <img src="../assets/sousin2.png"  @click="sendMessage" />
    </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'testComp',
    data () {
      return {
        messagelist: [],     // 最新状態はここにコピーされる
        name: '',     // 名前
        message: '',
        groupName:'',
        photoURL:''
          // 送信メッセージ
      }
    },
    created () {
      //this.listen();
      this.name = JSON.parse(localStorage.getItem('userName')) || []
      this.groupName = JSON.parse(localStorage.getItem('groupName')) || []
      this.listen();
    },
    mounted: function() {
      //this.listen();
      
      this.listen();
      firebase.auth().onAuthStateChanged((user) => {
      if(user){
        this.photoURL = user.photoURL;
      }
      })
      var obj = document.getElementById("resultMessage");
obj.scrollTop = obj.scrollHeight;
    },/*
    watch: {
      messagelist: {
        handler: function() { 
          this.listen()
        }
      },
 
    },*/
    methods: {
      // データベースの変更を購読、最新状態をlistにコピーする
      listen () {
        firebase.database().ref('/myBoard/' + this.groupName).on('value', snapshot => { // eslint-disable-line
          if (snapshot) {
            const rootList = snapshot.val();
            let list = [];
            Object.keys(rootList).forEach((val, key) => {
              rootList[val].id = val;
              list.push(rootList[val]);
            })
            this.messagelist = list;
          }
        })
      },
      sendMessage () {
        // 空欄の場合は実行しない
        if (!this.name || !this.message) return
        // 送信
        console.log(this.messagelist)
        firebase.database().ref('/myBoard/' + this.groupName).push({
          photoURL:this.photoURL,
          name: this.name,
          message: this.message
        })
        // 送信後inputを空にする
        this.message = ''
        this.listen()
      var ob = document.getElementById("resultMessage");
      ob.scrollTop = ob.scrollHeight;
      }
    }
  }
</script>

<style>
#test-comp{
  width: 90%;
  margin: 0 auto;
}

#test-comp button{
  background-color: #00A29A;
  width: 50%;
  height: 40px;
  color: aliceblue;
  border-radius: 5px;
  font-size: 15px;
  border-color: #00A29A;
  margin: 5px auto;
}

#test-comp h2{
  font-weight: bold;
}

#resultMessage {
  height:35vh;
  text-align: left;
  overflow: scroll;
  background: rgb(240,240,240);
  
}
#resultMessage2{
  display: flex;
  /*height:40px;*/

}
#sousinbox {
  margin:5px auto;
  width:90%;
  display:flex;
}


#sousin1{
  flex:6;
}

#sousin2{
flex:1;
}


#sousin2 img{
  margin:10px auto auto 0;
  width:30px;
}


#nameInput{
  margin:5px auto;
  background-color: #ffffff;
  color:#696969;
  width:90%;
  height:30px;
}

#messageURL{
  width: 30px;
  height: 30px;
  border-radius: 50%;
}
#resultMessage3{
display: flex;
flex-direction: column;
margin-bottom: 10px;
}

#messageName{
  margin:0 20px;
  height:30px;
}

#messageMessage{
  font-weight: normal;
  margin: 0 20px;
  width:80%;
  word-break: break-all;
}

</style>