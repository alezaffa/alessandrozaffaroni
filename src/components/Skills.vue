<template>
  <div class="container-fluid">
    <div class="body col-xs-12">

      <div class="">
        <h1 class="title">Skills</h1>
      </div>


        <div class="skill-list col-xs-6">
          <icon name="desktop" scale="3"></icon>
          <!--<h2 class="col-title no-padding col-xs-12">Front-end development</h2>-->
          <h3 class="subtitle col-xs-12">HTML</h3>
          <div class="progress col-xs-12">
            <div class="skills html progress-bar" id="html" role="progressbar" aria-valuenow="50" aria-valuemin="0"
                 aria-valuemax="100">
              <div class="">50%</div>
            </div>
          </div>
          <!--
          <div class="container col-xs-12">
            <div class="skills html">40%</div>
          </div>
          -->
          <h3 class="subtitle col-xs-12">CSS</h3>
          <div class="progress col-xs-12">
            <div class="skills css progress-bar" id="css"  role="progressbar" aria-valuenow="60" aria-valuemin="0"
                 aria-valuemax="100">
              <div class="">60%</div>
            </div>
          </div>
          <!--
          <div class="container col-xs-12">
            <div class="skills css">60%</div>
          </div>
          -->
          <h3 class="subtitle col-xs-12">JavaScript</h3>
          <div class="progress col-xs-12">
            <div class="skills js progress-bar" id="js"  role="progressbar" aria-valuenow="60" aria-valuemin="0"
                 aria-valuemax="100">
              <div class="">60%</div>
            </div>
          </div>
          <!--
          <div class="container col-xs-12">
            <div class="skills js">60%</div>
          </div>
          -->
        </div>

        <div class="skill-list col-xs-6">
          <!--<h2 class="col-title no-padding col-xs-12">Back-end development</h2>-->
          <icon name="code" scale="3"></icon>
          <h3 class="subtitle col-xs-12">Java</h3>
          <div class="progress col-xs-12">
            <div class="skills java progress-bar" id="java"  role="progressbar" aria-valuenow="60" aria-valuemin="0"
                 aria-valuemax="100">
              <div class="">60%</div>
            </div>
          </div>
          <!--
          <div class="container col-xs-12">
            <div class="skills java">60%</div>
          </div>
          -->
          <h3 class="subtitle col-xs-12">Scala</h3>
          <div class="progress col-xs-12">
            <div class="skills scala progress-bar" id="scala"  role="progressbar" aria-valuenow="20" aria-valuemin="0"
                 aria-valuemax="100">
              <div class="">20%</div>
            </div>
          </div>

          <!--
          <div class="container col-xs-12">
            <div class="skills scala">40%</div>
          </div>
          -->
          <h3 class="subtitle col-xs-12">C++</h3>
          <div class="progress col-xs-12">
            <div class="skills cpp progress-bar" id="cpp"  role="progressbar" aria-valuenow="50" aria-valuemin="0"
                 aria-valuemax="100">
              <div class="">50%</div>
            </div>
          </div>
          <!--
          <div class="container col-xs-12">
            <div class="skills cpp">50%</div>
          </div>
          -->
        </div>

      </div>
    </div>

</template>

<script>
    export default {
      name: 'skills',
      mounted: function () {
      }
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
        .skill-list {
          padding: 5px;
        }
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
        .progress {
          border-radius: 0px;
        }
        //* {box-sizing:border-box}
        .skills, .progress-bar {
          font-size: 14px;
          text-align: right; /* Right-align text */
          padding-right: 20px; /* Add some right padding */
          line-height: 40px; /* Set the line-height to center the text inside the skill bar, and to expand the height of the container */
          color: white; /* White text color */
          &:hover {
            box-shadow: 3px 3px 15px #666;
            border-color: @blue;
            background: @blue;
            color: #fff;

            /*Opacity*/
            zoom: 1;
            filter: alpha(opacity=100);
            opacity: 1;
          }
        }
        /* Container for skill bars */
        .container, .progress {
          width: 100%; /* Full width */
          background-color: #ddd; /* Grey background */
          padding: 0px;
          margin: 0px;
          height: 40px;
          &:hover {
            zoom: 1;
            -webkit-transition: opacity .5s ease-in-out;
            -moz-transition: opacity .5s ease-in-out;
            -ms-transition: opacity .5s ease-in-out;
            -o-transition: opacity .5s ease-in-out;
            transition: opacity .5s ease-in-out;
          }
        }
        .html {width: 50%; background-color: deepskyblue} /* Green 4CAF50*/
        .css {width: 60%; background-color: deepskyblue} /* Blue 2196F3*/
        .js {width: 60%; background-color: deepskyblue;} /* Red F44336*/
        .java {width: 60%; background-color: deepskyblue}
        .scala {width: 20%; background-color: deepskyblue}
        .cpp {width: 50%; background-color: deepskyblue}
      }
    }
  }

  @media screen and (max-width: 600px) {
    .col-title {display: none;}
    .col-title {
      position: absolute;
      right: 0;
      top: 0;
    }
  }

</style>
