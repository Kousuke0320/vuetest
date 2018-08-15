
<template>
</template>
<script>

import router from '../router'

export default {
  name: 'margin4',
  created: function() {
      localStorage.setItem('count2',3);
      router.push({ path: '/margin' })
  }
}

</script>

<style>

</style>