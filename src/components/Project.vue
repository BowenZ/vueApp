<template>
  <div id="index">
    <v-menu></v-menu>
    <v-main :class="{active: drawerIsOpened}"></v-main>
  </div>
</template>
<script>
import vMenu from './menu.vue'
import vMain from './main.vue'
export default {
  components: {
    vMenu,
    vMain
  },
  data: function() {
    return {
      visible: false
    }
  },
  computed: {
    drawerIsOpened: function(){
      return this.$store.state.drawerIsOpened
    }
  }
}
</script>
<style lang="scss">
</style>
