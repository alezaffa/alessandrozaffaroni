<template>
  <div class="container-fluid">
     <div class="header col-xs-12">
       <div class="title col-xs-3 hidden-xs hidden-sm hidden-md">
         <a href="http://www.alessandrozaffaroni.it" class="col-xs-12">{{ msg }}</a>
       </div>
       <div class="topnav col-xs-9" id="myTopnav">
        <!--<router-link class="col-xs-2" v-for="routes in links"
                      :key="routes.id"
                      :to="(`${routes.page}`)">{{ routes.text }}</router-link>-->
         <a class="col-xs-2" v-for="routes in links" :key=routes.id @click="setSelected(routes)" :id="routes.text">{{ routes.text }}</a>
         <!-- This adds navbar in responsive mode -->
         <a href="javascript:void(0);" style="font-size:40px; padding-top: 0px; padding-bottom: 0px;" class="icon" @click="toggler()">&#9776;</a>

       </div>

     </div>
  </div>
</template>

<script>

export default {
  name: 'navbar',
  data () {
    return {
      msg: 'alessandrozaffaroni.it',
      counter: 0,
      selection: '',
      links: [
        {
          id: 0,
          text: 'Home',
          page: '/'
        },
        {
          id: 1,
          text: 'About Me',
          page: '/about'
        },
        {
          id: 2,
          text: 'Skills',
          page: '/skills'
        },
        {
          id: 3,
          text: 'Cv',
          page: '/cv'
        },
        {
          id: 4,
          text: 'Portfolio',
          page: '/portfolio'
        },
        {
          id: 5,
          text: 'Contatti',
          page: '/contacts'
        }
      ]
    }
  },
  mounted: function () {
    this.toggleStatus = document.getElementById('myTopnav')
  },
  methods: {
    setSelected: function (route) {
      window.location.href = '#' + (route.page)
      this.$emit('example', route.text)
    },
    /* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
    toggler: function () {
      if (this.toggleStatus.className.indexOf('topnav') >= 0 && (this.counter % 2) === 0) {
        this.toggleStatus.className += ' responsive'
        for (let i = 0; i < this.links.length; i++) {
          document.getElementById(this.links[i].text).classList.remove('col-xs-2')
          document.getElementById(this.links[i].text).classList.add('col-xs-12')
        }
      } else if (this.toggleStatus.className.indexOf('responsive') >= 0 && (this.counter % 2) !== 0) {
        document.getElementById('myTopnav').classList.remove('responsive')
      } else {
        this.toggleStatus.className = 'topnav'
        for (let i = 0; i < this.links.length; i++) {
          document.getElementById(this.links[i].text).classList.remove('col-xs-12')
          document.getElementById(this.links[i].text).classList.add('col-xs-2')
        }
      }
      this.counter++
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

  #app {
    .container-fluid {
      padding: 0px;
      .my-class-bp__btn {
        background: lightgray;
      }

      .my-class-bp__btn--active {
        background: #fff;
      }

      .my-class-bp__body {
        width: 20rem;
        padding: 2rem;
        font-size: 1.6rem;
      }
      .header {
        background: black;
        /*Opacity start*/
        -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)";
        filter: alpha(opacity=70);
        -moz-opacity: 0.80;
        opacity: 0.8;
        /*Opacity end*/
        padding: 0px;
        .logo {
          text-align: center;
          padding: 0px 10px 0px 10px;
          width: 110px;
        }
        .title {
          float: left;
          display: block;
          text-align: center;
          padding: 14px 16px;
          text-decoration: none;
          font-weight: normal;
          font-size: 20px;
          color: white;
          width: 300px;
          a {
            color: white;
          }
          a:hover {
            text-decoration: none;
            color: #888;
            cursor: pointer;
          }
        }

      }
    }
  }

  .topnav {
    overflow: hidden;
    float: left;
    display: block;
    text-align: center;
    text-decoration: none;
    font-weight: normal;
    font-size: 20px;
    color: white;
  }

  .topnav a {
    float: left;
    display: block;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    font-weight: normal;
    font-size: 20px;
    color: white;
  }

  .topnav a:hover {
    cursor: pointer;
    color: #888;
  }

  .topnav .icon {
    display: none;
  }

  @media screen and (max-width: 750px) {
    .topnav {
      width: 100%;
    }
    .topnav a {display: none;}
    .topnav a.icon {
      float: right;
      display: block;
    }
  }

  @media screen and (max-width: 750px) {
    .topnav.responsive {position: relative;}
    .topnav.responsive .icon {
      position: absolute;
      right: 0;
      top: 0;
    }
    .topnav.responsive a {
      float: none;
      display: block;
      text-align: left;
    }
  }

</style>
