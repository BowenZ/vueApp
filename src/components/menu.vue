<template>
  <div class="left-bar">
    <nav>
      <ul>
        <li>
          <a href="" title="菜单" @click.prevent="toggleDrawer(0, $event)"><span class="el-icon-menu"></span></a>
        </li>
        <li>
          <a href="" title="菜单" @click.prevent="toggleDrawer(1, $event)"><span class="el-icon-star-off"></span></a>
        </li>
        <li>
          <a href="" title="菜单" @click.prevent="toggleDrawer(2, $event)"><span class="el-icon-date"></span></a>
        </li>
      </ul>
      <ul>
        <li>
          <a href="" title="菜单" @click.prevent="toggleDrawer(3, $event)"><span class="el-icon-search"></span></a>
        </li>
        <li>
          <a href="" title="菜单" @click.prevent="toggleDrawer(4, $event)"><span class="el-icon-setting"></span></a>
        </li>
        <li>
          <a href="" title="菜单" @click.prevent="toggleDrawer(5, $event)"><span class="el-icon-share"></span></a>
        </li>
      </ul>
    </nav>
    <div id="drawer">
      <transition-group name="drawer-fade" mode="">
        <div class="drawer-pane" :key="'data1'" v-show="showDrawer(0)">
          <v-drawer1></v-drawer1>
        </div>
        <div class="drawer-pane" :key="'data2'" v-show="showDrawer(1)">
          <v-drawer2></v-drawer2>
        </div>
        <div class="drawer-pane" :key="'data3'" v-show="showDrawer(2)">
          <v-drawer3></v-drawer3>
        </div>
        <div class="drawer-pane" :key="'data4'" v-show="showDrawer(3)">
          <v-drawer4></v-drawer4>
        </div>
        <div class="drawer-pane" :key="'data5'" v-show="showDrawer(4)">
          <v-drawer5></v-drawer5>
        </div>
        <div class="drawer-pane" :key="'data6'" v-show="showDrawer(5)">
          <v-drawer6></v-drawer6>
        </div>
      </transition-group>
    </div>
  </div>
</template>
<script>
// import drawer1 from "./drawer1"
import $ from 'webpack-zepto'
export default {
  data: function() {
    return {
      currentIndex: 0
    }
  },
  methods: {
    toggleDrawer(index, event) {
      this.currentIndex = index
      let $targetLi = $(event.target).parents('li')
      if ($targetLi.hasClass('active')) {
        $targetLi.removeClass('active')
        this.$store.commit('closeDrawer');
      } else {
        $targetLi.parents('nav').find('li.active').removeClass('active')
        $targetLi.addClass('active')
        this.$store.commit('openDrawer');
      }
      return false
    },
    showDrawer(index) {
      return index === this.currentIndex
    }
  },
  components: {
    vDrawer1: require('./drawers/drawer1.vue'),
    vDrawer2: require('./drawers/drawer2.vue'),
    vDrawer3: require('./drawers/drawer3.vue'),
    vDrawer4: require('./drawers/drawer4.vue'),
    vDrawer5: require('./drawers/drawer5.vue'),
    vDrawer6: require('./drawers/drawer6.vue')
  }
}
</script>
<style lang="scss">
@import "../assets/scss/variables.scss";
.left-bar {
  position: fixed;
  height: 100%;
  left: 0;
  top: 0;
  nav {
    background: #4c4957;
    width: 80px;
    height: 100%;
    overflow: hidden;
    position: absolute;
    top: 0;
    left: 0;
    ul {
      list-style: none;
      margin: 0;
      padding: 0;
      li {
        padding: 0;
        margin: 0;
        border-bottom: 1px solid #5d6370;
        position: relative;
        transition: background .1s ease-out;
        a {
          display: block;
          line-height: 70px;
          text-align: center;
          width: 80px;
          position: relative;
          -webkit-box-shadow: none;
          box-shadow: none;
          padding: 0;
          margin: 0;
          text-shadow: none;
          color: #797979;
          font-size: 28px;
          font-weight: 200;
          transition: color .1s ease-out;
        }
        &.active {
          background-color: #30333a;
          &:nth-of-type(1) a {
            color: $flat-green;
          }
          &:nth-of-type(2) a {
            color: $flat-yellow;
          }
          &:nth-of-type(3) a {
            color: $flat-blue;
          }
        }
        &:nth-of-type(1) a:hover {
          color: $flat-green;
        }
        &:nth-of-type(2) a:hover {
          color: $flat-yellow;
        }
        &:nth-of-type(3) a:hover {
          color: $flat-blue;
        }
      }
      &:nth-of-type(2) {
        position: absolute;
        bottom: 0;
        li {
          &.active {
            &:nth-of-type(1) a {
              color: $flat-purple;
            }
            &:nth-of-type(2) a {
              color: $flat-red;
            }
            &:nth-of-type(3) a {
              color: $flat-white;
            }
          }
          &:nth-of-type(1) {
            border-top: 1px solid #5d6370;
            a:hover {
              color: $flat-purple;
            }
          }
          &:nth-of-type(2) a:hover {
            color: $flat-red;
          }
          &:nth-of-type(3) a:hover {
            color: $flat-white;
          }
        }
      }
    }
  }
  #drawer {
    position: absolute;
    top: 0;
    left: 80px;
    width: 300px;
    height: 100%;
    color: #bcc0c9 !important;
    background-color: #30333a;
    overflow-y: auto;
    .drawer-pane {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
    }
    .drawer-fade-enter-active,
    .drawer-fade-leave-active {
      transition: all .3s ease-out;
    }
    .drawer-fade-enter {
      transform: translateX(-30px);
    }
    .drawer-fade-enter,
    .drawer-fade-leave-active {
      opacity: 0;
    }
  }
}
</style>
