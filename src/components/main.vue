<template>
  <div class="main-container">
    <v-editor></v-editor>
    <div class="frame-container">
      <div class="frame-stream">
        <div class="frame-pined">
          <transition-group name="frame-fade">
            <v-frame v-for="(frame, index) in pinFrames" :index="index" :frame="frame" :key="frame.key" pined="true"></v-frame>
          </transition-group>
        </div>
        <div>
          <transition-group name="frame-fade">
            <v-frame v-for="(frame, index) in frames" :index="index" :frame="frame" :key="frame.key"></v-frame>
          </transition-group>
        </div>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
import vEditor from './editor.vue'
import vFrame from './frame.vue'
// import _ from 'lodash';
export default {
  components: {
    vEditor,
    vFrame
  },
  data: function() {
    return {
      title: 'I am a MAIN container!'
    }
  },
  computed: {
    frames() {
      return this.$store.getters.frames
    },
    pinFrames() {
      return this.$store.getters.pinFrames
    }
  }
}
</script>
<style lang="scss">
.main-container {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 80px;
  right: 0;
  z-index: 10;
  overflow: auto;
  background-color: #d2d5da;
  -webkit-transition: all .4s;
  -moz-transition: all .4s;
  -o-transition: all .4s;
  -ms-transition: all .4s;
  transition: all .4s;
  -webkit-transition-timing-function: cubic-bezier(.694, .0482, .335, 1);
  -moz-transition-timing-function: cubic-bezier(.694, .0482, .335, 1);
  -o-transition-timing-function: cubic-bezier(.694, .0482, .335, 1);
  -ms-transition-timing-function: cubic-bezier(.694, .0482, .335, 1);
  transition-timing-function: cubic-bezier(.694, .0482, .335, 1);
  &.active {
    left: 380px;
  }
  &.hide-scrollbar {
    overflow: hidden;
  }
  .frame-container {
    position: absolute;
    left: 0;
    right: 0;
    top: 80px;
    bottom: 0;
    overflow-y: auto;
    overflow-x: hidden;
    -webkit-transition: all .25s;
    -moz-transition: all .25s;
    -o-transition: all .25s;
    -ms-transition: all .25s;
    transition: all .25s;
  }
  .frame-fade-enter-active,
  .frame-fade-leave-active {
    transition: all .3s ease-out;
  }
  .frame-fade-enter,
  .frame-fade-leave-active {
    opacity: 0;
    max-height: 0;
  }
  .frame-fade-enter {
    transform: translateY(-30px);
  }
}
</style>
