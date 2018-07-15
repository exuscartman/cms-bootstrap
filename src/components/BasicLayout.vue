<template>
  <b-container class="cms-container">
    <v-head></v-head>
    <div class="main-content">
      <router-view></router-view>
    </div>
  </b-container>
</template>

<script>
  import vHead from './Header.vue'
  export default {
    components: {
      vHead
    }
  }
</script>

<style scoped>
  .cms-container {
    max-width: 100%;
    padding: 0px;
  }
  .basic-layout {
    padding: 0px;
  }
  .main-content {
    overflow: auto;
  }



</style>
