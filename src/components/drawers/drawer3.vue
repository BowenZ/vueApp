<template>
  <div class="drawer-inner">
    <header>
      <h4>{{title}}</h4>
    </header>
    <section class="drawer-content">
      <div class="drawer-box" v-if="">
        <h5>This is a h5 titile</h5>
        <el-radio-group v-model="radio2">
          <el-radio :label="3">备选项</el-radio>
          <el-radio :label="6">备选项</el-radio>
          <el-radio :label="9">备选项</el-radio>
        </el-radio-group>
        <template>
          <el-radio-group v-model="radio3">
            <el-radio-button label="上海"></el-radio-button>
            <el-radio-button label="北京"></el-radio-button>
            <el-radio-button label="广州"></el-radio-button>
            <el-radio-button label="深圳"></el-radio-button>
          </el-radio-group>
          <div style="margin: 15px 0;"></div>
          <el-radio-group v-model="radio4">
            <el-radio-button label="上海"></el-radio-button>
            <el-radio-button label="北京" :disabled="true"></el-radio-button>
            <el-radio-button label="广州"></el-radio-button>
            <el-radio-button label="深圳"></el-radio-button>
          </el-radio-group>
          <div style="margin: 15px 0;"></div>
          <el-radio-group v-model="radio5" :disabled="true">
            <el-radio-button label="上海"></el-radio-button>
            <el-radio-button label="北京"></el-radio-button>
            <el-radio-button label="广州"></el-radio-button>
            <el-radio-button label="深圳"></el-radio-button>
          </el-radio-group>
        </template>
        <template>
          <el-checkbox-group v-model="checkList">
            <el-checkbox label="复选框 A"></el-checkbox>
            <el-checkbox label="复选框 B"></el-checkbox>
            <el-checkbox label="复选框 C"></el-checkbox>
            <el-checkbox label="禁用" disabled></el-checkbox>
            <el-checkbox label="选中且禁用" disabled></el-checkbox>
          </el-checkbox-group>
        </template>
        <template>
          <el-select v-model="value5" multiple placeholder="请选择">
            <el-option v-for="(item, index) in options" :label="item.label" :value="item.value" :key="item.index">
            </el-option>
          </el-select>
        </template>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  data: function() {
    return {
      title: 'This is a header',
      radio2: 3,
      radio3: '上海',
      radio4: '上海',
      radio5: '上海',
      checkList: ['选中且禁用', '复选框 A'],
      options: [{
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '双皮奶'
      }, {
        value: '选项3',
        label: '蚵仔煎'
      }, {
        value: '选项4',
        label: '龙须面'
      }, {
        value: '选项5',
        label: '北京烤鸭'
      }],
      value5: '123'
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
