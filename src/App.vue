<template>
  <div id="app">
      <SignIn />
  </div>
</template>

<script>
import SignIn from '@/components/SignIn.vue'

export default {
  name: 'App',
  components: {
    SignIn
  }
}
</script>
<style>
body {
    color: #eee;
    background-color:#333;
}
</style>
