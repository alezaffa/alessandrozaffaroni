<template>

  <div class="container-fluid">
    <div class="body col-xs-12">

      <div class="">
        <h1 class="title">Education</h1>
      </div>

      <div class="education col-xs-12 no-padding">
        <div class="logo col-md-5 col-sm-5 col-xs-12 no-padding">
          <!--icon name="graduation-cap" scale="5"></icon-->
          <a href="https://www.uninsubria.it">
            <img src="/static/logo/uninsubria.png" alt="uninsubria.it" width="25%">
          </a>
        </div>
        <div class="detail col-md-7 col-sm-7 col-xs-12 no-padding">
          <div class="header col-xs-12 no-padding">
            <h3 class="jobtitle" style="font-weight: bold;">Laurea Triennale in Informatica</h3>
            <h4 class="company">Universita' degli Studi dell'Insubria</h4>
            <h5 class="date">
              <span class="from">29 September 2014</span>
              <span> - </span>
              <span class="to">22 February 2018</span>
            </h5>
          </div>
          <div class="description col-xs-12">
            <span></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
      name: 'education'
    }
</script>

<style scoped lang="less">

  @nopadding: 0px;
  @blue: #2196F3;

  .no-padding {
    padding: 0px;
  }

  #app {
    .container-fluid {
      padding: 0px;
      padding-left: 10px;
      padding-right: 10px;
      .body {
        padding-top: 10px;
        padding-bottom: 10px;
        padding-left: 30px;
        padding-right: 30px;
        .h1, .title {
          color: orangered;
          padding: 0px;
          font-size: 5rem;
          text-align: center;
          font-weight: normal;
        }
        .h2, .col-title {
          padding-top: 20px;
          padding-bottom: 10px;
          font-size: 3rem;
          text-align: left;
          font-weight: normal;
        }
        .h3, .subtitle {
          padding: 10px;
          font-size: 18px;
          text-align: left;
          font-weight: normal;
        }
        .education {
          padding: 20px 10px 20px 10px;
          .detail {
            .header {
              text-align: left;
            }
          }
        }
      }
    }

    @media screen and (max-width: 600px) {
      .col-title {
        display: none;
      }

      .col-title {
        position: absolute;
        right: 0;
        top: 0;
      }
    }
  }

</style>

