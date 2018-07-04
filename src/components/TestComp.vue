<template>
<div id="testcomp">
  <h2>Chat Room</h2>
    <!-- リスト -->
    <div id="resultMessage">
      <ul>
        <li v-for="item in list">{{item.name}} / {{item.message}}</li>
      </ul>
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
    name: 'app',
    data () {
      return {
        list: [],     // 最新状態はここにコピーされる
        name: '',     // 名前
        message: '',  // 送信メッセージ
      }
    },
    created () {
      this.listen();
    },
    mounted: function() {
      this.name = JSON.parse(localStorage.getItem('userName')) || []
    },
    methods: {
      // データベースの変更を購読、最新状態をlistにコピーする
      listen () {
        firebase.database().ref('myBoard/').on('value', snapshot => { // eslint-disable-line
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
      sendMessage () {
        // 空欄の場合は実行しない
        if (!this.name || !this.message) return
        // 送信
        firebase.database().ref('myBoard/').push({
          name: this.name,
          message: this.message
        })
        // 送信後inputを空にする
        this.message = ''
      }
    }
  }
</script>

<style>
#resultMessage li {
  list-style: none;
}

#box {
  position: absolute;
  width: 50%;
  height:20%;
  top:75%;
  left:25%;
}
</style>