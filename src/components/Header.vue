<template>
  <div id="header">
    <div class="content-box">
      <h1 class="title">123232</h1>
      <div class="menus">
        <span @click="goBack">返回</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "header",
  props: {
    msg: String,
  },
  methods: {
    goBack() {
      this.$router.push({ name: "Login" });
    },
  },
};
</script>

<style lang="less" scoped="scoped">
#header {
  width: 100%;
  height: 50px;
  background-color: rgb(96, 148, 54);
  overflow: hidden;
  min-width: 1000px;

  .content-box {
    max-width: 1200px;
    margin: auto;
    min-width: 800px;
    background-color: rgb(96, 148, 54);
  }

  .title {
    color: white;
    font-size: 20px;
    line-height: 50px;
    font-weight: bold;
    float: left;
  }
  .menus {
    float: right;
    span {
      line-height: 50px;
      color: white;
      font-size: 13px;
      cursor: pointer;
      margin-left: 10px;
    }
  }
}
</style>