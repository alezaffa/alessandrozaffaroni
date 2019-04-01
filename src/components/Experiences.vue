<template>

  <div class="container-fluid">
    <div class="body col-xs-12">

      <div class="">
        <h1 class="title">Experiences</h1>
      </div>

      <div class="experience col-xs-12 no-padding">
        <div class="logo col-md-5 col-sm-5 col-xs-12 no-padding">
          <icon name="building" scale="5"></icon>
        </div>
        <div class="detail col-md-7 col-sm-7 col-xs-12 no-padding">
          <div class="header col-xs-12 no-padding">
            <h3 class="jobtitle" style="font-weight: bold;">Software Developer Internship</h3>
            <h4 class="company">Elmec Informatica S.p.A.</h4>
            <h5 class="date">
              <span class="from">13 September 2017</span>
              <span> - </span>
              <span class="to">21 December 2017</span>
            </h5>
          </div>
          <div class="description col-xs-12">
            <span></span>
          </div>
        </div>
      </div>
      <div class="experience col-xs-12 no-padding">
        <div class="logo col-md-5 col-sm-5 col-xs-12 no-padding">
          <icon name="building" scale="5"></icon>
        </div>
        <div class="detail col-md-7 col-sm-7 col-xs-12 no-padding">
          <div class="header col-xs-12 no-padding">
            <h3 class="jobtitle" style="font-weight: bold;">Laboratory Technician</h3>
            <h4 class="company">Acer Europe SA</h4>
            <h5 class="date">
              <span class="from">4 May 2009</span>
              <span> - </span>
              <span class="to">31 January 2014</span>
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
      name: 'experiences'
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
        .h2 {
          padding-top: 20px;
          padding-bottom: 10px;
          font-size: 3rem;
          text-align: left;
          font-weight: normal;
        }
        .h3 {
          padding: 10px;
          font-size: 18px;
          text-align: left;
          font-weight: normal;
        }
        .experience {
          padding: 20px 10px 20px 10px;
          .detail {
            .header {
              text-align: left;
            }
          }
        }
      }
    }
  }

</style>
