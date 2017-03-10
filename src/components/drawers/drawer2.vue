<template>
  <div class="drawer-inner">
    <header>
      <h4>{{title}}</h4>
    </header>
    <section class="drawer-content">
      <div class="drawer-box" v-if="">
        <h5>This is a h5 titile</h5>
        <el-button type="primary" size="small" icon="edit"></el-button>
        <el-button type="primary" size="small" icon="share"></el-button>
        <el-button type="primary" size="small" icon="delete"></el-button>
        <el-button type="primary" size="small" icon="search">搜索</el-button>
        <el-button type="primary" size="small">上传<i class="el-icon-upload el-icon--right"></i></el-button>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  data: function() {
    return {
      title: 'This is a header'
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
