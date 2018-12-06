<template>
<div id="test-comp">
  <h2>Chat Room</h2>
    <!-- リスト -->
    <div id="resultMessage">
        <div id="resultMessage2" v-for="item in messagelist">{{item.name}} / {{item.message}}</div>
    </div>
    <div id="box">
    <!-- メッセージの入力欄 -->
    <label for="nameInput">message</label>
    <input type="txt" id="nameInput" v-model="message">

    <!-- ボタン類 -->
    <div>
      <button type="button" class="btn btn-default" @click="sendMessage">
        submit
      </button>
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
        groupName:''
          // 送信メッセージ
      }
    },
    created () {
      this.listen();
      
    },
    mounted: function() {
      this.name = JSON.parse(localStorage.getItem('userName')) || []
      this.groupName = JSON.parse(localStorage.getItem('groupName')) || []
      this.listen();
    },
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
          name: this.name,
          message: this.message
        })
        // 送信後inputを空にする
        this.message = ''
        this.listen()
      
      }
    }
  }
</script>

<style>
#test-comp{
  width: 90%;
  margin: 0 auto;
}

#test-comp h2{
  font-weight: bold;
}

#resultMessage {
  height:35vh;
  text-align: left;
  overflow: scroll;
  background: aliceblue;
}

#box {
  margin:0 auto;
}
</style>