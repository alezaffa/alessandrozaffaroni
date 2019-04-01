<template>

  <div class="container-fluid">
    <div class="body col-xs-12">

      <div class="mail col-xs-12">
          <span class="mail-title"></span>
          <a class="mail-txt" href="mailto:zaffaroni1ale89@gmail.com">mail@alessandrozaffaroni.it</a>
      </div>

      <div class="social col-xs-12">

        <a href="http://www.facebook.com/alessandro.zaffaroni" title="Facebook">
          <icon name="facebook-square" scale="3"></icon>
        </a>

        <a href="http://www.instagram.com/ale.zaffa" title="Instagram">
          <icon name="instagram" scale="3"></icon>
        </a>

        <a href="http://www.linkedin.com/in/alessandrozaffaroni" title="LinkedIn">
          <icon name="linkedin-square" scale="3"></icon>
        </a>

      </div>

    </div>
  </div>
</template>

<script>
    export default {
      name: 'contacts'
    }
</script>

<style scoped lang="less">

  #app {
    .container-fluid {
      background: black;
      /*Opacity start*/
      -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)";
      filter: alpha(opacity=70);
      -moz-opacity: 0.80;
      opacity: 0.8;
      /*Opacity end*/
      padding: 0;
      .body {
        padding: 4em 0;
        .mail, .website, .social {
          color: white;
          padding: 5px;
          height: 50px;
          a {
            color: white;
          }
          .fa, .fa-icon {
            padding: 0px;
            padding-left: 5px;
            padding-right: 5px;
          }
          .mail-ico, .mail-txt, .website-txt, .a {
            text-decoration: none;
            color: white;
            padding: 0px;
            font-size: 18px;
            line-height: 50px;
          }
          .mail-title {
            padding: 0px;
            font-size: 18px;
            line-height: 50px;
            padding-right: 25px;
          }
        }
      }
    }
  }

</style>
