
<template>
</template>
<script>

import router from '../router'

export default {
  name: 'margin2',
  created: function() {
    localStorage.setItem('count',2);
    router.push({ path: '/helloworld' })
  }
}

</script>

<style>

</style>