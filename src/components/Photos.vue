<template>
  <div class="container-fluid" id="photos">

    <div class="body">
      <div class="content">
       <!--h1 class="title">Fotografia</h1-->
      <div class="cards">
      </div>
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
    name: 'photos'
  }
</script>

<style scoped lang="less">
  #photos {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 0px;
    .body {
      .content {
        .h1, .title {
          color: orangered;
          padding: 0px;
          font-size: 5rem;
          text-align: center;
          font-weight: normal;
        }
        padding: 40px;
        .cards {
          padding-top: 20px;
        }
      }
    }
  }
</style>

