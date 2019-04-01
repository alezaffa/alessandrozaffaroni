<template>
  <div id="portfolio">

    <div class="body">
      <div class="content">
       <span>
         PORTFOLIO - I MIEI PROGETTI
       </span>
      </div>
      <vm-back-top class="backtotop"></vm-back-top>

    </div>

  </div>
</template>

<script>
  import Contacts from './components/Contacts'
  import VmBackTop from 'vue-multiple-back-top/src/components/back-top'

  export default {
    components: {
      Contacts,
      VmBackTop
    },
    name: 'portfolio',
    methods: {
      methodName (name) {
        let element = this.$refs[name]
        let top = element.offsetTop
        window.scrollTo(0, top)
      }
    }
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
    }
  }
</style>

