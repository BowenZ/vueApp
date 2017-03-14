<template>
  <div class="drawer-inner">
    <header>
      <h4>{{title}}</h4>
    </header>
    <section class="drawer-content">
      <div class="drawer-box">
        <v-search title="这是一个h5标题"></v-search>
        <el-button type="gray" v-for="label in nodeLabels" :key="label.id" @click="getData">
          {{label.name}}
        </el-button>
      </div>
      <div class="drawer-box">
        <v-search title="这是一个h5标题"></v-search>
        <el-button type="gray" v-for="label in relationshipLabels" :key="label.id" @click="getData">
          {{label.name}}
        </el-button>
      </div>
      <div class="drawer-box">
        <v-search title="路由跳转链接"></v-search>
        <el-menu default-active="2" class="el-menu-vertical-demo">
          <el-submenu index="1">
            <template slot="title"><i class="el-icon-message"></i>导航一</template>
            <el-menu-item-group>
              <template slot="title">分组一</template>
              <router-link :to="{name: 'hello'}">
                <el-menu-item index="1-1"><i class="el-icon-menu"></i> Go to Hello
                </el-menu-item>
              </router-link>
              <el-menu-item index="1-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="1-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="1-4">
              <template slot="title">选项4</template>
              <el-menu-item index="1-4-1">选项1</el-menu-item>
            </el-submenu>
          </el-submenu>
          <router-link :to="{name: 'project'}">
            <el-menu-item index="2"><i class="el-icon-menu"></i> Go to Default
            </el-menu-item>
          </router-link>
          <router-link :to="{name: 'index'}">
            <el-menu-item index="3"><i class="el-icon-setting"></i> Go to Index
            </el-menu-item>
          </router-link>
          <router-link :to="{name: 'main'}">
            <el-menu-item index="4"><i class="el-icon-setting"></i> Go to Main
            </el-menu-item>
          </router-link>
        </el-menu>
      </div>
    </section>
  </div>
</template>
<script>
import {
  mapGetters,
  mapActions
} from 'vuex'
import vSearch from '../secondary/search.vue'
export default {
  components: {
    vSearch
  },
  data: function() {
    return {
      title: 'This is a header'
    }
  },
  created() {
    this.$store.dispatch('getNodeLabels')
    this.$store.dispatch('getRelationshipLabels')
  },
  computed: mapGetters({
    nodeLabels: 'nodeLabels',
    relationshipLabels: 'relationshipLabels'
  }),
  methods: {
    getData: function() {
      this.$store.dispatch('getSearchLabels')
    }
  }
}
</script>
<style lang="scss">
.drawer-inner {
  min-height: 100%;
  padding: 8px 24px 42px;
  box-sizing: border-box;
  h3,
  h4,
  h5 {
    position: relative;
    color: #fff;
    font-weight: 700;
    padding: 0 24px;
    margin: 0;
    text-align: start;
    box-sizing: border-box;
  }
  h4 {
    margin: -9px -24px 0;
    background-color: #292b31;
    font-size: 17px;
    height: 73px;
    padding-top: 28px;
  }
  h5 {
    padding: 0;
    line-height: 39px;
    font-size: 13px;
    margin-top: 12px;
    margin-bottom: 12px;
    border-bottom: 1px solid #424650;
  }
}
</style>
