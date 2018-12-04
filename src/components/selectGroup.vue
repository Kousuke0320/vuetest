<template>
<div>
  <div id="select1" @click="gotoAutoGroup">
      <p>Make Auto Group</p>
  </div>
  <div id="select2" @click="gotoNormalGroup">
      <p>Make Normal Group</p>
  </div>
</div>
</template>

<script>


import router from '../router'

export default {
  name: 'selectGroup',
  data () {
    return {
        
    }
  },
  mounted: function() {
    
    },
  methods: {
      gotoAutoGroup(){
      router.push({ path: '/auto' })
      },
      gotoNormalGroup() {
      router.push({ path: '/page2' })
      }
  },
}

</script>

<style>
#select1{
    margin:80px auto;
    background: #00A29A;
    color: #ffffff;
    width:30%;
    height: 50px;
}

#select2{
    margin:10px auto;
    background: #00A29A;
    color: #ffffff;
    width:30%;
    height: 50px;
}

</style>