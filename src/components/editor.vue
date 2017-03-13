<template>
  <div class="editor">
    <form action="">
      <div class="input-box">
        <el-input placeholder="请输入内容" v-model="inputVal">
          <el-select v-model="selectVal" slot="prepend" placeholder="请选择" :style="'width: 100px'">
            <el-option label="aaaa" value="1"></el-option>
            <el-option label="ssss" value="2"></el-option>
            <el-option label="dddd" value="3"></el-option>
          </el-select>
          <el-button slot="append" icon="search"></el-button>
        </el-input>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  data: function() {
    return {
      inputVal: '',
      selectVal: ''
    }
  }
}
</script>
<style lang="scss">
.editor {
  margin: 0 24px 24px;
  position: fixed;
  top: 0;
  -webkit-box-shadow: 0 1px 4px rgba(0, 0, 0, .1);
  box-shadow: 0 1px 4px rgba(0, 0, 0, .1);
  .el-input__inner {
    height: 60px;
  }
}
</style>
