<template>
  <div id="app">

    <navbar @example="methodName"></navbar>

    <div class="body" ref="Home">
    <!--<router-view></router-view>-->

        <div class="intro col-xs-12" ref="About Me">
          <who-am-i></who-am-i>
          <experiences></experiences>
          <education></education>
        </div>
        <div class="skills col-xs-12" ref="Skills">
          <skills></skills>
        </div>
        <div class="cv col-xs-12" ref="Cv">
          <cv></cv>
        </div>
        <div class="carousel col-xs-12" ref="Carousel">
          <carousel></carousel>
        </div>
        <div class="portfolio col-xs-12" ref="Portfolio">
          <portfolio></portfolio>
        </div>
        <div class="contacts col-xs-12" ref="Contatti">
          <contacts></contacts>
        </div>

      <vm-back-top class="backtotop"></vm-back-top>
    </div>
  </div>

</template>

<script>
  import Navbar from './components/Navbar'
  import WhoAmI from './components/WhoAmI'
  import Experiences from './components/Experiences'
  import Education from './components/Education'
  import Skills from './components/Skills'
  import Carousel from './components/Carousel'
  import Portfolio from './components/Portfolio'
  import Cv from './components/Cv'
  import Contacts from './components/Contacts'
  import VmBackTop from 'vue-multiple-back-top/src/components/back-top'

  export default {
    components: {
      VmBackTop,
      Navbar,
      Carousel,
      Portfolio,
      WhoAmI,
      Skills,
      Experiences,
      Education,
      Cv,
      Contacts
    },
    name: 'app',
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
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 0px;
    .body {
      .carousel {
        padding: 0px;
        padding-bottom: 50px;
      }
      .intro, .skills, .cv {
        padding: 10px;
      }
      .contacts {
        background: black;
        /*Opacity start*/
        -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)";
        filter: alpha(opacity=70);
        -moz-opacity: 0.80;
        opacity: 0.8;
        /*Opacity end*/
        padding: 0px;
      }
      .backtotop {
        border-radius: 0px;
      }
    }
  }
</style>
