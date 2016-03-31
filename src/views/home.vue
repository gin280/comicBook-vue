<template>
  <div class="content">
    <h1>home</h1>
    <Slider></Slider>
  </div>
</template>

<script>
  import Slider from '../components/Slider'
  import $ from 'zepto'

  export default {
    components: {
      Slider
    },
    ready () {
      $.init()
    }
  }
</script>

