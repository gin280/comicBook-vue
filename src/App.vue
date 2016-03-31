<template>
fsdfdsfdfsfdf
  <div class="page page-current">
    <bar>
      <bar-item path='/home' icon='home'></bar-item>
      <bar-item path='/search' icon='search'></bar-item>
      <bar-item path='/me' icon='me'></bar-item>
    </bar>
    <router-view transition='fade' transition-mode='out-in' keep-alive></router-view>
  </div>
</template>

<script>
import Bar from './components/Bar'
import BarItem from './components/BarItem'

export default {
  replace: false,
  components: {
    Bar,
    BarItem
  }
}
</script>

<style>
.fade-transition {
  transition: opacity .2s ease;
}
.fade-enter, .fade-leave {
  opacity: 0;
}
</style>
