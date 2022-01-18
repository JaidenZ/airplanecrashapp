<template>
  <div id="web_header">
    <div class="content-box">
      <div class="tips">
        <span>{{ msg }}</span>
      </div>

      <div class="menus">
        <span v-if="this.$store.getters.isLogin">
          <i class="el-icon-user"></i>
          {{ this.$store.getters.currentUser.NickName }}
        </span>
        <span v-if="this.$store.getters.isLogin">
          积分:{{ this.$store.getters.currentUser.BattleSocre }}
        </span>
        <span v-if="this.$store.getters.isLogin" @click="goBack">退出</span>
      </div>
      <div class="statusmenu">
        <el-tag v-if="this.$store.getters.currentUser.Status == 1" type="info" effect="dark"
          >等待对局</el-tag
        >
        <el-tag v-if="this.$store.getters.currentUser.Status == 2" type="warning" effect="dark"
          >预备中</el-tag
        >
        <el-tag v-if="this.$store.getters.currentUser.Status == 3" effect="dark">对战中</el-tag>
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
  overflow: hidden;
  min-width: 1000px;

  .content-box {
    max-width: 1200px;
    margin: auto;
    min-width: 800px;
    height: 100%;
  }
  .tips {
    float: left;
    span {
      line-height: 60px;
      color: white;
      font-size: 18px;
      margin-left: 0px;
    }
  }
  .statusmenu {
    float: right;
    margin-right: 20px;
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