<template>
  <div class="container-fluid">
    <div class="carousel">
      <slider animation="fade" height="600px">
        <p style="line-height: 280px; font-size: 5rem; text-align: center;" v-if="!list.length">Loading...</p>
        <slider-item v-for="(i, index) in list" :key="index">
          <div :style=i.val>
            <p class="listval">{{ i.text }}</p>
          </div>
        </slider-item>
      </slider>
    </div>
  </div>

</template>

<script>
  import {Slider, SliderItem} from 'vue-easy-slider'

  export default {
    name: 'carousel',
    data () {
      return {
        list: [
          { val: "line-height: 600px; font-size: 4rem; font-weight: normal; color: white; text-align: center; background-image: url('../static/images/lisboa.png'); background-size: cover; background-repeat: no-repeat; background-position: center;", text: 'Computers Are Useless. They Can Only Give You Answers' },
          { val: "line-height: 600px; font-size: 4rem; font-weight: normal; color: white; text-align: center; background-image: url('../static/images/cabo-da-roca.png'); background-size: cover; background-repeat: no-repeat; background-position: center;", text: 'Breath!' },
          { val: "line-height: 600px; font-size: 4rem; font-weight: normal; color: white; text-align: center; background-image: url('../static/images/paris.png'); background-size: cover; background-repeat: no-repeat; background-position: center;", text: 'Stay Foolish, Stay Hungry!' }
        ]
      }
    },
    components: {
      Slider,
      SliderItem
    }
  }
</script>

<style scoped lang="less">

  #app {
    .container-fluid {
      padding: 0px;
      .carousel {
        .listval {
          word-wrap: break-word;
        }
      }
    }
  }
</style>
