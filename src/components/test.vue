<template>
<div id="testVue">
    <div class="testin1">
        <div class="testin1in">
        <p class="testinin">Q1.</p>
        <p>人と話すことが好きだ</p>
            </div>
            <div class="testAtai">
             <p class="testAtaiin1">全くそう思わない</p>
             <p class="testAtaiin2">そう思わない</p>
             <p class="testAtaiin3">どちらでもない</p>
             <p class="testAtaiin4">そう思う</p>
             <p class="testAtaiin5">非常にそう思う</p>   
            </div>
            <input type="range" class="infRangeA" min="0" max="100" step="-1" v-model="com1"/> 
    
    </div>
    <div class="testin1">
        <div class="testin1in">
        <p class="testinin">Q2.</p>
        <p>絵や図を書いて表現することが得意だ</p>
            </div>
            <div class="testAtai">
            <p class="testAtaiin1">全くそう思わない</p>
             <p class="testAtaiin2">そう思わない</p>
             <p class="testAtaiin3">どちらでもない</p>
             <p class="testAtaiin4">そう思う</p>
             <p class="testAtaiin5">非常にそう思う</p>     
            </div>
            <input type="range" class="infRangeA" min="0" max="100" step="1" v-model="vis2"/> 
    
    </div>
    <div class="testin1">
        <div class="testin1in">
        <p class="testinin">Q3.</p>
        <p>最近の情報技術に関して敏感な方だ</p>
            </div>
            <div class="testAtai">
       <p class="testAtaiin1">全くそう思わない</p>
             <p class="testAtaiin2">そう思わない</p>
             <p class="testAtaiin3">どちらでもない</p>
             <p class="testAtaiin4">そう思う</p>
             <p class="testAtaiin5">非常にそう思う</p>   
            </div>
            <input type="range" class="infRangeA" min="0" max="100" step="1" v-model="tec1"/> 
    
    </div>
    <div class="testin1">
        <div class="testin1in">
        <p class="testinin">Q4.</p>
        <p>アイデアを戦略的に活用することが得意だ</p>
            </div>
            <div class="testAtai">
             <p class="testAtaiin1">全くそう思わない</p>
             <p class="testAtaiin2">そう思わない</p>
             <p class="testAtaiin3">どちらでもない</p>
             <p class="testAtaiin4">そう思う</p>
             <p class="testAtaiin5">非常にそう思う</p>    
            </div>
            <input type="range" class="infRangeA" min="0" max="100" step="1" v-model="pol2"/> 
    
    </div>
    <div class="testin1">
        <div class="testin1in">
        <p class="testinin">Q5.</p>
        <p>他人の意見を理解できる</p>
            </div>
            <div class="testAtai">
             <p class="testAtaiin1">全くそう思わない</p>
             <p class="testAtaiin2">そう思わない</p>
             <p class="testAtaiin3">どちらでもない</p>
             <p class="testAtaiin4">そう思う</p>
             <p class="testAtaiin5">非常にそう思う</p>   
            </div>
            <input type="range" class="infRangeA" min="0" max="100" step="-1" v-model="com2"/> 
    
    </div>
    <div class="testin1">
        <div class="testin1in">
        <p class="testinin">Q6.</p>
        <p>行動力がある方だ</p>
            </div>
            <div class="testAtai">
           <p class="testAtaiin1">全くそう思わない</p>
             <p class="testAtaiin2">そう思わない</p>
             <p class="testAtaiin3">どちらでもない</p>
             <p class="testAtaiin4">そう思う</p>
             <p class="testAtaiin5">非常にそう思う</p>    
            </div>
            <input type="range" class="infRangeA" min="0" max="100" step="1" v-model="pol5"/> 
    
    </div>
    <div class="testin1">
        <div class="testin1in">
        <p class="testinin">Q7.</p>
        <p>アイデアを絵や図で表現するほうだ</p>
            </div>
            <div class="testAtai">
             <p class="testAtaiin1">全くそう思わない</p>
             <p class="testAtaiin2">そう思わない</p>
             <p class="testAtaiin3">どちらでもない</p>
             <p class="testAtaiin4">そう思う</p>
             <p class="testAtaiin5">非常にそう思う</p>   
            </div>
            <input type="range" class="infRangeA" min="0" max="100" step="1" v-model="vis1"/> 
    
    </div>
    <div class="testin1">
        <div class="testin1in">
        <p class="testinin">Q8.</p>
        <p>グループワークが得意な方だ</p>
            </div>
            <div class="testAtai">
             <p class="testAtaiin1">全くそう思わない</p>
             <p class="testAtaiin2">そう思わない</p>
             <p class="testAtaiin3">どちらでもない</p>
             <p class="testAtaiin4">そう思う</p>
             <p class="testAtaiin5">非常にそう思う</p>   
            </div>
            <input type="range" class="infRangeA" min="0" max="100" step="-1" v-model="com3"/> 
    
    </div>
     <div class="testin1">
        <div class="testin1in">
        <p class="testinin">Q9.</p>
        <p>情報技術に関しての知識はある方だ</p>
            </div>
            <div class="testAtai">
             <p class="testAtaiin1">全くそう思わない</p>
             <p class="testAtaiin2">そう思わない</p>
             <p class="testAtaiin3">どちらでもない</p>
             <p class="testAtaiin4">そう思う</p>
             <p class="testAtaiin5">非常にそう思う</p>   
            </div>
            <input type="range" class="infRangeA" min="0" max="100" step="1" v-model="tec2"/> 
    
    </div>
     <div class="testin1">
        <div class="testin1in">
        <p class="testinin">Q10.</p>
        <p>アナログよりもデジタル派だ</p>
            </div>
            <div class="testAtai">
　           <p class="testAtaiin1">全くそう思わない</p>
             <p class="testAtaiin2">そう思わない</p>
             <p class="testAtaiin3">どちらでもない</p>
             <p class="testAtaiin4">そう思う</p>
             <p class="testAtaiin5">非常にそう思う</p>               </div>
            <input type="range" class="infRangeA" min="0" max="100" step="1" v-model="tec5"/> 
    
    </div>
    <div class="testin1">
        <div class="testin1in">
        <p class="testinin">Q11.</p>
        <p>論理的に考えることが得意だ</p>
            </div>
            <div class="testAtai">
            <p class="testAtaiin1">全くそう思わない</p>
             <p class="testAtaiin2">そう思わない</p>
             <p class="testAtaiin3">どちらでもない</p>
             <p class="testAtaiin4">そう思う</p>
             <p class="testAtaiin5">非常にそう思う</p>   
            </div>
            <input type="range" class="infRangeA" min="0" max="100" step="1" v-model="anl3"/> 
    
    </div>
    <div class="testin1">
        <div class="testin1in">
        <p class="testinin">Q12.</p>
        <p>データをもとに問題を解決することが得意だ</p>
            </div>
            <div class="testAtai">
             <p class="testAtaiin1">全くそう思わない</p>
             <p class="testAtaiin2">そう思わない</p>
             <p class="testAtaiin3">どちらでもない</p>
             <p class="testAtaiin4">そう思う</p>
             <p class="testAtaiin5">非常にそう思う</p>   
            </div>
            <input type="range" class="infRangeA" min="0" max="100" step="1" v-model="anl1"/> 
    
    </div>
    <div class="testin1">
        <div class="testin1in">
        <p class="testinin">Q13.</p>
        <p>自己分析ができている方だ</p>
            </div>
            <div class="testAtai">
             <p class="testAtaiin1">全くそう思わない</p>
             <p class="testAtaiin2">そう思わない</p>
             <p class="testAtaiin3">どちらでもない</p>
             <p class="testAtaiin4">そう思う</p>
             <p class="testAtaiin5">非常にそう思う</p>   
            </div>
            <input type="range" class="infRangeA" min="0" max="100" step="-1" v-model="com4"/> 
    
    </div>
    <div class="testin1">
        <div class="testin1in">
        <p class="testinin">Q14.</p>
        <p>判断力がある方だ</p>
            </div>
            <div class="testAtai">
           <p class="testAtaiin1">全くそう思わない</p>
             <p class="testAtaiin2">そう思わない</p>
             <p class="testAtaiin3">どちらでもない</p>
             <p class="testAtaiin4">そう思う</p>
             <p class="testAtaiin5">非常にそう思う</p>    
            </div>
            <input type="range" class="infRangeA" min="0" max="100" step="1" v-model="pol4"/> 
    
    </div>
    <div class="testin1">
        <div class="testin1in">
        <p class="testinin">Q15.</p>
        <p>複雑なものを抽象化することが得意だ</p>
            </div>
            <div class="testAtai">
             <p class="testAtaiin1">全くそう思わない</p>
             <p class="testAtaiin2">そう思わない</p>
             <p class="testAtaiin3">どちらでもない</p>
             <p class="testAtaiin4">そう思う</p>
             <p class="testAtaiin5">非常にそう思う</p>   
            </div>
            <input type="range" class="infRangeA" min="0" max="100" step="1" v-model="vis4"/> 
    
    </div>

    <div class="testin1">
        <div class="testin1in">
        <p class="testinin">Q16.</p>
        <p>プログラミングが得意だ</p>
            </div>
            <div class="testAtai">
            <p class="testAtaiin1">全くそう思わない</p>
             <p class="testAtaiin2">そう思わない</p>
             <p class="testAtaiin3">どちらでもない</p>
             <p class="testAtaiin4">そう思う</p>
             <p class="testAtaiin5">非常にそう思う</p>   
            </div>
            <input type="range" class="infRangeA" min="0" max="100" step="1" v-model="tec3"/> 
    
    </div>
    <div class="testin1">
        <div class="testin1in">
        <p class="testinin">Q17.</p>
        <p>物事を理解することが早いほうだ</p>
            </div>
            <div class="testAtai">
             <p class="testAtaiin1">全くそう思わない</p>
             <p class="testAtaiin2">そう思わない</p>
             <p class="testAtaiin3">どちらでもない</p>
             <p class="testAtaiin4">そう思う</p>
             <p class="testAtaiin5">非常にそう思う</p>    
            </div>
            <input type="range" class="infRangeA" min="0" max="100" step="1" v-model="pol1"/> 
    
    </div>
 
    <div class="testin1">
        <div class="testin1in">
        <p class="testinin">Q18.</p>
        <p>事実に基づいて客観視することができる</p>
            </div>
            <div class="testAtai">
          <p class="testAtaiin1">全くそう思わない</p>
             <p class="testAtaiin2">そう思わない</p>
             <p class="testAtaiin3">どちらでもない</p>
             <p class="testAtaiin4">そう思う</p>
             <p class="testAtaiin5">非常にそう思う</p>   
            </div>
            <input type="range" class="infRangeA" min="0" max="100" step="1" v-model="anl5"/> 
    
    </div>
    <div class="testin1">
        <div class="testin1in">
        <p class="testinin">Q19.</p>
        <p>ひたすら手を動かす方だ</p>
            </div>
            <div class="testAtai">
             <p class="testAtaiin1">全くそう思わない</p>
             <p class="testAtaiin2">そう思わない</p>
             <p class="testAtaiin3">どちらでもない</p>
             <p class="testAtaiin4">そう思う</p>
             <p class="testAtaiin5">非常にそう思う</p>   
            </div>
            <input type="range" class="infRangeA" min="0" max="100" step="1" v-model="vis3"/> 
    
    </div>
 
    <div class="testin1">
        <div class="testin1in">
        <p class="testinin">Q20.</p>
        <p>協調性がある方だ</p>
            </div>
            <div class="testAtai">
             <p class="testAtaiin1">全くそう思わない</p>
             <p class="testAtaiin2">そう思わない</p>
             <p class="testAtaiin3">どちらでもない</p>
             <p class="testAtaiin4">そう思う</p>
             <p class="testAtaiin5">非常にそう思う</p>      
            </div>
            <input type="range" class="infRangeA" min="0" max="100" step="-1" v-model="com5"/> 
    
    </div>
    <div class="testin1">
        <div class="testin1in">
        <p class="testinin">Q21.</p>
        <p>システムの内部構造に興味がある</p>
            </div>
            <div class="testAtai">
            <p class="testAtaiin1">全くそう思わない</p>
             <p class="testAtaiin2">そう思わない</p>
             <p class="testAtaiin3">どちらでもない</p>
             <p class="testAtaiin4">そう思う</p>
             <p class="testAtaiin5">非常にそう思う</p>   
            </div>
            <input type="range" class="infRangeA" min="0" max="100" step="1" v-model="tec4"/> 
    
    </div>
    
    <div class="testin1">
        <div class="testin1in">
        <p class="testinin">Q22.</p>
        <p>デザイン行為が好きであり、得意である</p>
            </div>
            <div class="testAtai">
            <p class="testAtaiin1">全くそう思わない</p>
             <p class="testAtaiin2">そう思わない</p>
             <p class="testAtaiin3">どちらでもない</p>
             <p class="testAtaiin4">そう思う</p>
             <p class="testAtaiin5">非常にそう思う</p>   
            </div>
            <input type="range" class="infRangeA" min="0" max="100" step="1" v-model="vis5"/> 
    
    </div>
 
    <div class="testin1">
        <div class="testin1in">
        <p class="testinin">Q23.</p>
        <p>物事の問題点によく気付く方だ</p>
            </div>
            <div class="testAtai">
            <p class="testAtaiin1">全くそう思わない</p>
             <p class="testAtaiin2">そう思わない</p>
             <p class="testAtaiin3">どちらでもない</p>
             <p class="testAtaiin4">そう思う</p>
             <p class="testAtaiin5">非常にそう思う</p>    
            </div>
            <input type="range" class="infRangeA" min="0" max="100" step="1" v-model="anl2"/> 
    
    </div>
    
    <div class="testin1">
        <div class="testin1in">
        <p class="testinin">Q24.</p>
        <p>相手の間違いによく気付く方だ</p>
            </div>
            <div class="testAtai">
           <p class="testAtaiin1">全くそう思わない</p>
             <p class="testAtaiin2">そう思わない</p>
             <p class="testAtaiin3">どちらでもない</p>
             <p class="testAtaiin4">そう思う</p>
             <p class="testAtaiin5">非常にそう思う</p>   
            </div>
            <input type="range" class="infRangeA" min="0" max="100" step="1" v-model="anl4"/> 
    
    </div>   
    <div class="testin1">
        <div class="testin1in">
        <p class="testinin">Q25.</p>
        <p>自分の意図した通りに考えを相手に伝えることができる</p>
            </div>
            <div class="testAtai">
            <p class="testAtaiin1">全くそう思わない</p>
             <p class="testAtaiin2">そう思わない</p>
             <p class="testAtaiin3">どちらでもない</p>
             <p class="testAtaiin4">そう思う</p>
             <p class="testAtaiin5">非常にそう思う</p>   
            </div>
            <input type="range" class="infRangeA" min="0" max="100" step="1" v-model="pol3"/> 
    
    </div>
        
  <button id="testSubmit" @click="testSubmit">Submit</button>
</div>
</template>

<script>



export default {
  name: 'test',
  data () {
    return {
        com1:50,
        com2:50,
        com3:50,
        com4:50,
        com5:50,
        vis1:50,
        vis2:50,
        vis3:50,
        vis4:50,
        vis5:50,
        anl1:50,
        anl2:50,
        anl3:50,
        anl4:50,
        anl5:50,
        tec1:50,
        tec2:50,
        tec3:50,
        tec4:50,
        tec5:50,
        pol1:50,
        pol2:50,
        pol3:50,
        pol4:50,
        pol5:50,
        skills1:0,
        skills11:0,
        skills2:0,
        skills21:0,
        skills3:0,
        skills31:0,
        skills4:0,
        skills41:0,
        skills5:0,
        skills51:0,
        communication:0,
        visualization:0,
        analyze:0,
        technology:0,
        policy:0,
        userName:''
    }
  },
  created: function(){
      this.userName = JSON.parse(localStorage.getItem('userName')) || []
  },
  mounted: function() {
      
    },
  methods: {
      testSubmit() {
          /////////communication skills////////////////////////////
          this.skills1 = 0;
          this.skills1 = parseInt(this.skills1)
          this.com1 = parseInt(this.com1)
          this.com2 = parseInt(this.com2)
          this.com3 = parseInt(this.com3)
          this.com4 = parseInt(this.com4)
          this.com5 = parseInt(this.com5)
          this.skills1 = this.com1 + this.com2 +this.com3 + this.com4 + this.com5
          //+ this.com3 + this.com4 + this.com5;
          this.skills1 = parseInt(this.skills1)
          console.log(this.skills1)
          this.skills11 = this.skills1 / 5;
          this.skills11 = parseInt(this.skills11)
          console.log(this.skills11)
          this.communication = this.skills11 / 10;
                   
          /////////visualyze skills//////////////////////////////////////


          this.skills2 = 0;
          this.skills2 = parseInt(this.skills2)
          this.vis1 = parseInt(this.vis1)
          this.vis2 = parseInt(this.vis2)
          this.vis3 = parseInt(this.vis3)
          this.vis4 = parseInt(this.vis4)
          this.vis5 = parseInt(this.vis5)
          this.skills2 = this.vis1 + this.vis2 +this.vis3 + this.vis4 + this.vis5
          //+ this.com3 + this.com4 + this.com5;
          this.skills2 = parseInt(this.skills2)
          console.log(this.skills1)
          this.skills21 = this.skills2 / 5;
          this.skills21 = parseInt(this.skills21)
          console.log(this.skills21)
          this.visualization = this.skills21 / 10;
         
          /////////analyze skills////////////////////////////

          this.skills3 = 0;
          this.skills3 = parseInt(this.skills3)
          this.anl1 = parseInt(this.anl1)
          this.anl2 = parseInt(this.anl2)
          this.anl3 = parseInt(this.anl3)
          this.anl4 = parseInt(this.anl4)
          this.anl5 = parseInt(this.anl5)
          this.skills3 = this.anl1 + this.anl2 +this.anl3 + this.anl4 + this.anl5
          //+ this.com3 + this.com4 + this.com5;
          this.skills3 = parseInt(this.skills3)
          console.log(this.skills1)
          this.skills31 = this.skills3 / 5;
          this.skills31 = parseInt(this.skills31)
          console.log(this.skills31)
          this.analyze = this.skills31 / 10;
          

          /////////communication skills////////////////////////////


          this.skills4 = 0;
          this.skills4 = parseInt(this.skills4)
          this.tec1 = parseInt(this.tec1)
          this.tec2 = parseInt(this.tec2)
          this.tec3 = parseInt(this.tec3)
          this.tec4 = parseInt(this.tec4)
          this.tec5 = parseInt(this.tec5)
          this.skills4 = this.tec1 + this.tec2 +this.tec3 + this.tec4 + this.tec5
          //+ this.com3 + this.com4 + this.com5;
          this.skills4 = parseInt(this.skills4)
          console.log(this.skills4)
          this.skills41 = this.skills4 / 5;
          this.skills41 = parseInt(this.skills41)
          console.log(this.skills41)
          this.technology = this.skills41 / 10;
          
          /////////communication skills////////////////////////////


          this.skills5 = 0;
          this.skills5 = parseInt(this.skills5)
          this.pol1 = parseInt(this.pol1)
          this.pol2 = parseInt(this.pol2)
          this.pol3 = parseInt(this.pol3)
          this.pol4 = parseInt(this.pol4)
          this.pol5 = parseInt(this.pol5)
          this.skills5 = this.pol1 + this.pol2 +this.pol3 + this.pol4 + this.pol5
          //+ this.com3 + this.com4 + this.com5;
          this.skills5 = parseInt(this.skills5)
          console.log(this.skills5)
          this.skills51 = this.skills5 / 5;
          this.skills51 = parseInt(this.skills51)
          console.log(this.skills51)
          this.policy = this.skills51 / 10;
          
         
          /////////communication skills////////////////////////////
          firebase.database().ref('/users/userData/' + this.userName).update({
            communication:this.communication,
            visualization:this.visualization,
            analyze:this.analyze,
            technology:this.technology,
            policy:this.policy
          })
          alert("success")

      }
    
  },
   
}

</script>

<style>

@media (min-width: 1080px){

#testVue p{
  
  
}
.testin1{
    width: 80%;
    margin:50px 10%;
}

.testin1in {
   display:flex;
   width:70%;
    margin:0 auto;
    font-weight: bold;
    font-size:25px;
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

.infRangeA {
  width:70%;
  border:none;
　background:none;
  background-color: #ffffff;
  color:#696969;
}
}

@media (max-width: 1079px){
    #testVue p{
}
.testin1{
    width: 98%;
    margin:50px 1%;
}

.testin1in {
   display:flex;
   width:70%;
    margin:0 auto;
    font-weight: bold;
    font-size:20px;
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

.infRangeA {
  width:70%;
  border:none;
　background:none;
  background-color: #ffffff;
  color:#696969;
}

}


</style>