
<template>
</template>
<script>

import router from '../router'

export default {
  name: 'margin3',
  created: function() {
    localStorage.setItem('count2',2);
      router.push({ path: '/margin' })
  }
}

</script>

<style>

</style>