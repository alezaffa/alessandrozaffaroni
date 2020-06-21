<template>

  <div class="container-fluid">
    <div class="body col-xs-12">

      <div class="">
        <h1 class="title"></h1>
      </div>

      <div class="propic col-lg-6 col-md-6 col-xs-12">
        <img src="/static/images/avatar1.png" alt="Code" height="45%" width="45%">
      </div>
      <div class="introducing col-lg-6 col-md-6 col-xs-12">
        <span class="greetings">Ciao!</span>
        <p class="description" style="text-align: justify;">
          Sono Alessandro Zaffaroni, laureato in Informatica e da sempre interessato alle tecnologie informatiche.<br>
          Sin dai tempi universitari mi dedico alla creazione di software sviluppati con il linguaggio Java e allo studio di nuovi linguaggi.
        </p>
      </div>

    </div>
  </div>

</template>

<script>
  export default {
    name: 'who-am-i'
  }
</script>

<style scoped lang="less">

  @nopadding: 0px;

  .no-padding {
    padding: 0px;
  }

  #app {
    .container-fluid {
      padding: 0px;
      padding-left: 10px;
      padding-right: 10px;
      .body {
        padding: 10px 40px 10px 40px;
        .h1, .title {
          padding: 0px;
          font-size: 5rem;
          text-align: center;
          font-weight: normal;
        }
        .propic {
          padding: 0px;
        }
        .introducing {
          padding: 10px;
          font-size: 18px;
          .greetings {
            text-align: center;
            font-size: 32px;
            font-weight: bold;
          }
          .description {
            text-align: justify;
          }
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
        //* {box-sizing:border-box}
        .skills, .progress-bar {
          text-align: right; /* Right-align text */
          padding-right: 20px; /* Add some right padding */
          line-height: 40px; /* Set the line-height to center the text inside the skill bar, and to expand the height of the container */
          color: white; /* White text color */
        }
        /* Container for skill bars */
        .container, .progress {
          width: 100%; /* Full width */
          background-color: #ddd; /* Grey background */
          padding: 0px;
          margin: 0px;
          height: 40px;
        }
        .html {width: 40%; background-color: #4CAF50;} /* Green */
        .css {width: 60%; background-color: #2196F3;} /* Blue */
        .js {width: 60%; background-color: #f44336;} /* Red */
        .java {width: 60%; background-color: darkgreen}
        .scala {width: 20%; background-color: firebrick}
        .cpp {width: 50%; background-color: gold}
      }
    }
  }

</style>
