<template>
  <div id="app">
    <transition name="view-fade">
      <router-view class="view-fade"></router-view>
    </transition>
  </div>
</template>
<script>
import vHello from './components/Hello.vue'
import vProject from './components/Project.vue'
export default {
  components: {
    vHello,
    vProject
  },
  data () {
    return {
      transitionName: 'view-slide-left'
    }
  }
}
</script>

<style>
.view-fade {
  transition: all .5s cubic-bezier(.55,0,.1,1);
}
.view-fade-enter, .view-fade-leave-active {
  opacity: 0;
}

</style>
