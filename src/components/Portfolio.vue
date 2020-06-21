<template>
  <div class="container-fluid" id="portfolio">

    <div class="body">
      <div class="content">
       <h1>
         PORTFOLIO - I MIEI PROGETTI
       </h1>
       <span>Lorem ipsum dolor sit amet</span>
      </div>
      <vm-back-top class="backtotop"></vm-back-top>

    </div>

  </div>
</template>

<script>
  import Contacts from './Contacts'
  import VmBackTop from 'vue-multiple-back-top/src/components/back-top'

  export default {
    components: {
      Contacts,
      VmBackTop
    },
    name: 'portfolio'
  }
</script>

<style scoped lang="less">
  #portfolio {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 0px;
    .body {
      .content {
        padding: 40px;
      }
    }
  }
</style>

