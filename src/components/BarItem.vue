<template>
  <a class="tab-item" v-link="{path: path, activeClass: 'active'}">
    <span class="icon" :class='iconClass'></span>
  </a>
</template>

<script>
  export default {
    props: {
      path: '',
      icon: ''
    },
    computed: {
      iconClass () {
        return `icon-${this.icon}`
      }
    }
  }
</script>

