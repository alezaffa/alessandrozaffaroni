<template>

  <div class="container-fluid">
    <div class="body col-xs-12">

      <div class="">
        <h1 class="title">Curriculum Vitae</h1>
      </div>

      <div class="content">

        <div class="cv-content col-xs-12">
          <div class="column-types col-xs-12">
            <span class="no-padding col-xs-6 hidden-xs">Nome file</span>
            <span class="no-padding col-xs-2 hidden-xs">Tipo</span>
            <span class="no-padding col-xs-2 hidden-xs">Lingua</span>
            <span class="no-padding col-xs-2 hidden-xs">Download</span>
          </div>

          <div class="values col-xs-12">
            <span class="no-padding col-xs-6 hidden-xs">CV-IT.pdf</span>
            <span class="no-padding col-xs-2 hidden-xs">PDF</span>
            <span class="no-padding flag-icon flag-icon-it col-xs-2"></span>
            <span title="cv">
              <a v-if="fileItaAvailable" href="../static/cv/CV-Alessandro-Zaffaroni-ITA.pdf" class="no-padding download glyphicon glyphicon-download-alt col-lg-2 col-md-2 col-sm-2 col-xs-10">
              </a>
              <a v-else @click="showModal = true" class="no-padding download glyphicon glyphicon-download-alt col-lg-2 col-md-2 col-sm-2 col-xs-10">
              </a>
            </span>
          </div>

          <div class="values col-xs-12">
            <span class="no-padding col-xs-6 hidden-xs">CV-EN.pdf</span>
            <span class="no-padding col-xs-2 hidden-xs">PDF</span>
            <span class="no-padding flag-icon flag-icon-gb col-xs-2"></span>
            <span title="cv">
              <a v-if="fileEngAvailable" href="../static/cv/CV-Alessandro-Zaffaroni-ENG.pdf" class="no-padding download glyphicon glyphicon-download-alt col-lg-2 col-md-2 col-sm-2 col-xs-10">
              </a>
              <a v-else @click="showModal = true" class="no-padding download glyphicon glyphicon-download-alt col-lg-2 col-md-2 col-sm-2 col-xs-10">
              </a>
            </span>
          </div>

        </div>

      </div>

    </div>

    <!-- MODAL -->
    <modal class="modal" title="Details" effect="fade" v-model="showModal">

      <div slot="modal-header" class="modal-header">
        <div class="col-xs-12">
          <span>CURRICULUM VITAE</span>
        </div>
      </div>

      <div slot="modal-body" class="modal-body">
        <div class="col-xs-12">
          <span>Curriculum Vitae non disponibile!</span>
        </div>
      </div>

      <div slot="modal-footer" class="modal-footer">
        <button type="button" class="btn btn-default" @click="showModal = false">CHIUDI</button>
      </div>

    </modal>

  </div>

</template>

<script>
  import { modal } from 'vue-strap'

  export default {
    components: {
      modal
    },
    name: 'cv',
    data () {
      return {
        showModal: false,
        fileItaAvailable: true,
        fileEngAvailable: false
      }
    }
  }
</script>

<style scoped lang="less">

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
        .h1, .title {
          color: orangered;
          padding: 0px;
          font-size: 5rem;
          text-align: center;
          font-weight: normal;
        }
        .content {
          padding: 0px;
          .cv-content {
            font-size: 50px;
            padding: 0px;
            .column-types {
              padding: 0px;
              font-size: 3rem;
              text-align: left;
              padding-bottom: 20px;
            }
            .values {
              padding: 0px;
              padding-top: 10px;
              padding-bottom: 10px;
              font-size: 18px;
              text-align: left;
              .flag-icon {
                background-position: 0%;
                font-size: 30px;
              }
              .glyphicon, .download {
                text-align: center;
                font-size: 30px;
                border: 1px solid black;
                color: black;
                &:hover {
                  cursor: pointer;
                  color: white;
                  background: #262626;
                  //box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
                  text-decoration: none;
                  /*Opacity start*/
                  /*
                  -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)";
                  filter: alpha(opacity=70);
                  -moz-opacity: 0.80;
                  opacity: 0.8;
                  */
                  /*Opacity end*/
                }
              }
            }
          }
        }
      }
    }
    .modal {
      .modal-content {
        border-radius: 0px;
        position: relative;
        background-color: #fff;
        -webkit-background-clip: padding-box;
        background-clip: padding-box;
        border: 1px solid #999;
        border: 1px solid rgba(0, 0, 0, .2);
        outline: 0;
        .modal-header {
          font-size: 25px;
          font-weight: bold;
          border: 0px;
        }
        .modal-body {
          font-size: 18px;
          height: 60px;
        }
        .modal-footer {
          font-size: 20px;
          border: 0px;
          .btn-default {
            color: black;
            border-radius: 0px;
            border: 1px solid black;
            &:hover {
              cursor: pointer;
              color: white;
              background: black;
              /*Opacity start*/
              -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)";
              filter: alpha(opacity=70);
              -moz-opacity: 0.80;
              opacity: 0.8;
              /*Opacity end*/
            }
          }
        }
      }
    }
  }

</style>
