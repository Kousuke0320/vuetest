<template>
<div id="testVue">
    <div class="testin1">
        <div class="testin1in">
        <p class="testinin">Q1.</p>
        <p>komyunike-syonnhaiikannzidesuka</p>
            </div>
            <div class="testAtai">
             <p class="testAtaiin1">非常にそう思う</p>
             <p class="testAtaiin2">そう思う</p>
             <p class="testAtaiin3">どちらでもない</p>
             <p class="testAtaiin4">そう思わない</p>
             <p class="testAtaiin5">全くそう思わない</p>   
            </div>
            <input type="range" class="infRange" name="mot" min="0" max="100" step="1" v-model="motivation"/> 
    
    </div>
    <div class="testin1">
        <div class="testin1in">
        <p class="testinin">Q2.</p>
        <p>komyunike-syonnhaiikannzidesuka</p>
            </div>
            <div class="testAtai">
             <p class="testAtaiin1">非常にそう思う</p>
             <p class="testAtaiin2">そう思う</p>
             <p class="testAtaiin3">どちらでもない</p>
             <p class="testAtaiin4">そう思わない</p>
             <p class="testAtaiin5">全くそう思わない</p>   
            </div>
            <input type="range" class="infRange" name="mot" min="0" max="100" step="1" v-model="motivation"/> 
    
    </div>
    <div class="testin1">
        <div class="testin1in">
        <p class="testinin">Q3.</p>
        <p>komyunike-syonnhaiikannzidesuka</p>
            </div>
            <div class="testAtai">
             <p class="testAtaiin1">非常にそう思う</p>
             <p class="testAtaiin2">そう思う</p>
             <p class="testAtaiin3">どちらでもない</p>
             <p class="testAtaiin4">そう思わない</p>
             <p class="testAtaiin5">全くそう思わない</p>   
            </div>
            <input type="range" class="infRange" name="mot" min="0" max="100" step="1" v-model="motivation"/> 
    
    </div>
    <div class="testin1">
        <div class="testin1in">
        <p class="testinin">Q4.</p>
        <p>komyunike-syonnhaiikannzidesuka</p>
            </div>
            <div class="testAtai">
             <p class="testAtaiin1">非常にそう思う</p>
             <p class="testAtaiin2">そう思う</p>
             <p class="testAtaiin3">どちらでもない</p>
             <p class="testAtaiin4">そう思わない</p>
             <p class="testAtaiin5">全くそう思わない</p>   
            </div>
            <input type="range" class="infRange" name="mot" min="0" max="100" step="1" v-model="motivation"/> 
    
    </div>
    <div class="testin1">
        <div class="testin1in">
        <p class="testinin">Q5.</p>
        <p>komyunike-syonnhaiikannzidesuka</p>
            </div>
            <div class="testAtai">
             <p class="testAtaiin1">非常にそう思う</p>
             <p class="testAtaiin2">そう思う</p>
             <p class="testAtaiin3">どちらでもない</p>
             <p class="testAtaiin4">そう思わない</p>
             <p class="testAtaiin5">全くそう思わない</p>   
            </div>
            <input type="range" class="infRange" name="mot" min="0" max="100" step="1" v-model="motivation"/> 
    
    </div>

  <button id="testSubmit" @click="submit">Submit</button>
</div>
</template>

<script>



export default {
  name: 'test',
  data () {
    return {
        my_text: ''
    }
  },
  mounted: function() {
      
    },
  methods: {
    
  },
   
}

</script>

<style>
.testin1{
    width: 80%;
    margin:50px 10%;
}

.testin1in {
   display:flex;
   width:70%;
    margin:0 auto;
}

.testinin{
     color:#00A29A;
}

.testAtai{
display:flex;
width:70%;
margin: 20px auto;
}

.testAtaiin1{
    flex: 1;
    text-align: left;
    font-size: 12px;

}
.testAtaiin2{
    flex: 1;
    text-align: center;
    font-size: 12px;

}

.testAtaiin3{
    flex: 1;
    text-align: center;
    font-size: 12px;

}

.testAtaiin4{
    flex: 1;
    text-align: center;
    font-size: 12px;

}

.testAtaiin5{
    flex: 1;
    text-align: right;
    font-size: 12px;

}

#testSubmit{
  background-color: #00A29A;
  width: 50vw;
  height: 40px;
  color: aliceblue;
  border-radius: 5px;
  font-size: 15px;
  border-color: #00A29A;
  margin: 20px auto;
}

</style>