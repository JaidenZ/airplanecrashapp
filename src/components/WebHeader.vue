<template>
  <div id="web_header">
    <div class="content-box">
      <h1 class="title">{{msg}}</h1>
      <div class="menus">
        <span v-if="this.$store.getters.isLogin">{{this.$store.getters.currentUser.NickName}}</span>
        <span v-if="this.$store.getters.isLogin">积分:{{this.$store.getters.currentUser.BattleSocre}}</span>
        <span v-if="this.$store.getters.isLogin" @click="goBack">退出</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "WebHeader",
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
#web_header {
  width: 100%;
  height: 60px;
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
    font-size: 18px;
    line-height: 60px;
    font-weight: bold;
    float: left;
  }
  .menus {
    float: right;
    span {
      line-height: 60px;
      color: white;
      font-size: 15px;
      cursor: pointer;
      margin-left: 10px;
    }
  }
}
</style>