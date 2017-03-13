<template>
  <section class="frame">
    <div class="frame-box">
      <header>
        <h4>this is a h4 header</h4>
        <ul class="control-zone">
          <li>
            <a class="el-icon-d-caret" @click="pinFrame(index, $event)" :class="{active: pined}"></a>
          </li>
          <li class="fullscreen-btn">
            <a class="el-icon-plus" @click="toggleFullscreen"></a>
          </li>
          <li>
            <a class="el-icon-arrow-up" @click="toggleFrame($event)"></a>
          </li>
          <li>
            <a class="el-icon-close" @click="removeFrame(index)"></a>
          </li>
        </ul>
      </header>
      <div class="frame-content">
        <template>
          <p>{{frame.data}}</p>
          <!-- <el-carousel indicator-position="outside">
              <el-carousel-item v-for="item in 4">
                <h3>{{ item }}</h3>
              </el-carousel-item>
            </el-carousel> -->
        </template>
      </div>
    </div>
  </section>
</template>
<script>
import $ from 'webpack-zepto'
export default {
  data: function() {
    return {
      title: 'asdasd',
      isFullscreem: false
    }
  },
  props: ['index', 'frame', 'pined'],
  methods: {
    toggleFrame: function(event) {
      $(event.target).toggleClass('slide-down');
      $(this.$el).find('.frame-content').toggleClass('slide-up')
    },
    removeFrame: function(index) {
      this.$store.commit('removeFrame', index)
    },
    pinFrame: function(index, event) {
      let $target = $(event.target)
      if (this.pined) {
        this.$store.commit('unpinFrame', index)
      } else {
        this.$store.commit('pinFrame', index)
      }

    },
    toggleFullscreen: function() {
      let $el = $(this.$el)
      $el.toggleClass('frame-fullscreen');
      $('.main-container').toggleClass('hide-scrollbar');
      if (!this.isFullscreem) {
        this.isFullscreem = true
        $el.find('.control-zone li').not('.fullscreen-btn').hide()
        $el.width(window.innerWidth)
        $el.height(window.innerHeight)
        $(window).on('resize', function(event) {
          event.preventDefault();
          $el.width(window.innerWidth)
          $el.height(window.innerHeight)
        });
      } else {
        $(window).off('resize')
        $el.removeAttr('style')
        $el.find('.control-zone li').not('.fullscreen-btn').show()
        this.isFullscreem = false
      }
    }
  }
}
</script>
<style lang="scss">
.frame {
  // border: 1px #000 solid;
  position: relative;
  overflow: hidden;
  transition: all .3s ease-out;
  max-height: 500px;
  .frame-box {
    margin: 0 24px 24px;
    -webkit-box-shadow: 0 1px 6px rgba(0, 0, 0, .12);
    box-shadow: 0 1px 6px rgba(0, 0, 0, .12);
    position: relative;
    background-color: #fff;
    header {
      // background-color: #1D8CE0;
      color: #848790;
      padding-left: 10px;
      border-bottom: 1px solid #e6e9ef;
      height: 39px;
      // color: #fff;
      position: relative;
      h4 {
        margin: 0;
        line-height: 39px;
        overflow: hidden;
        white-space: nowrap;
        padding-right: 40px;
        text-overflow: ellipsis;
      }
      ul.control-zone {
        position: absolute;
        right: 0;
        top: 0;
        margin: 0;
        padding: 0;
        li {
          padding: 0;
          display: inline-block;
          a {
            -webkit-transition: all .2s;
            -moz-transition: all .2s;
            -o-transition: all .2s;
            -ms-transition: all .2s;
            transition: all .2s;
            -webkit-transition-timing-function: cubic-bezier(.694, .0482, .335, 1);
            -moz-transition-timing-function: cubic-bezier(.694, .0482, .335, 1);
            -o-transition-timing-function: cubic-bezier(.694, .0482, .335, 1);
            -ms-transition-timing-function: cubic-bezier(.694, .0482, .335, 1);
            transition-timing-function: cubic-bezier(.694, .0482, .335, 1);
            float: left;
            border-left: 1px solid #e6e9ef;
            height: 39px;
            font-size: 16px;
            position: relative;
            color: #9b9da2;
            width: 41px;
            text-align: center;
            line-height: 39px;
            cursor: pointer;
            &:hover {
              background: #40454f;
              color: #fff;
            }
            &.active {
              color: red;
            }
            &:before{
              transition: transform .2s ease-out;
              transform-style: preserve-3d;
              display: inline-block;
            }
            &.slide-down:before{
              transform: rotateX(180deg);
            }
          }
        }
      }
    }
    .frame-content {
      min-height: 300px;
      overflow: hidden;
      max-height: 500px;
      transition: all .1s ease-out;
      &.slide-up {
        min-height: 0;
        max-height: 0;
      }
    }
  }
  &.frame-fullscreen {
    position: fixed;
    top: 0;
    left: 0;
    max-height: none;
    z-index: 999;
    background: #fff;
    .frame-box {
      margin: 0;
      height: 100%;
    }
  }
}
</style>
