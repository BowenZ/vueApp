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
